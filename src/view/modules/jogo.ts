import verificaResultadoJogo, {
	geraJogadaAleatoria,
	geraJogadaComputador,
	JOGADA,
} from '../../model/jogo'

function obterJogadaDoUsuario() {
	const jogadaEscolhida$ = <HTMLInputElement>(
		document.querySelector('input[name="usuario"]:checked')
	)
	if (jogadaEscolhida$) {
		switch (jogadaEscolhida$.value) {
			case 'papel':
				return JOGADA.PAPEL
			case 'pedra':
				return JOGADA.PEDRA
			case 'tesoura':
				return JOGADA.TESOURA
		}
	}
}

const resposta = `
<label class="card col-3 mx-2">
	<img
		class="mt-3 card-img-top"
		src="assets/mao-papel.png"
		alt="Papel"
	/>
	<div class="card-body">
		<h5 class="card-title">
			Papel
		</h5>
	</div>
</label>`

export default function controleDeJogo() {
	const jogadaDoComputador$ = document.querySelector('.jogada-do-computador')
	const btnJogar$ = document.querySelector('.jogar')

	btnJogar$.addEventListener('click', () => {
		const jogadausuario = obterJogadaDoUsuario()
		const jogadaDoComputador = geraJogadaComputador(geraJogadaAleatoria)

		const resultado = verificaResultadoJogo(
			jogadausuario,
			jogadaDoComputador
		)
		console.log(resultado)
		document.body.setAttribute('style', 'backgorund:red')
	})
}
