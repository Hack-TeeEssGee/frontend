const SocietyCard = (props) => {

    return (
        <div className="society-card" onClick={() => props.clickHandler(props.index)}>
            <img src={props.image} alt={props.name}></img>
            <div className="society-title">{props.name}</div>
        </div>
    )
}

export default SocietyCard;