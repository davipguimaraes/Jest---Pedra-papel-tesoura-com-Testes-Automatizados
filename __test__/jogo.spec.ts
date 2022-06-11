import verificaResultadoJogo, {
	geraJogadaComputador,
	JOGADA,
	ResultadoDeJogada,
	VENCEDOR,
} from '../src/jogo'

describe('jogo', () => {
	describe('VerificaResultadoDeJogada', () => {
		describe('Pedra vence tesoura', () => {
			it('Jogada 1', () => {
				const resultadoDeJogada: ResultadoDeJogada =
					verificaResultadoJogo(JOGADA.PEDRA, JOGADA.TESOURA)
				expect(resultadoDeJogada.jogada).toBe(JOGADA.PEDRA)
				expect(resultadoDeJogada.vencedor).toBe(VENCEDOR.JOGADOR_1)
			})
			it('jogada 2', () => {
				const resultadoDeJogada: ResultadoDeJogada =
					verificaResultadoJogo(JOGADA.TESOURA, JOGADA.PEDRA)
				expect(resultadoDeJogada.jogada).toBe(JOGADA.PEDRA)
				expect(resultadoDeJogada.vencedor).toBe(VENCEDOR.JOGADOR_2)
			})
		})

		describe('Tesoura vence papel', () => {
			it('Jogada 1', () => {
				const resultadoDeJogada: ResultadoDeJogada =
					verificaResultadoJogo(JOGADA.TESOURA, JOGADA.PAPEL)
				expect(resultadoDeJogada.jogada).toBe(JOGADA.TESOURA)
				expect(resultadoDeJogada.vencedor).toBe(VENCEDOR.JOGADOR_1)
			})
			it('jogada 2', () => {
				const resultadoDeJogada: ResultadoDeJogada =
					verificaResultadoJogo(JOGADA.PAPEL, JOGADA.TESOURA)
				expect(resultadoDeJogada.jogada).toBe(JOGADA.TESOURA)
				expect(resultadoDeJogada.vencedor).toBe(VENCEDOR.JOGADOR_2)
			})
		})

		describe('Papel vence pedra', () => {
			it('Jogada 1', () => {
				const resultadoDeJogada: ResultadoDeJogada =
					verificaResultadoJogo(JOGADA.PAPEL, JOGADA.PEDRA)
				expect(resultadoDeJogada.jogada).toBe(JOGADA.PAPEL)
				expect(resultadoDeJogada.vencedor).toBe(VENCEDOR.JOGADOR_1)
			})
			it('jogada 2', () => {
				const resultadoDeJogada: ResultadoDeJogada =
					verificaResultadoJogo(JOGADA.PEDRA, JOGADA.PAPEL)
				expect(resultadoDeJogada.jogada).toBe(JOGADA.PAPEL)
				expect(resultadoDeJogada.vencedor).toBe(VENCEDOR.JOGADOR_2)
			})
		})

		describe('EMPATE', () => {
			it('PAPEL', () => {
				const resultadoDeJogada: ResultadoDeJogada =
					verificaResultadoJogo(JOGADA.PAPEL, JOGADA.PAPEL)
				expect(resultadoDeJogada.jogada).toBe(JOGADA.PAPEL)
				expect(resultadoDeJogada.vencedor).toBe(VENCEDOR.EMPATE)
			})
			it('PEDRA', () => {
				const resultadoDeJogada: ResultadoDeJogada =
					verificaResultadoJogo(JOGADA.PEDRA, JOGADA.PEDRA)
				expect(resultadoDeJogada.jogada).toBe(JOGADA.PEDRA)
				expect(resultadoDeJogada.vencedor).toBe(VENCEDOR.EMPATE)
			})
			it('TESOURA', () => {
				const resultadoDeJogada: ResultadoDeJogada =
					verificaResultadoJogo(JOGADA.TESOURA, JOGADA.TESOURA)
				expect(resultadoDeJogada.jogada).toBe(JOGADA.TESOURA)
				expect(resultadoDeJogada.vencedor).toBe(VENCEDOR.EMPATE)
			})
		})
	})

	describe('geraJogadaComputador', () => {
		it('deve gerar jogada pedra', () => {
			const funcao = jest.fn(() => 0)
			const r = geraJogadaComputador(funcao)
			expect(r).toBe(JOGADA.PEDRA)
		})
		it('deve gerar jogada papel', () => {
			const funcao = jest.fn(() => 1)
			const r = geraJogadaComputador(funcao)
			expect(r).toBe(JOGADA.PAPEL)
		})
		it('deve gerar jogada tesoura', () => {
			const funcao = jest.fn(() => 2)
			const r = geraJogadaComputador(funcao)
			expect(r).toBe(JOGADA.TESOURA)
		})
	})
})
