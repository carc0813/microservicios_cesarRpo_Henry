const { Router } = require("express");
const controllers = require("../controllers");
const middelware = require("../middelwares");
const router = Router();

router.get("/", controllers.getCharacters);
router.post("/", middelware.characterValidation, controllers.createCharacters);
module.exports = router;
