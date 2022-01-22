import axios from 'axios';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SocietyCard from "../components/societyCard";
import { BACKEND_URL } from '../constants';
import { useNavigate } from "react-router-dom";

const SocietyPoint = () => {

    const [societyList, setSocietyList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem("societyList") !== null) setSocietyList(JSON.parse(localStorage.getItem("societyList")));
        axios.get(`${BACKEND_URL}/society/`)
            .then((response) => {
                setSocietyList(response.data.societies)
            })
            .catch((err) => console.log(err));

        toast.info("Click on a card to explore more.");
    }, []);

    localStorage.setItem("societyList", JSON.stringify(societyList));

    const societyCardClickHandler = (name) => {
        navigate(`/society-point/society?index=${name}`);
    }

    return (
        <div className="society-point">
            <div className="nav-button-wrapper">
                <button className="button" onClick={() => navigate("/")}>HOME</button>
            </div>
            <div className="title">SOCIETIES</div>
            <div className="society-list">
                {
                    societyList.map((society, index) => {
                        return (<SocietyCard key={index} name={society.name} image={society.logo} clickHandler={societyCardClickHandler} index={index} />);
                    })
                }
            </div>
        </div>
    )
}

export default SocietyPoint;