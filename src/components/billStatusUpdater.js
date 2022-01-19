import { useEffect, useState } from "react";
import { UilTimes } from '@iconscout/react-unicons';
import Dropdown from 'react-dropdown';

const BillStatusUpdater = (props) => {

    const statusList = ["Approved", "Pending", "Declined"];
    const [remark, setRemark] = useState("");
    const [status, setStatus] = useState({});

    useEffect(() => {

        setRemark(props.bill.remark);
        setStatus({
            label: props.bill.status,
            value: props.bill.status
        });
    }, [props]);

    return (
        <div className="modify-bill-window-wrapper">
            <div className="modify-bill-window">
                <UilTimes size={60} onClick={() => props.close()} />
                <div className="title">{props.bill.name}<br /><span>{props.bill.amount}</span></div>
                <label>Remark</label>
                <input type="text" value={remark} onChange={(event) => setRemark(event.target.value)} ></input>
                <label>Status</label>
                <Dropdown
                    options={statusList}
                    value={status}
                    placeholder="Select status of bill"
                    onChange={setStatus}
                    className="dropdown"
                    controlClassName="dropdown-control"
                    placeholderClassName="dropdown-placeholder"
                    arrowClassName="dropdown-arrow"
                    menuClassName="dropdown-menu"
                />
                <button className="button" onClick={() => props.handleSubmit(props.bill.id, remark, status.value)} >Save Changes</button>
            </div>
        </div>
    )
}

export default BillStatusUpdater;