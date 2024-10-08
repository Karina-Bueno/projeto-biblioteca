import Input from "../Input";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getLivros } from "../../Servico/livros";
import { postFavorito } from "../../Servico/favoritos"

const PesquisaContainer = styled.section`
	background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`
const Titulo = styled.h2`
	color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`
const Subtitulo = styled.h3`
	font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`
const Resultado = styled.div`
		display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() { //esse componente é encontrado com maior frequencia e basicamente são funções JavaScript 
	const [livrosPesquisados, setLivrosPesquisados] = useState([]);
	const [livros, setLivros] = useState([]); //guardando os livros

	useEffect(() => { //pegamos os livros da API e colocamos no nosso estado 
		fetchLivros()
	}, [])
	
	async function fetchLivros() {
		const livrosDaAPI = await getLivros()
		setLivros(livrosDaAPI)
	}

	async function insereFavorito(id) {
		await postFavorito(id)
		alert(`Livro de id:${id} foi inserido com sucesso!`)
	}

	return (
		<PesquisaContainer>
			<Titulo>Já sabe por onde começar?</Titulo>
			<Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
			<Input
				placeholder="Escreva sua próxima leitura"
				onBlur={evento => { //criando um filtro para pegar o texto escrito pelo usuario e fazer uma pesquisa na lista de livros, observando os livros que se encaixam nela.
					const textoDigitado = evento.target.value
					const resultadoPesquisa = livros.filter( livro => 
						livro.nome.includes(textoDigitado))
					setLivrosPesquisados(resultadoPesquisa);
				}}
			/>
			{livrosPesquisados.map( livro => ( //retornando o nome + imagem do livro
				<Resultado onClick={() => insereFavorito(livro.id)}>
					<img src={livro.src}/>
					<p>{livro.nome}</p>
				</Resultado>
			)) }
		</PesquisaContainer>
	)
}

export default Pesquisa;