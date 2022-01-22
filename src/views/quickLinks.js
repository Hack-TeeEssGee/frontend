import { UilBookReader, UilGraduationCap, UilUsersAlt } from '@iconscout/react-unicons';
import QuickCard from "../components/quickCard";
import tsgLogo from "../assets/tsg-logo.png";
import { useNavigate } from "react-router-dom";

const quickCardData = [ 
    {
        "title": "IIT Kharagpur",
        "photo" : tsgLogo,
        "email": "abc",
        "fb": "https://www.facebook.com/IITKgp/",
        "twitter" : "https://twitter.com/IITKgp",
        "website" : "http://www.iitkgp.ac.in/" 
    },
    {
        "title": "TSG",
        "photo" : tsgLogo,
        "email": "abc",
        "fb": "https://www.facebook.com/TSG.IITKharagpur",
        "twitter" : "https://twitter.com/tsg_iitkgp",
        "website" : "https://gymkhana.iitkgp.ac.in//"
    }
]

const genericCardData = [
    {
        "title" : "ERP",
        "icon": UilBookReader,
        "link": "http://erp.iitkgp.ac.in/",
        "bgcolor": "#AD8871"
    },
    {
        "title": "Moodle",
        "icon": UilGraduationCap,
        "link": "http://kgpmoodlenew.iitkgp.ac.in/moodle/",
        "bgcolor": "#B9A96E"
    },
    {
        "title": "ApnaDost",
        "icon": UilUsersAlt,
        "link": "http://www.counsellingcentre.iitkgp.ac.in/",
        "bgcolor": "#4F799C"
    }
]

const QuickPLatformCard = (props) => {
    return (
        <div className="quick-platform-card" style={{"background-color" : `${props.bgcolor}`}}>
            <div className="icon"><props.icon size={75} /></div>
            <div className="quick-platform-name">
                <button onClick={() => window.location.href=`${props.link}`}>{ props.title }</button>
            </div>
        </div>
    )
}

const QuickLink = () => {

    let navigate = useNavigate();

    return (
        <div className="quicklink">
            <div className="nav-button-wrapper">
                <button type="button" class="button" onClick={() => navigate("/quickinfo")}>Go Back</button>
            </div>
            <div className="title">QUICK LINKS</div>
            <div className="quick-card-list">
                {
                    quickCardData.map((data, index) => {
                        return (<QuickCard 
                                    photo={data.photo} 
                                    title={data.title} 
                                    email={data.email} 
                                    fb={data.fb} 
                                    twitter={data.twitter} 
                                    website={data.website}/>);
                    })
                }
            </div>
            <div className="quick-platform-list">
                {
                    genericCardData.map((data, index) => {
                        return (<QuickPLatformCard 
                            title={data.title}
                            icon={data.icon}
                            link={data.link}
                            bgcolor={data.bgcolor}/>
                        );
                    })
                }
            </div>

        </div >
    )
}

export default QuickLink;