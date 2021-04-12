const {Usuario, Comentario, Post, sequelize} = require('./models');
const { Op } = require('sequelize');

Post.findByPk(1, { include:[ 'comentario' ]})
    .then( Post => {
            console.log(Post.toJSON());
            sequelize.close();
        }
    )

/*Usuario.findByPk(1, {
    include:[ 'posts' ]})
    .then(
        usuario => {
            console.log(usuario.toJSON());
            sequelize.close();
        }
    )


Usuario.findByPk(1, {
    include: [
        {association: "posts"}
    ]
})
.then((usuario) => {
    console.table(usuario.posts.map(post  => post.toJSON()))
});


Usuario.destroy({
    where: {
        id: 3
    }
}).then((resultado) => {
    console.log(resultado);
})


Usuario.update({
    email: 'sergio@digitalhouse.com'
}, {
    where: {
        id: 2
    }
}).then((resultado) => {
    console.log(resultado);
});


Usuario.create({

        nome: 'Stefani',
        email: 'stafani@digitalhouse.com',
        senha: '1234'
   
    }).then((resultado) => {
        console.log(resultado.toJSON());
     });

     Post.create({
         texto: 'eu consegui',
         usiarios_id: 11
     }).then((resultado) => {
        console.table(resultado.toJSON());
     });

Usuario.findAll({
    where: {
        nome: {[Op.like]: '%A%' }
    }
})
.then((resultado) => {
    console.table(resultado.map(post  => post.toJSON()));
});

Usuario.findAll({
    where: {
        nome: {[Op.notLike]: '%A%' }
    }
})
.then((resultado) => {
    console.table(resultado.map(post  => post.toJSON()));
});

var i = 0;
do{
Comentario.findAll({
            order: [
            ['id']
        ], 
         offset: i,
         limit: 2,
    })
    .then((resultado) => {
        console.table(resultado.map(post  => post.toJSON()));    
})
i += 2;
}while(i<6);

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
});*/