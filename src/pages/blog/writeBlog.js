import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from "draft-js";

import UserNavbar from "../../../components/userNavbar/navbar";

const BlogEditor = () => {
  const [editorState, setEditorState] = React.useState();
  const [blogData, setBlogData] = React.useState({});
  console.log(blogData);

  // async function handleSubmit() {
  //   const response = await submitForm({
  //     name: formData.get("blogname"),
  //     image: formData.get("image"),
  //     content: formData.get("content"),
  //   });
  // }

  // async function submitImage() {
  //   "use server";
  //   // ...
  // }

  return (
    <div>
      <UserNavbar />
      <form
      // action={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center mx-[2%] my-10 gap-4 font-semibold">
          <div className="flex justify-start items-center border-2 w-full text-md md:text-xl p-2">
            <label>Blog Name : </label>
            <input className="outline-none px-2" type="text" name="name" />
          </div>
          <div className="flex justify-start items-center border-2 w-full text-md md:text-xl p-2 gap-4">
            <label className="mb-2 inline-block dark:text-neutral-200">
              Image:
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
              // formAction={submitImage}
            />
          </div>
        </div>
        <div className="mx-[2%] border-2 min-h-[400px] px-2">
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
      </form>
    </div>
  );
};

export default BlogEditor;
