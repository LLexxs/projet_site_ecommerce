import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Produits from './Produits';
import Contact from './Contact';
import '../style/App.css';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/produits">Produits</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path='/' element={< Accueil />}></Route>
                        <Route exact path='/produits' element={< Produits />}></Route>
                        <Route exact path='/contact' element={< Contact />}></Route>
                    </Routes>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
