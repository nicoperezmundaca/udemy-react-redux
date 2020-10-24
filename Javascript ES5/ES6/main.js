/* Javascript ES5/ES6 */

/**
 * const: no permite la reasignación de la variable pero si la mutación
 * let: si permite la reasignación de la variable pero si la mutación
 */

let var1 = 1;
console.log(var1);
var1 = "hola";
console.log(var1);

/**
 * fat arrow functions
 */

function fn1(a, b) {
	return a + b;
}

const resultado1 = fn1(1,2);

const fn2 = (a, b) => a + b;

const resultado2 = fn2(1,2);

const fn3 = (a, b) => {
	return a + b;
}

const resultado3 = fn3(1,2);

console.log(resultado1, resultado2, resultado3);

/**
 * object destructuring
 */

const servicios = {
	api: {},
	mailer: 'soy mailer',
	apollo: {}
}

// usar propiedad de un objeto en particular
const enviarCorreo1 = ({ mailer }) => {
	console.log(mailer);
	// redactar codigo que envia correo
}

const enviarCorreo2 = (srs) => {
	const { mailer } = srs;
	console.log(mailer);
	// redactar codigo que envia correo
}

enviarCorreo1(servicios);
enviarCorreo2(servicios);

/**
 * array spread operator
 */

const array = [1, 2, 3, 4, 5];

const suma = (a, b) => a + b;

const resultado = suma(...array);

// crea una copia del arreglo que permite no mutar el elemento inicial al editar dicha variable copia
const copyArray = [...array];

console.log(resultado);
console.log(copyArray);

/**
 * object spread operator
 */

const object = {
	a: 1,
	b: 2
}

const copyObject = {
	data: {...object}
};
copyObject['data']['c'] = 3;

console.log(copyObject);