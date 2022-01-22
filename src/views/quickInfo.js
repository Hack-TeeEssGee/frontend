import { useNavigate } from "react-router-dom";

const QuickInfo = () => {

    let navigate = useNavigate();

    return (

        <div className="quick-info">
            <div className="nav-button-wrapper">
                <button type="button" class="button" onClick={() => navigate("/")}>HOME</button>
            </div>
            <h1>QUICK INFO</h1>
            <div className="quick-info-button-wrapper">
                <button type="button" class="block" onClick={() => navigate("/cdc")}>Archive-Statistics of CDC</button>
                <button type="button" class="block" onClick={() => navigate("/quicklinks")}>Quick Links</button>
                <button type="button" class="block" onClick={() => navigate("/quickinfo/contacts")}>Contacts</button>
                <button type="button" class="block" onClick={() => navigate("/hall-point")}>Hall of Residence</button>
                <button type="button" class="block" onClick={() => navigate("/society-point")}>Societies</button>
                <button type="button" class="block" onClick={() => navigate("/faculty")}>Faculty</button>
            </div>
        </div >

    )
}

export default QuickInfo;