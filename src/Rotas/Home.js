import styled from 'styled-components';
import UltimosLancamentos from '../components/UltimosLancamentos';
import Pesquisa from '../components/Pesquisa';

const AppContainer = styled.div`
	width: 100vw;
	height: 100vw;
	background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
function Home() {
  return (
		<AppContainer>
			<Pesquisa />
			<UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;