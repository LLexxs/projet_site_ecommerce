import "../style/Footer.css"
import React from "react";

function Footer() {
    const numero = "06.06.06.06.07";
    const site = "https://lolskinmoulafacile.fr";
    return <footer>
        <div className="siteFooter">
            <h4>
                Plus d'informations
            </h4>
            <ul className="liste">
                <li> numéro : {numero}</li>
                <li> site officiel: <a href={site} target='_blank' rel="noopener noreferrer">Skins LoL</a></li>
                <li> All your rights are reserves to us</li>
            </ul>
        </div>
    </footer>
}

export default Footer;
