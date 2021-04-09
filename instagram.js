const {Usuario, Comentario, Post, sequelize} = require('./models');

Usuario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Comentario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Post.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Usuario.findByPk(1).then((resultado) => {
    console.table(resultado.toJSON());
});

Comentario.findByPk(1).then((resultado) => {
    console.table(resultado.toJSON());
});

Post.findByPk(1).then((resultado) => {
    console.table(resultado.toJSON());
});

Usuario.findOne({
    where: {
        nome: 'Gabriel Brunetti'
    }
}).then((resultado) => {
    console.table(resultado.toJSON());
});

Comentario.findOne({
    where: {
        texto: 'Fim de semana já não existe mais!'
    }
}).then((resultado) => {
    console.table(resultado.toJSON());
});

Post.findOne({
    where: {
        texto: 'Como foi o fim de semana?'
    }
}).then((resultado) => {
    console.table(resultado.toJSON());
});