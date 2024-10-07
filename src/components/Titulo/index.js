import styled from "styled-components";

export const Titulo = styled.h2`
  width: 100%;
	padding: 30px 0;
  background-color: #FFF;
  color: ${ props => props.cor || "#000"}; //com essa informação, dizemos para o react que caso não passemos o props, a cor padrão da fonte será #000
  font-size: ${ props => props.tamanhoFonte || '18px;' };  //prop drilling é um estagio de desenvolvimento que acontece qundo precimos obter dados que estão em varias camadas na arvore de componente react.
  text-align: ${ props => props.alinhamento || 'center' };
  margin: 0;
`