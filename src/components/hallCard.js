const HallCard = (props) => {

    return (
        <div className="hall-card" onClick={() => props.clickHandler(props.index)}>
            <img src={props.image} alt={props.name}></img>
            <div className="hall-title">{props.name}</div>
        </div>
    )
}

export default HallCard;