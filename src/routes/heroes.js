const { Router } = require("express");
const router = Router();
const heroes = require('../heroes.json');
const _ = require("underscore");

router.get("/", (req, res) => {
    res.json( heroes );
});

router.post("/", (req, res) => {
    const { nombre, bio, aparicion, casa } = req.body;
    
    if(nombre && bio && aparicion && casa) {
        const id = heroes.length + 1;
        const img = "";
        const newHeroe = {id, ...req.body, img};
        
        heroes.push(newHeroe);
        res.json(heroes);
    } else {
        res.status(500).json({error: "Error interno en el servidor"});
    }
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, bio, aparicion, casa } = req.body;

    if(nombre && bio && aparicion && casa) {
        _.each(heroes, (heroe, i) => {
            if(heroe.id == id) {
                heroe.nombre = nombre;
                heroe.bio = bio;
                heroe.aparicion = aparicion;
                heroe.casa = casa;
            }
        });

        res.json(heroes);
    } else {
        res.status(500).json({error: "Error interno en el servidor"});
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    _.each(heroes, (heroe, i) => {
        if(heroe.id == id) {
            heroes.splice(i, 1);
            console.log(heroes);            
        }
    });

    res.json(heroes);
});

module.exports = router;