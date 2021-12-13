import { useEffect, useRef, useState } from "react";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";

const DashboardHeader = (props) => {

    return (
        <div className="dashboard-header">
            <props.icon size={100} />
            <div className="title">{props.title}</div>
            <div className="subtitle">{props.subtitle}</div>
        </div>
    )
}

const DashBoardList = (props) => {

    return (
        <div className="dashboard-list">
            {
                props.listData.map((option, index) => {
                    if (index !== props.specialSelection) {
                        return (
                            <li key={index} className="dashboard-option" isselected={String(props.currentSelection === index)} onClick={() => {props.changeSelection(index)}}>
                                <option.icon size={50} />
                                <div>{option.option}</div>
                            </li>
                        )
                    }
                    else {
                        return null;
                    }
                })
            }
        </div>
    )
}

const Dashboard = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const node = useRef(null);
    const handleClick = (e) => {
        if (node.current && !(node.current.contains(e.target))) {
            setIsOpen(false); // hide if clicked outside the dashboard
        } else {
            return; // if click is IN the node , then nothing
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [])

    return (
        <div className="dashboard" isopen={String(isOpen)} ref={node}>
            <div
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <UilTimes size={30} /> : <UilBars size={30} />}
            </div>
            <DashboardHeader
                {...props.headerData}
            />
            <DashBoardList
                {...props.listData}
                currentSelection = {props.currentSelection}
                changeSelection = {props.changeSelection}
                
            />
        </div>
    )
}

export default Dashboard;