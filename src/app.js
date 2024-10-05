const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { OrdenCompra, DetalleOrdenCompra } = require('../models');  


const app = express();


app.set('port', process.env.PORT || 3000);  // Puerto


app.set('views', path.join(__dirname, 'views'));


app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,  
    allowProtoMethodsByDefault: true,     
  }
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));  // Log de las solicitudes HTTP
app.use(express.urlencoded({ extended: false }));  // Manejo de formularios
app.use(express.json());  // Manejo de JSON

// Rutas
app.get('/', async (req, res) => {
  try {
    const ordenesCompra = await OrdenCompra.findAll({
      include: [
        {
          model: DetalleOrdenCompra,
          as: 'detalles'  
        }
      ]
    });

    
    const ordenesCompras = ordenesCompra.map(orden => orden.get({ plain: true }));

    // Pasar los datos a la vista
    res.render('index', { ordenes: ordenesCompras });
  } catch (error) {
    console.error('Error en la consulta a la base de datos:', error);
    res.status(500).send('Error en la consulta');
  }
});

// Archivos públicos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar servidor
app.listen(app.get('port'), () => {
  console.log('Servidor cargado en el puerto', app.get('port'));
});
