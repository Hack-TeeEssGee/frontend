import { useEffect, useState } from "react"
import { UilCommentAltLines, UilScenery, UilEnvelopeAdd } from '@iconscout/react-unicons';
import Dashboard from "../components/dashboard";
import ContactCard from "../components/contactCard";
const AboutUs = () => {

    return (
        <div>
            <div className="about-us">
                <h2>Founded on :</h2>
                <h2>Capacity :</h2>
                <h2>Sharing :</h2>
            </div>
            <div className="about-us">
                <h2>Motto :</h2>
                <h2>Gender :</h2>
                <h2>Website :</h2>
            </div>
            <div className="about-us2">
                <h2>About Us :</h2>
                <p>adssafgsdg </p>
            </div>
            <div className="about-us2">
                <h2>Infrastructure :</h2>
                <p>adssafgsdg </p>

            </div>
        </div>
    )
}
const PhotoGallery = () => {

    return (
        <div>
            <div className="hall-photo">
                <img src="https://scontent.fpnq15-1.fna.fbcdn.net/v/t31.18172-8/11174288_884307408277665_5049783598753915077_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xbl3jKNNzsQAX9YDiyG&tn=KpYI_7W52h2nOnOb&_nc_ht=scontent.fpnq15-1.fna&oh=00_AT-Fa-qz8BZPdwXlV6B5cUeSQiLCrJ5U-elwKAiyqiMgFQ&oe=620D09EB" alt="Italian Trulli"></img>
            </div>
            <div className="hall-photo">
                <img src="https://scontent.fpnq15-1.fna.fbcdn.net/v/t31.18172-8/11174288_884307408277665_5049783598753915077_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xbl3jKNNzsQAX9YDiyG&tn=KpYI_7W52h2nOnOb&_nc_ht=scontent.fpnq15-1.fna&oh=00_AT-Fa-qz8BZPdwXlV6B5cUeSQiLCrJ5U-elwKAiyqiMgFQ&oe=620D09EB" alt="Italian Trulli"></img>
            </div>
            <div className="hall-photo">
                <img src="https://scontent.fpnq15-1.fna.fbcdn.net/v/t31.18172-8/11174288_884307408277665_5049783598753915077_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xbl3jKNNzsQAX9YDiyG&tn=KpYI_7W52h2nOnOb&_nc_ht=scontent.fpnq15-1.fna&oh=00_AT-Fa-qz8BZPdwXlV6B5cUeSQiLCrJ5U-elwKAiyqiMgFQ&oe=620D09EB" alt="Italian Trulli"></img>
            </div>
            <div className="hall-photo">
                <img src="https://scontent.fpnq15-1.fna.fbcdn.net/v/t31.18172-8/11174288_884307408277665_5049783598753915077_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xbl3jKNNzsQAX9YDiyG&tn=KpYI_7W52h2nOnOb&_nc_ht=scontent.fpnq15-1.fna&oh=00_AT-Fa-qz8BZPdwXlV6B5cUeSQiLCrJ5U-elwKAiyqiMgFQ&oe=620D09EB" alt="Italian Trulli"></img>
            </div>
            <div className="hall-photo">
                <img src="https://scontent.fpnq15-1.fna.fbcdn.net/v/t31.18172-8/11174288_884307408277665_5049783598753915077_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xbl3jKNNzsQAX9YDiyG&tn=KpYI_7W52h2nOnOb&_nc_ht=scontent.fpnq15-1.fna&oh=00_AT-Fa-qz8BZPdwXlV6B5cUeSQiLCrJ5U-elwKAiyqiMgFQ&oe=620D09EB" alt="Italian Trulli"></img>
            </div>
            <div className="hall-photo">
                <img src="https://scontent.fpnq15-1.fna.fbcdn.net/v/t31.18172-8/11174288_884307408277665_5049783598753915077_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xbl3jKNNzsQAX9YDiyG&tn=KpYI_7W52h2nOnOb&_nc_ht=scontent.fpnq15-1.fna&oh=00_AT-Fa-qz8BZPdwXlV6B5cUeSQiLCrJ5U-elwKAiyqiMgFQ&oe=620D09EB" alt="Italian Trulli"></img>
            </div>
            <div className="hall-photo">
                <img src="https://scontent.fpnq15-1.fna.fbcdn.net/v/t31.18172-8/11174288_884307408277665_5049783598753915077_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xbl3jKNNzsQAX9YDiyG&tn=KpYI_7W52h2nOnOb&_nc_ht=scontent.fpnq15-1.fna&oh=00_AT-Fa-qz8BZPdwXlV6B5cUeSQiLCrJ5U-elwKAiyqiMgFQ&oe=620D09EB" alt="Italian Trulli"></img>
            </div>
            <div className="hall-photo">
                <img src="https://scontent.fpnq15-1.fna.fbcdn.net/v/t31.18172-8/11174288_884307408277665_5049783598753915077_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xbl3jKNNzsQAX9YDiyG&tn=KpYI_7W52h2nOnOb&_nc_ht=scontent.fpnq15-1.fna&oh=00_AT-Fa-qz8BZPdwXlV6B5cUeSQiLCrJ5U-elwKAiyqiMgFQ&oe=620D09EB" alt="Italian Trulli"></img>
            </div>
            <div className="hall-photo">
                <img src="https://scontent.fpnq15-1.fna.fbcdn.net/v/t31.18172-8/11174288_884307408277665_5049783598753915077_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xbl3jKNNzsQAX9YDiyG&tn=KpYI_7W52h2nOnOb&_nc_ht=scontent.fpnq15-1.fna&oh=00_AT-Fa-qz8BZPdwXlV6B5cUeSQiLCrJ5U-elwKAiyqiMgFQ&oe=620D09EB" alt="Italian Trulli"></img>
            </div>
        </div >
    )
}


const ContactUs = () => {

    return (
        <div>
            <ContactCard name="John" position="Warden" photo="https://i.imgur.com/saBEwCK.jpg" phone="123-456-7890" email="asdfsdfds" fb="aadsd" insta="asdasd" linkedin="asdasd" />
            <ContactCard name="John" position="Warden" photo="https://i.imgur.com/saBEwCK.jpg" phone="123-456-7890" email="asdfsdfds" fb="aadsd" insta="asdasd" linkedin="asdasd" />
            <ContactCard name="John" position="Warden" photo="https://i.imgur.com/saBEwCK.jpg" phone="123-456-7890" email="asdfsdfds" fb="aadsd" insta="asdasd" linkedin="asdasd" />
            <ContactCard name="John" position="Warden" photo="https://i.imgur.com/saBEwCK.jpg" phone="123-456-7890" email="asdfsdfds" fb="aadsd" insta="asdasd" linkedin="asdasd" />
            <ContactCard name="John" position="Warden" photo="https://i.imgur.com/saBEwCK.jpg" phone="123-456-7890" email="asdfsdfds" fb="aadsd" insta="asdasd" linkedin="asdasd" />
            <ContactCard name="John" position="Warden" photo="https://i.imgur.com/saBEwCK.jpg" phone="123-456-7890" email="asdfsdfds" fb="aadsd" insta="asdasd" linkedin="asdasd" />

        </div >

    );
}


const HallPage = () => {

    const [hall, setHall] = useState({});

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);

        const hallList = JSON.parse(localStorage.getItem("hallList"));
        setHall(hallList[urlParams.get("index")]);
    }, [])

    const dashboardHeaderData = {
        title: hall?.name,
        subtitle: hall?.email,
        icon: hall?.imgURL,
        isImage: true
    }

    const dashboardListData = {
        defaultSelection: 0,
        specialSelection: -1, //Enter -1 for none
        listData: [
            {
                option: "About Us",
                icon: UilCommentAltLines
            },
            {
                option: "Photo Gallery",
                icon: UilScenery
            },
            {
                option: "Contact Us",
                icon: UilEnvelopeAdd
            }
        ]
    }

    const [currentSelection, setCurrentSelection] = useState(dashboardListData.defaultSelection);

    var title, BodyContent;

    if (currentSelection === 0) {
        title = "About Us";
        BodyContent = AboutUs;
    }
    else if (currentSelection === 1) {
        title = "Photo Gallery";
        BodyContent = PhotoGallery;
    }
    else {
        title = "Contact Us";
        BodyContent = ContactUs;
    }

    return (
        <div className="hall-page">
            <Dashboard
                headerData={dashboardHeaderData}
                listData={dashboardListData}
                currentSelection={currentSelection}
                changeSelection={setCurrentSelection}
            />
            <div className="container">
                <div className="nav-button-wrapper">
                    <button className="button" onClick={() => window.location.href = `${window.location.origin}/hall-point`}>GO BACK</button>
                </div>
                <div className="title">{title}</div>
                <BodyContent
                    mode={dashboardListData.listData[currentSelection].option}
                />
            </div>

        </div>
    )
}



export default HallPage;