import { useEffect, useRef, useState } from "react";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";

const DashboardHeader = (props) => {

    return (
        <div className="dashboard-header">
            <props.icon size={200} />
            <div className="title">{props.title}</div>
            <div className="subtitle">{props.subtitle}</div>
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
        </div>
    )
}

export default Dashboard;