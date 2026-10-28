const express = require("express")
const router = express.Router()

const FilmeController = require("../controllers/filmeController")

router.get("/", FilmeController.getAllFilmes)
router.get("/search", FilmeController.getFilmesByFiltro)
router.get("/:id", FilmeController.getFilmeById)
router.post("/", FilmeController.createFilme)

module.exports = router