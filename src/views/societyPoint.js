import { useEffect } from "react";
import { toast } from "react-toastify";
import SocietyCard from "../components/societyCard";

const SocietyPoint = () => {

    const societyList = [
        {
            name: "Kharagpur Open Source Society",
            imgURL: "https://raw.githubusercontent.com/kossiitkgp/design/master/logo/exported/koss-logo-square.png"
        },
        {
            name: "TFPS",
            imgURL: "https://i.postimg.cc/0jWnG6pR/adam-birkett-GD7-VU0daia-Q-unsplash.jpg"
        },
        {
            name: "Technology Robotix Society",
            imgURL: "https://i.postimg.cc/0jWnG6pR/adam-birkett-GD7-VU0daia-Q-unsplash.jpg"
        },
        {
            name: "Code Club",
            imgURL: "https://i.postimg.cc/0jWnG6pR/adam-birkett-GD7-VU0daia-Q-unsplash.jpg"
        },
    ]

    useEffect(() => {

        localStorage.setItem("societyList", JSON.stringify(societyList));
        toast.info("Click on a card to explore more.");
    }, []);

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
                        return (<SocietyCard key={index} name={society.name} image={society.imgURL} clickHandler={societyCardClickHandler} index={index} />);
                    })
                }
            </div>
        </div>
    )
}

export default SocietyPoint;