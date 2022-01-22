import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import HallCard from "../components/hallCard";
import { BACKEND_URL } from '../constants';
import axios from 'axios';


const HallPoint = () => {


    // const hallList = [
        // {
        //     name: "Azad Hall of Residance",
        //     imgURL: "https://avatars.githubusercontent.com/u/13926292?s=200&v=4"
        // },
        // {
        //     name: "RK",
        //     imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgj9_zmEZKB20iDV5dpHz6jdTqN5W14GAIFPHDg2S2DPhPKJq3eXIpDI9ISDPpEbo4hc&usqp=CAU"
        // },
        // {
        //     name: "VSH",
        //     imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgj9_zmEZKB20iDV5dpHz6jdTqN5W14GAIFPHDg2S2DPhPKJq3eXIpDI9ISDPpEbo4hc&usqp=CAU"
        // },
        // {
        //     name: "Hostel 3",
        //     imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgj9_zmEZKB20iDV5dpHz6jdTqN5W14GAIFPHDg2S2DPhPKJq3eXIpDI9ISDPpEbo4hc&usqp=CAU"
        // },
    // ]

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

        console.log("hello")
        window.location.href = `${window.location.origin}/hall-point/hall?index=${name}`;
    }

    return (
        <div className="hall-point">
            <div className="nav-button-wrapper">
                <button className="button" onClick={() => window.location.href = `${window.location.origin}/`}>HOME</button>
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