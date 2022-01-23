import { useState } from "react";
import Editor from "rich-markdown-editor";
import myTheme from "../utils/markdownTheme";
import { useNavigate } from "react-router-dom";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

const NewBlog = () => {

    const [markdownContent, setMarkdownContent] = useState(() => { });
    const [title, setTitle] = useState("");

    let navigate = useNavigate();

    const submitBlog = () => {

        console.log(title);
        console.log(markdownContent);
        
    }

    return (
        <SessionAuth requireAuth={true} redirectToLogin={() => { navigate("/login?role=student") }}>
            <div className="new-blog">
                <div className="nav-button-wrapper">
                        <button className="button" onClick={() => navigate("/blog")}>GO BACK</button>
                </div>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter a title for your blog"></input>
                <div className="new-blog-editor">
                    <Editor
                        theme={myTheme}
                        onChange={(changeFunc) => setMarkdownContent(changeFunc)}
                    />
                </div>
                <button className="button" onClick={() => submitBlog()}>Submit</button>
            </div>
        </SessionAuth>
    )
}

export default NewBlog;