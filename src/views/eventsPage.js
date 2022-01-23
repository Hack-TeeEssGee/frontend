import Dashboard from "../components/dashboard";
import { UilGameStructure, UilMusic, UilSetting, UilVolleyball, UilUsersAlt, UilInfoCircle } from '@iconscout/react-unicons';
import { useEffect, useState } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import EventCard from "../components/eventCard";
import Results from "../components/results";
import { useNavigate } from "react-router-dom";

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
    const [gcData, setGcData] = useState({});

    useEffect(() => {

        axios.get(`${BACKEND_URL}/info/gc`)
            .then((response) => setGcData(response.data.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="event-results">
            <div className="category-list">
                {mainCategoryList.map((category, index) => {
                    return (
                        <div className={`category ${category === mainCategory ? "active" : ""}`} onClick={() => {setMainCategory(mainCategoryList[index])}}>{category}</div>
                    )
                })}
            </div>
            <div className="result-category">Sports and Games</div>
            <Results
                    data={gcData?.sports_data}
                    keys={[
                        "Atheletics",
                        "Badminton",
                        "Basketball",
                        "Bridge",
                        "Chess",
                        "Cricket",
                        "Football",
                        "Hockey",
                        "Squash",
                        "Table Tennis",
                        "Tennis",
                        "Volleyball",
                        "Weightlifting",
                    ]}
                    layout={"vertical"}
            />
            <div className="result-category">Social and Cultural</div>
            <Results
                    data={gcData?.socult_data}
                    keys={[
                        "Eastern Vocals",
                        "Western Vocals",
                        "Eastern Instrumentals",
                        "Groups",
                        "Western Instrumentals",
                        "Sketching",
                        "Cartooning",
                        "Painting",
                        "Thermocol and Clay Modelling",
                        "Bengali Elocution",
                        "Debate",
                        "English Elocution",
                        "Hindi Elocution",
                        "WTGW",
                        "Quiz",
                        "Stage Play",
                        "Choreography",
                        "Street Play",
                        "Short Film Making",
                        "Dramatics Cup",
                        "Entertainment Cup",
                        "Fine Arts Cup",
                        "Literary Cup",
                      ]}
                    layout={"vertical"}
                />
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

    let navigate = useNavigate();

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
                <div className="nav-button-wrapper">
                    <button className="button" onClick={() => navigate("/")}>HOME</button>
                    {accessTokenPayload.role === "tsg" && <button className="button" onClick={() => navigate("/events/upload?organiser=tsg")}>ADD EVENT</button>}
                    {accessTokenPayload.role === "tsg" &&  <button className="button" onClick={() => navigate("/events/certs")}>UPLOAD CERTIFICATE</button>}
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