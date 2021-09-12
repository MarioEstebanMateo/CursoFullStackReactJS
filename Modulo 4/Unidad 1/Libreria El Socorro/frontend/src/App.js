import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Homepage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <Router>
      <Header />
        <Nav />
        <Switch>
          <Route path="/home" exact component={Homepage} />
          <Route path="/servicios" exact component={ServiciosPage} />
          <Route path="/novedades" exact component={NovedadesPage} />
          <Route path="/contacto" exact component={ContactoPage} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
