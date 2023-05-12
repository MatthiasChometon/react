import { useState } from "react";
import { addMenuItemAsync, addPageAsync } from "../store/actions";
import store from "../store";

export const NewPageForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPage = (item) => {
    const result = store.dispatch(addPageAsync(item));
    result.then(() => {
      const state = store.getState();
      const newPage = state.pages.filter((page) => page.title === item.title);
      if (newPage.length && newPage[0].id) {
        store.dispatch(
          addMenuItemAsync({
            label: newPage[0].title,
            path: "/page/" + newPage[0].id,
            active: false,
          })
        );
      }
    });
  };

  const submit = () => {
    addPage({ title, content });
    setContent("");
    setTitle("");
  };

  return (
    <div>
      <div className="field">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          value={title}
        />
      </div>
      <div className="field">
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          onChange={(e) => setContent(e.target.value)}
          id="content"
          value={content}
        />
      </div>
      <button onClick={submit}>Create</button>
    </div>
  );
};
