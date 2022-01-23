import { useState, useEffect } from "react";
import Editor from "rich-markdown-editor";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import BlogListCard from "../components/blog/blogListCard";
import myTheme from "../utils/markdownTheme";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../constants';
import axios from 'axios';
import { toast } from "react-toastify";

const BlogPage = (props) => {

    const [listMode, setListMode] = useState(true);
    const [selectedBlogIndex, setSelectedBlogIndex] = useState(0);
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {

        axios.get(`${BACKEND_URL}/info/blog/`)
            .then((response) => {
                // console.log(response.data.blogs)
                setBlogList(response.data.blogs)
            })
            .catch((err) => console.log(err));

        // toast.info("Click on a card to explore more.");
    }, []);

    let { doesSessionExist } = useSessionContext();

    let navigate = useNavigate();

    const blogSelectHandler = (index) => {
        setSelectedBlogIndex(index);
        setListMode(false);
    }

    const reportBlog = () => {

        axios.post(`${BACKEND_URL}/info/blog/report`, {
            id: blogList[selectedBlogIndex].id,
            email: JSON.parse(localStorage.getItem("student_metadata"))["email"]
        })
            .then((res) => {
                console.log(res);
                toast.success("Reported blog");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Problem reporting blog");
            });
    }

    const deleteBlog = () => {

        axios.post(`${BACKEND_URL}/info/blog/delete`, {
            id: blogList[selectedBlogIndex].id
        })
            .then((res) => {
                console.log(res);
                toast.success("Deleted blog");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Problem deleting blog");
            });
    }

    return (
        <div className="blog-page">
            <div className="nav-button-wrapper">
                {listMode
                    ? <button className="button" onClick={() => navigate("/")}>HOME</button>
                    : <button className="button" onClick={() => setListMode(true)}>GO BACK</button>
                }
                {doesSessionExist && <button className="button" onClick={() => navigate("/blog/new")}>CREATE NEW</button>}
            </div>
            {listMode && (
                <>
                    <div className="title">KGPverse Tales...</div>
                    <div className="blog-list">
                        {blogList.map((blogData, index) => {
                            return (
                                <BlogListCard
                                    {...blogData}
                                    clickHandler={() => blogSelectHandler(index)}
                                />
                            )
                        })}
                    </div>
                </>
            )}
            {!listMode && (
                <div className="blog-render">
                    <div className="title">{blogList[selectedBlogIndex].title}</div>
                    <div className="header-area">
                        <div><a href={`mailto:${blogList[selectedBlogIndex].email}`}>{blogList[selectedBlogIndex].name}</a></div>
                        <div>{blogList[selectedBlogIndex].createdAt.substring(0,10)}</div>
                    </div>
                    <Editor
                        theme={myTheme}
                        value={blogList[selectedBlogIndex].body}
                        readOnly
                    />
                    <div className="nav-button-wrapper">
                        {doesSessionExist && <button className="button" onClick={() => reportBlog()}>REPORT</button>}
                        {JSON.parse(localStorage.getItem("student_metadata"))["email"] === blogList[selectedBlogIndex].email && <button className="button" onClick={() => deleteBlog()}>DELETE</button>}
                    </div>
                </div>
            )}
        </div>
    )
}

export default BlogPage;