import axios from 'axios';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { BACKEND_URL } from '../constants';
import { toast } from 'react-toastify';


const OfficialEventCert = () => {

    const [eventList, setEventList] = useState([]);
    const [event, setEvent] = useState({});
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [certificate, setCertificate] = useState(null);

    useEffect(() => {

        axios.get(`${BACKEND_URL}/event`)
            .then((res) => { 
                const eventArray = res.data.events.map((event) => {
                    const tempObj = {
                        value: event.name,
                        label: event.name,
                        id: event.id
                    }
                    return tempObj;
                })
                setEventList(eventArray);
                setEvent(eventList[0])
             })
            .catch((err) => { console.log(err) });
    }, []);

    const handleSubmit = () => {

        const requiredEvent = eventList.find(tempEvent => tempEvent.value === event.value);

        const formData = new FormData();
        formData.append('email', email);
        formData.append('position', position);
        formData.append('event_id', requiredEvent.id);
        formData.append('image', certificate);

        axios.post(`${BACKEND_URL}/certificate/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => { 
                console.log(res);
                toast.success('Certificate upload successful');
            })
            .catch (err=> { 
                console.log(err);
                toast.error('Upload error');
            });
    }

    return (
        <div className="official-event-certificate">
            <button onClick={() => window.location.href = `${window.location.origin}/events`}>GO BACK</button>
            <div className="title">TSG Event Certificates Uploader</div>
            <div className="wrapper">
                <Dropdown
                    options={eventList}
                    value={eventList[0]}
                    placeholder="Select an event"
                    onChange={setEvent}
                    className="dropdown"
                    controlClassName="dropdown-control"
                    placeholderClassName="dropdown-placeholder"
                    arrowClassName="dropdown-arrow"
                />
                <input type="text" className="type-1" placeholder="Enter email of Student" onChange={(e) => {setEmail(e.target.value)}} >
                </input>
                <input type="text" className="type-1" placeholder="Enter Position" onChange={(e) => {setPosition(e.target.value)}} >
                </input>
                <label htmlFor="file-upload" className="custom-file-upload">
                    &#8613; &nbsp; Upload Certificate File
                </label>
                <input id="file-upload" type="file" accept="image/png, image/jpeg" onChange={(e) => {setCertificate(e.target.files[0])}} />
                <button className="add-button" onClick={() => {handleSubmit()}}>Add +</button>
            </div>
        </div>
    )
}

export default OfficialEventCert;