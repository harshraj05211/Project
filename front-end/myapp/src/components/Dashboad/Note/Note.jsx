import React, { useState } from "react";
import style from "./note.module.scss";
import { formatDate } from "../../../utils/formatDate";
import Button from "../../../atoms/button";
import { toast } from "react-toastify";
import utils from "../../../utils/localStorage"

function Note(props) {
  const { text, date, color } = props;
  const [noteText, setNoteText] = useState("");

  function handleSave() {
    const authToken = utils.getFromLocalStorage("auth_key");
    if(!noteText.length || !color) toast.error("Note should not be empty")
      fetch("http://localhost:3001/api/notes", {
          headers: {
              "Content-Type" : "application/json",
              authorization : authToken,
          },
          body: JSON.stringify({
              text : noteText,
              color,
          }),
          method: "POST",
  }).then((res) => res.json()).then((data) => {
      console.log({data});
      if(data?.success === 200)
      {
          toast.success("Notes added successfully");
          console.log(data);
      }
      else toast.error(data?.message);
  }).catch(error => {
      console.log(error);
      toast.error("Notes creation failed");
  })
  }
  
  return (
    <div className={style.container} style={{ backgroundColor: color }}>
      <div className={style.content}>
        {!text.length ? (
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className={style.textarea}
            placeholder="Enter your text"
          />
        ) : (
          <>
            <p>{text}</p>
          </>
        )}
      </div>
      <div className={style.footer}>
        <p>{formatDate(date)}</p>
        {noteText.length ? <Button text={'save'} handleClick={handleSave} /> : null}
      </div>
      
    </div>
  );
}

export default Note;
