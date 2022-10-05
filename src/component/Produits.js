import React from 'react';
import '../style/Produits.css';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import img from '../img/saber_leona.jpg';
import img2 from '../img/amogus_amumu.webp';
import img3 from '../img/arclight_kindred.jpg';
import img4 from '../img/minecraft_yorick.webp';
import Detail from "./Detail";

function Produits() {
    const Produits = [{
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
        <div className='main'>
            <Container>
                <Col md={12}>
                    <Row>
                        {Produits.map((produit) => (
                            <Col md={6}>
                                <div><img src={produit.img} alt="lol"/></div>
                                <div>{produit.nom}</div>
                                <div>{produit.commentaire}</div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default Produits;
