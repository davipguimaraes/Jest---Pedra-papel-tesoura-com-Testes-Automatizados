export enum VENCEDOR {
	JOGADOR_1 = 'JOGADOR_1',
	JOGADOR_2 = 'JOGADOR_2',
	EMPATE = 'EMPATE',
}
export enum JOGADA {
	PEDRA = 'PEDRA',
	PAPEL = 'PAPEL',
	TESOURA = 'TESOURA',
}

export interface ResultadoDeJogada {
	jogada: JOGADA
	vencedor: VENCEDOR
}

const vitoria = {
	PEDRA: JOGADA.TESOURA,
	TESOURA: JOGADA.PAPEL,
	PAPEL: JOGADA.PEDRA,
}
export default function verificaResultadoJogo(
	jogada_1: JOGADA,
	jogada_2: JOGADA
): ResultadoDeJogada {
	if (jogada_1 == jogada_2) {
		return {
			jogada: jogada_1,
			vencedor: VENCEDOR.EMPATE,
		}
	}

	if (vitoria[jogada_1] == jogada_2) {
		return {
			jogada: jogada_1,
			vencedor: VENCEDOR.JOGADOR_1,
		}
	}
	return {
		jogada: jogada_2,
		vencedor: VENCEDOR.JOGADOR_2,
	}
}
