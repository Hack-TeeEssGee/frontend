import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const OfficialEventCert = () => {

    const options = [
        'One', 'Two', 'Three'
      ];

    return (
        <div className="official-event-certificate">
            <div className="title">TSG Event Certificates Uploader</div>
            <div className="wrapper">
                <Dropdown
                    options={options}
                    value={options[0]}
                    placeholder="Select an event"
                    className="dropdown"
                    controlClassName="dropdown-control"
                    placeholderClassName="dropdown-placeholder"
                    arrowClassName="dropdown-arrow"
                />;
                <input type="text" className="type-1" placeholder="Enter email of Student" >
                </input>
                <input type="text" className="type-1" placeholder="Enter Position" >
                </input>
                <label htmlFor="file-upload" className="custom-file-upload">
                    &#8613; &nbsp; Upload Certificate File
                </label>
                <input id="file-upload" type="file" />
                <button className="add-button">Add +</button>
            </div>
        </div>
    )
}

export default OfficialEventCert;