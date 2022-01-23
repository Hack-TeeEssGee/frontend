import axios from 'axios';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { BACKEND_URL } from '../constants';
import { toast } from 'react-toastify';
import { getSocietyID } from '../utils/society';
import { useNavigate } from "react-router-dom";

const EventUpload = () => {

    var categoryList = ["Technology", "Sports and Games", "Social and Cultural", "Students' Welfare"]

    const [organiser, setOrganiser] = useState("tsg");
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [poster, setPoster] = useState(null);
    const [category, setCategory] = useState({ label: categoryList[0], value: categoryList[0] });
    const [fileName, setFileName] = useState("No file selected");

    let navigate = useNavigate();

    useEffect(() => {

        const URLParams = new URLSearchParams(window.location.search);
        setOrganiser(URLParams.get("organiser"));

    }, []);

    if (organiser !== "tsg" && organiser !== category.value) {

        setCategory({
            label: organiser,
            value: organiser
        })
    }

    const fileUploader = (event) => {

        setFileName(event.target.files[0].name);
        setPoster(event.target.files[0]);
    }

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append('name', name);
        formData.append('fb_post_link', link);
        formData.append('start_date', startDate);
        formData.append('end_date', endDate);
        formData.append('image', poster);

        if (organiser === "tsg") {
            
            formData.append('category', category.value);

            axios.post(`${BACKEND_URL}/event/upload/tsg`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(res => { 
                    console.log(res);
                    toast.success('Event upload successful');
                })
                .catch (err=> { 
                    console.log(err);
                    toast.error('Upload error'); 
                });
        }
        else {

            formData.append('society_id', getSocietyID(organiser));

            axios.post(`${BACKEND_URL}/event/upload/society`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(res => { 
                    console.log(res);
                    toast.success('Event upload successful');
                })
                .catch (err=> { 
                    console.log(err);
                    toast.error('Upload error'); 
                });
        }
    }

    return (
        <div className="event-upload-wrapper">
            <div className="nav-button-wrapper">
                <button className='button' onClick={() => navigate(`/${organiser === "tsg" ? "events" : "society-point"}`)}>GO BACK</button>
            </div>
            <div className="event-upload">
                <div className="title">{organiser === "tsg" ? "TSG" : "Society"} Events Uploader</div>
                <label className="label">Enter name of Event</label>
                <input type="text" className="type-1" onChange={(event) => {setName(event.target.value)}} >
                </input>
                <label className="label">{organiser === "tsg" ? "Select category of Event" : "Organising Body"}</label>
                <Dropdown
                    options={categoryList}
                    value={category}
                    placeholder="Select an event"
                    onChange={setCategory}
                    className="dropdown"
                    controlClassName="dropdown-control"
                    placeholderClassName="dropdown-placeholder"
                    arrowClassName="dropdown-arrow"
                    menuClassName="dropdown-menu"
                    disabled={organiser !== "tsg"}
                />
                <label className="label">Enter link to Event</label>
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
                <label className="label">Upload Poster of the Event</label>
                <label htmlFor="file-upload" className="custom-file-upload">
                    &#8613; &nbsp; {fileName}
                </label>
                <input id="file-upload" type="file" onChange={(event) => fileUploader(event)} />

                <button className="button add-button" onClick={() => {handleSubmit()}}>Add +</button>
            </div>
        </div>
    )
}

export default EventUpload;