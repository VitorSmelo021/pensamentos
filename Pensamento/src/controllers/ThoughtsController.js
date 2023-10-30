const Thought = require("../model/Thought");

module.exports = {
    async dahsboard(request, response){
        // Função responsável por renderizar a página de dashboard
        const thoughts = await Thought.findAll({ raw: true})
        return response.render("thoughts/dashboard", { thoughts });
    },

    // Função responsavel por rendirecionar para a pagina de cadastrar o pensamento
    async registerThought(request, response){
        return response.render("thoughts/register");
    },

    async createThought(request, response){
        const { title, description } = request.body
        // funcao create criar ou inserir os dados.
        // nessa aplicacao a funcao create() é responsavel por cadastrar os pensamentos no banco de dados na tabela de thoughts
        const thought = await Thought.create({title, description});

        try{
            if(thought){
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error){
            console.error(error);
        }
    },

    async showPageEditThought(request, response){
        const { id } = request.params;

        const thought = await Thought.findOne({ where: { id: id}, raw: true });

        return response.render("thoughts/edit", { thought });
    },

    async updateThought(request, response){
        const { id } = request.params
        const { title, description}  = request.body

        const thought = await Thought.update(
            {
                title, description
            },
            {
                where: { id: id }
            }
        )

        try{
            if(thought){
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error){
            console.error(error)
        }
    },

    async deleteThoughts(request, response){
        const { id } = request.params

        const thought = await Thought.destroy({ where: { id: id }});

        try{
            if(thought){
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error){
            console.error(error)
        }
        
    }

}