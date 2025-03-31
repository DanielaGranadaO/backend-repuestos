const mongoose = require("mongoose");

const repuestoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  fecha: { type: Date, required: true },
});

module.exports = mongoose.model("Repuesto", repuestoSchema);
