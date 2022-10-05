import React from 'react';
import '../style/Produits.css';
import img from '../img/saber_leona.jpg';
import img2 from '../img/amogus_amumu.webp';
import img3 from '../img/arclight_kindred.jpg';
import img4 from '../img/minecraft_yorick.webp';

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
    )
}

export default Produits;
