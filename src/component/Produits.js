import React from 'react';

function Produits() {
  const Produits = [{img: '<a href="./img/amogus_amumu.webp">',
                    nom: 'Amumu Among Us',
                    commentaire: "N'avez-vous jamais rêvé de jouer à LoL ET à Among Us en même temps ?"
                    }]
    return (
      <div>
      {Produits.map((produit) => (
        <li>
          {produit.img}<br/>
          {produit.nom}<br/>
          {produit.commentaire}<br/>
        </li>
      ))}
      </div>
    )
}

export default Produits;
