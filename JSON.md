

## JSON

## JSON.parse:  string -> obj


```javascript
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


console.log(typeof str) // 'string'

const obj = JSON.parse(str)

console.log(obj.scripts.test) // echo Error: no test specified && exit 1
   
```


## JSON.stringify:  obj -> string



```javascript


const obj = {
	life: 100,
	power: 100,
	x: 10,
	y: 20,
	
}

console.log(typeof obj) // 'object'

const str = JSON.stringify(obj)

console.log(typeof str) // 'string'
   
