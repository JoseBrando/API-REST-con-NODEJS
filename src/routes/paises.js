const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");

router.get("/", async(req, res) => {
    const response = await fetch("https://restcountries.eu/rest/v2/region/americas");
    const users = await response.json(); // convertir la respuesta a json
    res.json(users);
});

module.exports = router;