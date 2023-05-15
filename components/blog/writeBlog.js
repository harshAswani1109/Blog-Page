import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from "draft-js";

const BlogEditor = () => {
  const [editorState, setEditorState] = React.useState();
  const [blogData, setBlogData] = React.useState({});
  console.log(blogData);
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={(e) => {
          setEditorState(e);
          setBlogData({
            ...blogData,
            body: e.getCurrentContent().getPlainText(),
            raw: convertToRaw(e.getCurrentContent()),
          });
          console.log(convertToRaw(e.getCurrentContent()));
          console.log(e.getCurrentContent().getPlainText());
        }}
      />
    </div>
  );
};

export default BlogEditor;
