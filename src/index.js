const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set("port", process.env.PORT | 3000);
app.set('json spaces', 2);

// middlewares (Morgan es un middleware -> procesa datos antes de que el servidor los reciba)
app.use(morgan('dev')); // permite ver por consola lo que va llegando del servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // Solo se procesará JSON

// routes
app.use( "/api/heroes", require("./routes/heroes") );
app.use( "/api/users", require("./routes/users") );

// starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${3000}`);
});