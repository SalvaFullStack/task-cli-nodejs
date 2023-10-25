const oldStudent = { name: 'David', bootcamp: 'Full Stack' }

const oldStudent2 = oldStudent
console.log(oldStudent === oldStudent2)

const oldStudentCopy = { ...oldStudent }

console.log(oldStudent, oldStudentCopy)
console.log(oldStudent === oldStudentCopy)

// function changeBootcamp(oldStudent, newBootcamp) {
// 	return {
// 		name: oldStudent.name,
// 		bootcamp: newBootcamp,
// 	}
// }

const newStudent = changeBootcamp(oldStudent, 'Data science')

console.log('NUEVO:', newStudent)
console.log('VIEJO: ', oldStudent)

const numbers = [1, 5, 6]

const numbersCopy = [...numbers]

console.log(numbersCopy)

function printNumbers(n1, n2, n3) {
	console.log(n1)
	console.log(n2)
	console.log(n3)
}

printNumbers(...numbers)
const pares = [2, 6, 10]
const impares = [1, 3, 5, 11]

// Concatenamos
const todos = [...pares, ...impares]

console.log(todos)

// Añadir item

const otroTodosAfter = [...todos, 'ESTE']
const otroTodosBefore = ['Y ESTE', ...otroTodosAfter]
console.log(otroTodosBefore)

const coche = {
	marca: 'Renaul',
	modelo: 'Megane',
}

const extra = {
	llantas: true,
	aleron: true,
}

// shorthand
// const cocheEntero = {coche, extra}

const cocheEntero = { ...coche, ...extra }

console.log(cocheEntero)

// Update obj properties
const student = { firstname: 'Marcos', bootcamp: 'Data Science' }

const otro = { ...student, bootcamp: 'Full Stack' }

console.log(otro)
