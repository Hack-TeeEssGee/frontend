import { useEffect } from "react";
import { toast } from "react-toastify";
import HallCard from "../components/hallCard";
import { useNavigate } from "react-router-dom";

const HallPoint = () => {

    let navigate = useNavigate();

    const hallList = [
        {
            name: "Azad",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgj9_zmEZKB20iDV5dpHz6jdTqN5W14GAIFPHDg2S2DPhPKJq3eXIpDI9ISDPpEbo4hc&usqp=CAU"
        },
        {
            name: "RK",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgj9_zmEZKB20iDV5dpHz6jdTqN5W14GAIFPHDg2S2DPhPKJq3eXIpDI9ISDPpEbo4hc&usqp=CAU"
        },
        {
            name: "VSH",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgj9_zmEZKB20iDV5dpHz6jdTqN5W14GAIFPHDg2S2DPhPKJq3eXIpDI9ISDPpEbo4hc&usqp=CAU"
        },
        {
            name: "Hostel 3",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgj9_zmEZKB20iDV5dpHz6jdTqN5W14GAIFPHDg2S2DPhPKJq3eXIpDI9ISDPpEbo4hc&usqp=CAU"
        },
    ]

    useEffect(() => {

        localStorage.setItem("hallList", JSON.stringify(hallList));
        toast.info("Click on a card to explore more.");
    }, []);

    const hallCardClickHandler = (name) => {

        navigate(`/hall-point/hall?index=${name}`);
    }

    return (
        <div className="hall-point">
            <div className="nav-button-wrapper">
                <button className="button" onClick={() => navigate("/")}>HOME</button>
            </div>
            <div className="title">HALLS</div>
            <div className="hall-list">
                {
                    hallList.map((hall, index) => {
                        return (<HallCard key={index} name={hall.name} image={hall.imgURL} clickHandler={hallCardClickHandler} index={index} />);
                    })
                }
            </div>
        </div>
    )

}

export default HallPoint;