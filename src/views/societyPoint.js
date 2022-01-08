import SocietyCard from "../components/societyCard";

const SocietyPoint = () => {

    const societyList = [
        {
            name: "Kharagpur Open Source Society",
            imgURL: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "TFPS",
            imgURL: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Technology Robotix Society",
            imgURL: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Code Club",
            imgURL: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        },
    ]

    return (
        <div className="society-point">
            <div className="title">SOCIETIES</div>
            <div className="society-list">
                {
                    societyList.map((society, index) => {
                        return (<SocietyCard key={index} name={society.name} image={society.imgURL} />);
                    })
                }
            </div>
        </div>
    )
}

export default SocietyPoint;