import {useParams} from "react-router-dom";
import React from "react";

function Detail (props) {
    const {id} = useParams();
    let produits = props.prod[id - 1];

    return (
        <div className='main'>
            {produits.nom}
        </div>

    )
}

export default Detail;