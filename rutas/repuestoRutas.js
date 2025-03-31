const express = require("express");
const router = express.Router();
const Repuesto = require("../temp_modelo/temp_repuesto");

router.get("/", async(req,res)=>{
    const repuesto = await Repuesto.find();
    res.json(repuesto);
});

router.post("/", async (req, res) => {
    try {
      console.log("Recibido del formulario:", req.body);
  
      const nuevoRepuesto = new Repuesto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        fecha: req.body.fecha,
      });
  
      const guardado = await nuevoRepuesto.save();
      res.status(201).json(guardado);
    } catch (error) {
      console.error("Error al guardar:", error);
      res.status(500).json({ error: "Error al guardar el repuesto" });
    }
});
  
// Buscar repuestos por nombre (query ?nombre=aceite)
router.get("/buscar", async (req, res) => {
    const nombre = req.query.nombre || "";
    const resultados = await Repuesto.find({
      nombre: { $regex: nombre, $options: "i" },
    });
    res.json(resultados);
});

module.exports = router;

