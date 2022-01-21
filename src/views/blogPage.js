import { useState } from "react";
import Editor from "rich-markdown-editor";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import BlogListCard from "../components/blog/blogListCard";
import myTheme from "../utils/markdownTheme";

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

const BlogPage = () => {

    const [listMode, setListMode] = useState(true);
    const [selectedBlogIndex, setSelectedBlogIndex] = useState(0);

    let { doesSessionExist } = useSessionContext();

    const blogSelectHandler = (index) => {
        setSelectedBlogIndex(index);
        setListMode(false);
    }

    return (
        <div className="blog-page">
            <div className="nav-button-wrapper">
                {listMode
                    ? <button className="button" onClick={() => window.location.href = `${window.location.origin}`}>HOME</button>
                    : <button className="button" onClick={() => setListMode(true)}>GO BACK</button>
                }
                {doesSessionExist && <button className="button" onClick={() => window.location.href = `${window.location.origin}/blog/new`}>CREATE NEW</button>}
            </div>
            {listMode && (
                <>
                    <div className="title">KGPverse Tales...</div>
                    <div className="blog-list">
                        {SampleBlogData.map((blogData, index) => {
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
                    <div className="title">{SampleBlogData[selectedBlogIndex].title}</div>
                    <div className="header-area">
                        <div>{SampleBlogData[selectedBlogIndex].author}</div>
                        <div>{SampleBlogData[selectedBlogIndex].date}</div>
                    </div>
                    <Editor
                        theme={myTheme}
                        value={SampleBlogData[selectedBlogIndex].body}
                        readOnly
                    />
                </div>
            )}
        </div>
    )
}

export default BlogPage;