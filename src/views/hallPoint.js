import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import HallCard from "../components/hallCard";
import { BACKEND_URL } from '../constants';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const HallPoint = () => {

    let navigate = useNavigate();

    const [hallList, setHallList] = useState([]);

    useEffect(() => {

        if (localStorage.getItem("hallList") !== null) setHallList(JSON.parse(localStorage.getItem("hallList")));
        axios.get(`${BACKEND_URL}/info/hall/`)
            .then((response) => {
                setHallList(response.data.data)
            })
            .catch((err) => console.log(err));

        toast.info("Click on a card to explore more.");
    }, []);

    localStorage.setItem("hallList", JSON.stringify(hallList));


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
                        return (<HallCard key={index} name={hall.Hall} image={hall.image} clickHandler={hallCardClickHandler} index={index} />);
                    })
                }
            </div>
        </div>
    )

}

export default HallPoint;