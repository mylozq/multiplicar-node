const opt ={
		base:{
			demand: true,
			alias: 'b'
		},
		limite:{
			alias: 'l',
			default: 10
		}

}

const argv = require('yargs')
			.command('listar','imprime en consola la tabla',opt)
			.command('crear','crea un archivo apartir de la base y el limite',opt)
			.help()
			.argv;

module.exports={
	argv
}