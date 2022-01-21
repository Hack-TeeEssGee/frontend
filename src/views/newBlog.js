import { useState } from "react";
import Editor from "rich-markdown-editor";
import myTheme from "../utils/markdownTheme";

const NewBlog = () => {

    const [changeFunction, setChangeFunction] = useState(() => { });

    return (
        <div className="new-blog">
            <div className="title">Create New Blog ....</div>
            <div className="new-blog-editor">
                <Editor
                    theme={myTheme}
                    onChange={(changeFunc) => setChangeFunction(changeFunc)}
                />
            </div>
            <button className="button" onClick={() => console.log(changeFunction)}>Submit</button>
        </div>
    )
}

export default NewBlog;