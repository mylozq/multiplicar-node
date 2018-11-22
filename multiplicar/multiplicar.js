const fs = require('fs');
const colors=require('colors');


const listarTabla =(base, limite=10)=>{	

	console.log('========================'.green);
	console.log(`Tabla del ${base} al ${limite}`.green);
	console.log('========================'.green);

	for(let i =1;i<=limite;i++){	
			console.log(`${base}*${i} = ${base*i}`.black);
		}
}

const crearArchivo = (base, limite=10) =>{

	return new Promise((resolve,reject)=>{

		if(!Number(base)){
			reject(`El valor introducido ${base} no es un numero`);
			return;
		}
		let data='';
		for(let i =1;i<=limite;i++){	
			data+=`${base}*${i} = ${base*i}\n`;
		}
		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
		  if (err) 
		  	reject(err)
		  else
		  	resolve(`tablas/tabla-${base}-al-${limite}.txt`);
		  console.log('el archivo ha sido creado'.blue);
		});
	});
}

module.exports = {
	crearArchivo,
	listarTabla
}