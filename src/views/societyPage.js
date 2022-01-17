import { useEffect, useMemo, useState } from "react"
import { UilSchedule, UilHistory, UilBill } from '@iconscout/react-unicons';
import Dashboard from "../components/dashboard";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { filterEvents } from "../utils/society";
import EventCard from "../components/eventCard";
import { useTable } from 'react-table';
import TableComponent from "../components/table";
import { toast } from "react-toastify";

const EventWrapper = (props) => {

    const [eventList, setEventList] = useState([]);

    useEffect(() => {

        axios.get(`${BACKEND_URL}/event/${props.society.id}`)
            .then((response) => setEventList(filterEvents(response.data.events, props.mode)))
            .catch((err) => console.log(err));
    }, [props]);



    return (
        <div className="event-wrapper">
            {eventList.map((event, index) => {

                return (
                    <EventCard key={index} event={event} />
                )
            })}
        </div>
    )
}

const BillReimbursement = (props) => {

    const [billList, setBillList] = useState([]);

    const modifyBillList = (oldBillList) => {

        const newBillList = [];

        oldBillList.map((oldBill) => {
            const newBill = {
                id: oldBill.id,
                name: oldBill.name,
                description: oldBill.description,
                amount: "Rs. " + oldBill.amount,
                remark: oldBill.remark,
                status: oldBill.status
            }
            newBillList.push(newBill);
        })

        return newBillList;
    }

    useEffect(() => {

        axios.get(`${BACKEND_URL}/society/bill/${props.society.id}`)
            .then((response) => setBillList(modifyBillList(response.data.bills)))
            .catch((err) => console.log(err));
    }, [props]);

    const data = useMemo(() => [...billList], [billList]);

    const columns = useMemo(() => [
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Description",
            accessor: "description"
        },
        {
            Header: "Amount",
            accessor: "amount"
        },
        {
            Header: "Remark",
            accessor: "remark"
        },
        {
            Header: "Status",
            accessor: "status"
        }
    ], []);


    const [newBillName, setNewBillName] = useState("");
    const [newBillDesc, setNewBillDesc] = useState("");
    const [newBillAmount, setNewBillAmount] = useState(null);
    const [newBillFile, setNewBillFile] = useState(null);
    const [billFileName, setBillFileName] = useState("No file selected");

    const newBillData = useMemo(() => [{
        name: newBillName,
        description: newBillDesc,
        amount: newBillAmount,
        bill: billFileName
    }], [newBillName, newBillDesc, newBillAmount, billFileName]);

    const fileUploader = (event) => {

        setBillFileName(event.target.files[0].name);
        setNewBillFile(event.target.files[0]);
    }

    const submitNewForm = () => {

        const formData = new FormData();
        formData.append("name", newBillName);
        formData.append("description", newBillDesc);
        formData.append("amount", newBillAmount);
        formData.append("society_id", props.society.id);
        formData.append("image", newBillFile);

        toast.info("Uploading bill");

        axios.post(`${BACKEND_URL}/society/bill/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response);
                toast.success("Successfully uploaded Bill");
            })
            .catch(err => {
                console.log(err)
                toast.error("Error uploading bill");
            });
    }

    const newBillColumns = useMemo(() => [
        {
            Header: "Name",
            accessor: "name",
            Cell: ({ cell: { value } }) => <input type="text" placeholder="Enter name of bill" value={value} onChange={(event) => setNewBillName(event.target.value)} />
        },
        {
            Header: "Description",
            accessor: "description",
            Cell: ({ cell: { value } }) => <input type="text" placeholder="Enter description" value={value} onChange={(event) => setNewBillDesc(event.target.value)} />
        },
        {
            Header: "Amount",
            accessor: "amount",
            Cell: ({ cell: { value } }) => <input type="number" placeholder="Enter amount" value={value} onChange={(event) => setNewBillAmount(event.target.value)} />
        },
        {
            Header: "Bill",
            accessor: "bill",
            Cell: ({ cell: { value } }) => (
                <div>
                    <label htmlFor="file-upload">
                        &#8613; &nbsp; {value}
                    </label>
                    <input type="file" id="file-upload" onChange={(event) => fileUploader(event)} />
                </div>
            )
        }
    ], []);


    return (
        <div className="bill-reimbursement">
            <div className="title">Add new Bill</div>
            <TableComponent data={newBillData} columns={newBillColumns} />
            <button className="button" onClick={submitNewForm}>Add</button>
            <div className="title">Existing Bills</div>
            <TableComponent data={data} columns={columns} />
        </div>
    )
}

const SocietyPage = () => {

    const [society, setSociety] = useState({});

    let { accessTokenPayload } = useSessionContext();

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        
        const societyList = JSON.parse(localStorage.getItem("societyList"));
        setSociety(societyList[urlParams.get("index")]);
    }, [])

    const dashboardHeaderData = {
        title: society?.name,
        subtitle: society?.email,
        icon: society?.logo,
        isImage: true
    }

    const dashboardListData = {
        defaultSelection: 0,
        specialSelection: -1, //Enter -1 for none
        listData: [
            {
                option: "Upcoming Events",
                icon: UilSchedule
            },
            {
                option: "Past Events",
                icon: UilHistory
            }
        ]
    }

    if (accessTokenPayload.role === "tsg" || accessTokenPayload.role === "admin" || accessTokenPayload.role === "society") {
        dashboardListData.listData.push({
            option: "Bill Reimbursement Portal",
            icon: UilBill
        })
        dashboardListData.specialSelection = 2;
    }

    const [currentSelection, setCurrentSelection] = useState(dashboardListData.defaultSelection);

    var title, BodyContent;

    if (currentSelection === 0) {
        title = "UPCOMING EVENTS";
        BodyContent = EventWrapper;
    }
    else if (currentSelection === 1) {
        title = "PAST EVENTS";
        BodyContent = EventWrapper;
    }
    else {
        title = "BILL REIMBURSEMENT PORTAL";
        BodyContent = BillReimbursement;
    }

    return (
        <div className="society-page">
            <Dashboard
                headerData={dashboardHeaderData}
                listData={dashboardListData}
                currentSelection={currentSelection}
                changeSelection={setCurrentSelection}
            />
            <div className="container">
                <div className="nav-button-wrapper">
                    <button className="button" onClick={() => window.location.href = `${window.location.origin}/society-point`}>GO BACK</button>
                    {accessTokenPayload.role === "society" && <button className="button" onClick={() => window.location.href = `${window.location.origin}/events/upload?organiser=${society.name}`}>ADD EVENT</button>}
                </div>
                <div className="title">{title}</div>
                <BodyContent
                    mode={currentSelection}
                    society={society}
                    role={accessTokenPayload.role}
                />
            </div>
        </div>
    )
}

export default SocietyPage;