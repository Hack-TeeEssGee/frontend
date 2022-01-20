const QuickInfo = () => {

    return (

        <div className="quick-info">
            <div className="nav-button-wrapper">
                <button type="button" class="button" onClick={() => window.location.href=`${window.location.origin}/`}>Go Back</button>
            </div>
            <h1>QUICK INFO</h1>
            <div className="quick-info-button-wrapper">
                <button type="button" class="block">Archive-Statistics of CDC</button>
                <button type="button" class="block">Quick Links</button>
                <button type="button" class="block">Contacts</button>
                <button type="button" class="block">Hall of Residence</button>
                <button type="button" class="block">Societies</button>
                <button type="button" class="block">Faculty</button>
            </div>
        </div >

    )
}

export default QuickInfo;