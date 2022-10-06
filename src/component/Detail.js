import {useParams} from "react-router-dom";

function Detail (props) {
    const {id} = useParams();
    var produits = props.prod[id - 1];

    return (
        <div> {produits.nom} <br/> {}</div>

    )
}

export default Detail;