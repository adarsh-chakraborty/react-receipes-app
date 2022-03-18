import Pages from './pages/Pages';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Search from './components/Search';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to="/">React Recipes</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

const Logo = styledComponents(Link)`
text-decoration: none;
font-size: 1.5rem
font-weight: 400;
font-family: 'Lobster Two', cursive;
`;

const Nav = styledComponents.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;

svg{
  font-size: 2rem;
}
`;
export default App;
