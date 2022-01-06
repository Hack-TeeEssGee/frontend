import axios from 'axios';
import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { BACKEND_URL } from '../constants';

const EventUpload = () => {

    const categoryList = ["Technology", "Sports and Games", "Social and Cultural", "Students' Welfare"]

    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [poster, setPoster] = useState(null);
    const [category, setCategory] = useState({ label: categoryList[0], value: categoryList[0]});

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category.value);
        formData.append('fb_post_link', link);
        formData.append('start_date', startDate);
        formData.append('end_date', endDate);
        formData.append('image', poster);

        axios.post(`${BACKEND_URL}/event/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => { console.log(res) })
            .catch (err=> { console.log(err) });
    }

    return (
        <div className="event-upload-wrapper">
            <button className='button' onClick={() => window.location.href = `${window.location.origin}/events`}>GO BACK</button>
            <div className="event-upload">
                <div className="title">TSG Events Uploader</div>
                <input type="text" className="type-1" placeholder="Enter name of event" onChange={(event) => {setName(event.target.value)}} >
                </input>
                <Dropdown
                    options={categoryList}
                    value={categoryList[0]}
                    placeholder="Select an event"
                    onChange={setCategory}
                    className="dropdown"
                    controlClassName="dropdown-control"
                    placeholderClassName="dropdown-placeholder"
                    arrowClassName="dropdown-arrow"
                />
                <input type="text" className="type-1" placeholder="Enter Link of the Event" onChange={(event) => {setLink(event.target.value)}}>
                </input>
                <div className="date-picker-list">
                    <div>
                        <label htmlFor="Start-Date" className="date-picker-label">
                            Start Date
                        </label>
                        <input type="date" id="Start-Date" className="date-picker" onChange={(event) => {setStartDate(event.target.value)}}>
                        </input>
                    </div>
                    <div>
                        <label htmlFor="End-Date" className="date-picker-label">
                            End Date
                        </label>
                        <input type="date" id="End-Date" className="date-picker" onChange={(event) => {setEndDate(event.target.value)}}>
                        </input>
                    </div>
                </div>
                <label htmlFor="file-upload" className="custom-file-upload">
                    &#8613; &nbsp; Upload Poster of the Event
                </label>
                <input id="file-upload" type="file" onChange={(event) => {setPoster(event.target.files[0])}} />

                <button className="button add-button" onClick={() => {handleSubmit()}}>Add +</button>
            </div>
        </div>
    )
}

export default EventUpload;