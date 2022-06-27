const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

// Define o schema do Curso
const PokeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  altura: {
    type: String,
    required: true,
  },
  peso: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// Adiciona o plugin mongoosePaginate em nosso schema
PokeSchema.plugin(mongoosePaginate);
// Registra o model Course em nossa aplicação informando seu
schema;
mongoose.model("Pokemon", PokeSchema);
