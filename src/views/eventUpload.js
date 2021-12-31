const EventUpload = () => {

    return (
        <div className="event-upload">
            <input type="text" className="type-1" placeholder="Enter name of event" >
            </input>
            <input type="text" className="type-1" placeholder="Enter Link of the Event" >
            </input>
            <input type="date" className="date-picker" >
            </input>
            <label htmlFor="file-upload" className="custom-file-upload">
                &#8613; &nbsp; Upload Poster of the Event
            </label>
            <input id="file-upload" type="file" />

            <button className="add-button">Add +</button>
        </div>
    )
}

export default EventUpload;