//  Literal de objeto

const obj = {
	puertas: 3,
	arranca: function () {},
}

// Shorthand

let puertas = 4

// const obj2 = {
//   puertas: puertas,
//   arranca: function() {
//     console.log("RUM")
//   }
// }

const arranca = function () {
	console.log('RUM')
}

const obj2 = {
	puertas,
	arranca,
}

console.log(obj2)
