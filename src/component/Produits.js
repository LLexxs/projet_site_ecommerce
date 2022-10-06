import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../style/Produits.css';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Produits(props) {

<<<<<<< HEAD

function Produits() {
    const Produits = [{
        img: img,
        nom: 'Saber Leona',
        commentaire: "Fan de Fate ? (bof)"},
        {img: img2,
        nom: 'Amumu Among Us',
        commentaire: "N'avez-vous jamais rêvé de jouer à LoL ET à Among Us en même temps ?"
        },
        {img: img3,
        nom: 'Kindred Arclight',
        commentaire: "Kindred n'aura jamais été aussi brillant qu'avec ce nouveau skin"
        },
        {img: img4,
        nom: 'Yorick Minecraft',
        commentaire: "Marre de creuser des tombes ? Creusez des blocs !"
        }
  ]
    return (
        <div className='main'>
        <ul class="bas">

              {Produits.map((produit) => (
                <li class="header">
                    <div><img src={produit.img} alt="lol"/></div>
                    <div>{produit.nom}</div>
                    <div>{produit.commentaire}</div>
                </li>
            ))}
        </ul></div>
=======
    return (
        <div className='main'>
            <Container>
                <Col md={12}>
                    <Row>
                        {props.prod.map((produit) => (
                            <Col md={6}>
                                <div>
                                    <Link to={"/Detail/" + produit.id}><img src={produit.img} alt="lol"/></Link>
                                </div>
                                <div>{produit.nom}</div>
                                <div>{produit.commentaire}</div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Container>
        </div>
>>>>>>> 663ca0c2f8a459ea2099c101404dc202c4ce8e5a
    )
}

export default Produits;
