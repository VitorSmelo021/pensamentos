const Thought = require("../model/Thought");

module.exports = {
    async createThought(request, response){
        const { title, description } = request.body
        // funcao create criar ou inserir os dados.
        // nessa aplicacao a funcao create() é responsavel por cadastrar os pensamentos no banco de dados na tabela de thoughts
        const thought = await Thought.create({title, description});

        return response.json(thought)
    }
}