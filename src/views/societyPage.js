import { useEffect, useState } from "react"

const SocietyPage = () => {

    const [name, setName] = useState("");

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        
        const societyList = JSON.parse(localStorage.getItem("societyList"));
        setName(societyList[urlParams.get("index")].name);
    })

    return (
        <div className="society-page">
            hello {name}
        </div>
    )
}

export default SocietyPage;