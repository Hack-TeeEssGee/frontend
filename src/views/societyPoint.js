import axios from 'axios';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SocietyCard from "../components/societyCard";
import { BACKEND_URL } from '../constants';

const SocietyPoint = () => {

    const [societyList, setSocietyList] = useState([]);

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

        console.log("hello")
        window.location.href = `${window.location.origin}/society-point/society?index=${name}`;
    }

    return (
        <div className="society-point">
            <div className="nav-button-wrapper">
                <button className="button" onClick={() => window.location.href = `${window.location.origin}/`}>HOME</button>
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