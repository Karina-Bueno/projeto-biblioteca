import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
	background-color: #FFF;
  display: flex;
	justify-content: center;
`

function Header() {
	return (
		<HeaderContainer className="App-header">
			<Link to="/"> {/*criando o link para voltar a pagina para a home na logo */}
				<Logo />
			</Link>  
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
	)
}

export default Header;