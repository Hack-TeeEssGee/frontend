const BlogListCard = (props) => {

    return (
        <div className="blog-list-card" onClick={props.clickHandler}>
            <div className="blog-title">{props.title}</div>
            <div className="blog-author">{props.author}</div>
            <div className="blog-date">{props.date}</div>
        </div>
    )
}

export default BlogListCard;