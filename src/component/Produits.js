import React from 'react';
import '../style/Produits.css';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Produits(props) {

    return (
        <div className='main'>
            <Container>
                <Col md={12}>
                    <Row>
                        {props.prod.map((produit) => (
                            <Col md={6}>
                                <div><Link to={"/Detail/" + produit.id}><img src={produit.img} alt="lol"/></Link></div>
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
