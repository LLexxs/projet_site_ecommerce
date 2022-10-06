import {useParams} from "react-router-dom";

function Detail (props) {
    const {id} = useParams();
    var produits = props.prod[id - 1];

    return (
        <div className='main'>
            {produits.nom}
        </div>

    )
}

export default Detail;