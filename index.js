const number = 625

let sum = 0
let i = 0

while (sum <= number) {
	sum = (Math.abs(1 - i) + 1) * (1 + i) / 2
	i++
	// console.log(sum)
}

console.log(`Минимум ${i} человек необходимо для ${number} рукопожатий при условии, что кто-то не поздоровался`)