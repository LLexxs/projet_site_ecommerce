function Detail (props) {
    const nom = props.nom
    const commentaire = props.commentaire

    return (
        <div> {nom} <br/> {commentaire}</div>
    )
}

export default Detail;