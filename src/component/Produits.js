import React from 'react';
import img from '../img/saber_leona.jpg';

function Produits() {
    const Produits = [{
        img: img,
        nom: 'Amumu Among Us',
        commentaire: "N'avez-vous jamais rêvé de jouer à LoL ET à Among Us en même temps ?"
    }]
    return (
        <ul>
            {Produits.map((produit) => (
                <li>
                    <div><img src={produit.img} alt="lol"/></div>
                    <div>{produit.nom}</div>
                    <div>{produit.commentaire}</div>
                </li>
            ))}
        </ul>
    )
}

export default Produits;
