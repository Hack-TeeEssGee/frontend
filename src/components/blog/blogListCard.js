const BlogListCard = (props) => {

    return (
        <div className="blog-list-card" onClick={props.clickHandler}>
            <div className="blog-title">{props.title}</div>
            <div className="blog-author">{props.name}</div>
            <div className="blog-date">{props.createdAt.substring(0,10)}</div>
        </div>
    )
}

export default BlogListCard;