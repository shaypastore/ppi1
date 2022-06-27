// Importando as dependências
const mongoose = require("mongoose");
//Referencia o model Poke
const Poke = mongoose.model("Pokemon");
// Vamos exportar um objeto com algumas funções
module.exports = {
  // Vai retornar todos os pokemons de nosso banco de dados
  async index(req, res) {
    //pega os parâmetros get da requisição
    const { page = 1 } = req.query;
    // retorna os pokemons de nosso banco de dados
    const pokes = await Poke.paginate({}, { page, limit: 10 });
    // vamos retornar em formato JSON
    return res.json(pokes);
  },
  // Criar um novo pokemon
  async store(req, res) {
    const Poke = await Poke.create(req.body);
    // Vamos retornar o pokemon que criamos
    return res.json(poke);
  },
  // Mostrar o detalhe de um pokemon
  async show(req, res) {
    const poke = await Poke.findById(req.params.id);
    // Vamos retornar o pokemon que encontramos
    return res.json(poke);
  },

  // Atualizar um pokemon
  async update(req, res) {
    // procura um pokemon pelo ID e atualiza ele
    const poke = await Poke.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // Vamos retornar o pokemon que encontramos
    return res.json(poke);
  },

  async delete(req, res) {
    await Poke.findByIdAndDelete(req.params.id);
    // Vamos retornar uma mensagem de sucesso sem conteúdo
    return res.send({ msg: "Registro apagado com sucesso!" });
  },
};
