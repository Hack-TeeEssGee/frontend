import { useEffect, useState } from "react";
import { UilTimes } from '@iconscout/react-unicons';

const BillStatusUpdater = (props) => {

    const [remark, setRemark] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {

        setRemark(props.bill.remark);
        setStatus(props.bill.status);
    }, []);

    return (
        <div className="modify-bill-window-wrapper">
            <div className="modify-bill-window">
                <UilTimes size={60} onClick={() => props.close()} />
                <div className="title">{props.bill.name}</div>
                <input type="text" value={remark} onChange={(event) => setRemark(event.target.value)} ></input>
                <input type="text" value={status} onChange={(event) => setStatus(event.target.value)} ></input>
                <button className="button" onClick={() => props.handleSubmit(props.bill.id, remark, status)} >Save Changes</button>
            </div>
        </div>
    )
}

export default BillStatusUpdater;