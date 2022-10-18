import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Accueil from './Accueil';
import Produits from './Produits';
import Contact from './Contact';
import '../style/App.css';
import Footer from './Footer';
import img from "../img/saber_leona.jpg";
import img2 from "../img/amogus_amumu.webp";
import img3 from "../img/arclight_kindred.jpg";
import img4 from "../img/minecraft_yorick.webp";
import Detail from "./Detail";
import {Button} from "react-bootstrap";


function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (theme !== "dark") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme);
        }
    }, {});

    const textStyle = {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        paddingLeft: "20px",
    };
    const produits = [{
        id: 1,
        img: img,
        nom: 'Saber Leona',
        commentaire: "Fan de Fate ? (bof)"
    },
        {
            id: 2,
            img: img2,
            nom: 'Amumu Among Us',
            commentaire: "N'avez-vous jamais rêvé de jouer à LoL ET à Among Us en même temps ?"
        },
        {
            id: 3,
            img: img3,
            nom: 'Kindred Arclight',
            commentaire: "Kindred n'aura jamais été aussi brillant qu'avec ce nouveau skin"
        },
        {
            id: 4,
            img: img4,
            nom: 'Yorick Minecraft',
            commentaire: "Marre de creuser des tombes ? Creusez des blocs !"
        }
    ]
    return (
        <Router>
            <body  style={{
                background: theme === 'dark' ? '#000' : '#fff',
                color: theme === 'dark' ? '#fff' : '#000',
            }}>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link style={textStyle} to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link style={textStyle} to="/produits">Produits</Link>
                        </li>
                        <li>
                            <Link style={textStyle} to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Button variant="outline-dark" style={{position: "absolute", right: "0"}} type="button" onClick={toggleTheme}>
                        Dark mode
                    </Button>
                    <Routes>
                        <Route exact path='/' element={< Accueil/>}></Route>
                        <Route exact path='/produits/' element={< Produits prod={produits}/>}></Route>
                        <Route exact path='/contact' element={< Contact/>}></Route>
                        <Route exact path='/detail/:id' element={< Detail prod={produits}/>}></Route>
                    </Routes>
                </div>
            </body>
            <Footer/>
        </Router>
    );

}

export default App;
