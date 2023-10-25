const player = {
	life: 100,
	power: 100,
	bullets: [
		{ x: 10, y: 20 },
		{ x: 30, y: 30 },
	],
	pos: {
		x: 10,
		y: 20,
	},
	vel: {
		x: 1,
		y: 0,
	},
}

const player2 = player

player.life = 50
console.log(player2.life)

// No hace una copia profunda
const playerCopy = { ...player }

console.log(playerCopy === player)

playerCopy.life = 120

console.log(playerCopy.life)

playerCopy.pos.x = 4000

console.log(player.pos.x)

// Mecanismo nativo para hacer copias profundas de objetos mutables (anidados)
const copiaProfunda = JSON.parse(JSON.stringify(player))

console.log(copiaProfunda, player)

player.vel.y = 1

console.log(copiaProfunda.vel.y, player.vel.y)

const otraCopia = { ...player, vel: { ...player.vel } }
