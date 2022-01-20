const QuickInfo = () => {

    return (

        <div className="quick-info">
            <div className="nav-button-wrapper">
                <button type="button" class="button" onClick={() => window.location.href=`${window.location.origin}/`}>Go Back</button>
            </div>
            <h1>QUICK INFO</h1>
            <button type="button" class="block" onClick={() => window.location.href=`${window.location.origin}/cdc`}>Archive-Statistics of CDC</button>
            <button type="button" class="block" onClick={() => window.location.href=`${window.location.origin}/quicklinks`}>Quick Links</button>
            <button type="button" class="block" onClick={() => window.location.href=`${window.location.origin}/quickinfo/contacts`}>Contacts</button>
            <button type="button" class="block" onClick={() => window.location.href=`${window.location.origin}/hall-point`}>Hall of Residence</button>
            <button type="button" class="block" onClick={() => window.location.href=`${window.location.origin}/society-point`}>Societies</button>
            <button type="button" class="block" onClick={() => window.location.href=`${window.location.origin}/faculty`}>Faculty</button>

        </div >

    )
}

export default QuickInfo;