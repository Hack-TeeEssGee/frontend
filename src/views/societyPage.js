import { useEffect, useMemo, useState } from "react"
import { UilSchedule, UilHistory, UilBill } from '@iconscout/react-unicons';
import Dashboard from "../components/dashboard";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { filterEvents } from "../utils/society";
import EventCard from "../components/eventCard";
import { useTable } from 'react-table';

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

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    const TableComponent = () => {

        return (
            // apply the table props
            <table {...getTableProps()}>
                <thead>
                    {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                    // Apply the header row props
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {// Loop over the headers in each row
                        headerGroup.headers.map(column => (
                        // Apply the header cell props
                        <th {...column.getHeaderProps()}>
                            {// Render the header
                            column.render('Header')}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                    rows.map(row => {
                    // Prepare the row for display
                    prepareRow(row)
                    return (
                        // Apply the row props
                        <tr {...row.getRowProps()}>
                        {// Loop over the rows cells
                        row.cells.map(cell => {
                            // Apply the cell props
                            return (
                            <td {...cell.getCellProps()}>
                                {// Render the cell contents
                                cell.render('Cell')}
                            </td>
                            )
                        })}
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        )
    }

    return (
        <div className="bill-reimbursement">
            <TableComponent />
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
                />
            </div>
        </div>
    )
}

export default SocietyPage;