const str = `{
	"name": "node1",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo Error: no test specified && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC"
}`

console.log(typeof str)

const parsed = JSON.parse(str)

console.log(parsed.scripts.test)

console.log(typeof parsed)

const car = {
	marca: 'Renault',
	modelo: 'Megane',
}

const strJSON = JSON.stringify(car)
console.log(JSON.stringify(JSON.parse(strJSON)))
console.log(typeof strJSON)
