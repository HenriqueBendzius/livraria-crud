const livrosServices = require('../Services/livrosServices')

const geralController = {
    showHome: (req, res) => {

        const livros = livrosServices.listarTodosLivros();
        return res.render("home" ,{livros});

    }
}

module.exports = geralController;