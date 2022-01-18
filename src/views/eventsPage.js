import Dashboard from "../components/dashboard";
import { UilGameStructure, UilMusic, UilSetting, UilVolleyball, UilUsersAlt, UilInfoCircle } from '@iconscout/react-unicons';
import { useEffect, useState } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import EventCard from "../components/eventCard";

const RecentEvents = (props) => {

    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {

        axios.get(`${BACKEND_URL}/event`)
            .then((Response) => setEventsList(Response.data.events))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="event-wrapper">
            {eventsList.map((event, index) => {
                if (event.category === props.mode) {
                    return (
                        <EventCard key={index} event={event} />
                    )
                }
                else {
                    return null;
                }
            })}
        </div>
    )
}

const EventResults = () => {

    const mainCategoryList = ["Inter-IIT", "General Championship", "Events"];

    const [mainCategory, setMainCategory] = useState(mainCategoryList[0]);

    return (
        <div className="event-results">
            <div className="category-list">
                {mainCategoryList.map((category, index) => {
                    return (
                        <div className={`category ${category === mainCategory ? "active" : ""}`} onClick={() => {setMainCategory(mainCategoryList[index])}}>{category}</div>
                    )
                })}
            </div>
        </div>
    )
}

const EventsPage = () => {

    const dashboardHeaderData = {
        title: "TSG Events",
        subtitle: "",
        icon: UilGameStructure
    }

    const dashboardListData = {
        defaultSelection: 0,
        specialSelection: 4, //Enter -1 for none
        listData: [
            {
                option: "Technology",
                icon: UilSetting
            },
            {
                option: "Social and Cultural",
                icon: UilMusic
            },
            {
                option: "Sports and Games",
                icon: UilVolleyball
            },
            {
                option: "Students' Welfare",
                icon: UilUsersAlt
            },
            {
                option: "Results",
                icon: UilInfoCircle
            }
        ]
    }

    const [currentSelection, setCurrentSelection] = useState(dashboardListData.defaultSelection);

    let { accessTokenPayload } = useSessionContext();

    var title, BodyContent;

    if (currentSelection >= 0 && currentSelection <= 3) {
        title = "RECENT EVENTS";
        BodyContent = RecentEvents;
    }
    else {
        title = "RESULTS";
        BodyContent = EventResults;
    }

    return (
        <div className="events-page">
            <Dashboard
                headerData={dashboardHeaderData}
                listData={dashboardListData}
                currentSelection={currentSelection}
                changeSelection={setCurrentSelection}
            />
            <div className="container">
                <div className="button-wrapper">
                    <div className="nav-button-wrapper">
                        <button className="button" onClick={() => window.location.href = `${window.location.origin}/`}>HOME</button>
                        {accessTokenPayload.role === "tsg" && <button className="button" onClick={() => window.location.href = `${window.location.origin}/events/upload?organiser=tsg`}>ADD EVENT</button>}
                        {accessTokenPayload.role === "tsg" &&  <button className="button" onClick={() => window.location.href = `${window.location.origin}/events/certs`}>UPLOAD CERTIFICATE</button>}
                    </div>
                </div>
                <div className="title">{title}</div>
                <BodyContent
                    mode={dashboardListData.listData[currentSelection].option}
                />
            </div>
        </div>
    )
}

export default EventsPage;