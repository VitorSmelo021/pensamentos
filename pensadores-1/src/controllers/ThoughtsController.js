const Thought = require("../model/Thought");

module.exports = {
    // funcao respnsavel por buscar todos os pensamentos cadastrado
    async findALLThoughts(request, response) {
        const thoughts = await Thought.findAll({ raw: true})

        return response.json(thoughts)
    },

    async createThought(request, response){
        const { title, description } = request.body
        // funcao create criar ou inserir os dados.
        // nessa aplicacao a funcao create() é responsavel por cadastrar os pensamentos no banco de dados na tabela de thoughts
        const thought = await Thought.create({title, description});

        return response.json(thought)
    },

    async findOneThoughts(request, response) {
        const { id } = request.params

        const thought = await Thought.findOne({ where: {id: id }});
    
        return response.json(thought)
    },

    async updateThoughts(request, response){
        const { id } = request.params
        const { title, description}  = request.body

        const thought =await Thought.update(
            {
                title,
                description
            },
            {
                where: { id: id }
            }
        )

        return response.json({message: "Pensamento selecionado foi atualizado com sucesso"})
    },

    async deleteThoughts(request, response){
        const { id } = request.params

        const thought = await Thought.destroy({ where: { id: id}});

        return response.json({ message: "Pensamento deletado com sucesso "})
    }

}