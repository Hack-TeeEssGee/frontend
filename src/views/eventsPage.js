import Dashboard from "../components/dashboard";
import { UilGameStructure, UilMusic, UilSetting, UilVolleyball, UilUsersAlt, UilInfoCircle } from '@iconscout/react-unicons';
import { useState } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

const RecentEvents = (props) => {

    return (
        <div className="recent-events">
        </div>
    )
}

const EventResults = () => {

    return (
        <div className="event-results">
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
                    <button onClick={() => window.location.href = `${window.location.origin}/`}>HOME</button>
                    {accessTokenPayload.role === "tsg" && <button onClick={() => window.location.href = `${window.location.origin}/`}>ADD EVENT</button>}
                    {accessTokenPayload.role === "tsg" &&  <button onClick={() => window.location.href = `${window.location.origin}/events/certs`}>UPLOAD CERTIFICATE</button>}
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