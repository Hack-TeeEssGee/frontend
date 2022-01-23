import { useState, useEffect } from "react";
import Editor from "rich-markdown-editor";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import BlogListCard from "../components/blog/blogListCard";
import myTheme from "../utils/markdownTheme";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../constants';
import axios from 'axios';

const SampleBlogData = [
    {
        title: "Hello World how are you all kk hrhrw wgwg rgwy4y533hgw r4y24y4t",
        author: "Chirag Ghosh",
        date: "21.01.2022",
        body: "Hello everyone. First blog of KGPverse. **Enjoy!**\n\n\\\n```javascript\nconst name = \"KGPverse\";\n```\n\n\\\n> Javascript is the best.\n\n\\\n\\\n"
    },
    {
        title: "Hello World",
        author: "Chirag Ghosh",
        date: "21.01.2022",
        body: "Hello everyone. First blog of KGPverse. **Enjoy!**\n\n\\\n```javascript\nconst name = \"KGPverse\";\n```\n\n\\\n> Javascript is the best.\n\n\\\n\\\n"
    },
    {
        title: "Hello World",
        author: "Chirag Ghosh",
        date: "21.01.2022",
        body: "Hello everyone. First blog of KGPverse. **Enjoy!**\n\n\\\n```javascript\nconst name = \"KGPverse\";\n```\n\n\\\n> Javascript is the best.\n\n\\\n\\\n"
    },
]

const BlogPage = (props) => {

    const [listMode, setListMode] = useState(true);
    const [selectedBlogIndex, setSelectedBlogIndex] = useState(0);
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {

        if (localStorage.getItem("blogList") !== null) setBlogList(JSON.parse(localStorage.getItem("blogList")));
        axios.get(`${BACKEND_URL}/info/blog/`)
            .then((response) => {
                // console.log(response.data.blogs)
                setBlogList(response.data.blogs)
            })
            .catch((err) => console.log(err));

        // toast.info("Click on a card to explore more.");
    }, []);

    localStorage.setItem("blogList", JSON.stringify(blogList));

    let { doesSessionExist } = useSessionContext();

    let navigate = useNavigate();

    const blogSelectHandler = (index) => {
        setSelectedBlogIndex(index);
        setListMode(false);
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
                </div>
            )}
        </div>
    )
}

export default BlogPage;