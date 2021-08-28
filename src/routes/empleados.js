const { Router } = require("express");
const router = Router();
const empleados = require('../empleados.json');
const _ = require("underscore");

router.get("/", (req, res) => {
    res.json( empleados );
});

router.post("/", (req, res) => {
    const { nombre, apellidoPaterno, apellidoMaterno, rfc } = req.body;
    
    if(nombre && apellidoPaterno && apellidoMaterno && rfc) {
        const id = empleados.length + 1;
        const fechaNacimiento = "";
        const newEmpleado = {id, ...req.body, fechaNacimiento};
        
        empleados.push(newEmpleado);
        res.json(empleados);
    } else {
        res.status(500).json({error: "Error interno en el servidor"});
    }
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellidoPaterno, apellidoMaterno, rfc  } = req.body;
    
    if(nombre && apellidoPaterno && apellidoMaterno && rfc) {
        _.each(empleados, (empleado, i) => {
            if(empleado.id == id) {
                empleado.nombre = nombre;
                empleado.apellidoPaterno = apellidoPaterno;
                empleado.apellidoMaterno = apellidoMaterno;
                empleado.rfc = rfc;
            }
        });

        res.json(empleados);
    } else {
        res.status(500).json({error: "Error interno en el servidor"});
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    _.each(empleados, (empleado, i) => {
        if(empleado.id == id) {
            empleados.splice(i, 1);
            console.log(empleados);            
        }
    });

    res.json(empleados);
});

module.exports = router;