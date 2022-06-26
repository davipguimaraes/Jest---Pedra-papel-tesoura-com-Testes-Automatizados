const emoji = ['papel', 'tesoura', 'pedra']
export function faviconChange(timerEmMS = 500) {
	const favicon$ = document.querySelector('.favicon')
	let counter = 0
	setInterval(() => {
		favicon$.setAttribute('href', `assets/mao-${emoji[counter]}.png`)

		counter = (counter + 1) % emoji.length
	}, timerEmMS)
}
