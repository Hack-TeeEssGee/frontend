const HallCard = (props) => {
    console.log(props)

    return (
        <div className="hall-card" onClick={() => props.clickHandler(props.index)}>
            <img src={props.image} alt="hall-photo"></img>
            <div className="hall-title">{props.name}</div>
        </div>
    )
}

export default HallCard;