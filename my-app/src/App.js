import './styles/style.css';
import './styles/media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Home from './components/Home';
import WorkingComp from './components/WorkingComp';
import ProductsComp from './components/ProductsComp';
import ServicesComp from './components/ServicesComp';
import TeamComp from './components/TeamComp';
import ClientsSaid from './components/ClientsSaid';
import FooterComp from './components/FooterComp';

function App() {
  return (
    <>
        <NavbarComp />
        <Home />
        <WorkingComp />
        <ProductsComp />
        <ServicesComp />
        <TeamComp />
        <ClientsSaid />
        <FooterComp />
    </>
  );
}

export default App;
