import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './NavBar/Navbar'
import style from "./notes.module.scss"
import Greetings from './Greetings/Greetings'
import Note from './Note/Note'
import notesData from "../../data/notes.json"
import utils from "../../utils/localStorage"
import { useNavigate } from 'react-router-dom'
import types from '../../config/types'

function Notes() {

  const navigate = useNavigate();

  useEffect(() => {
    const AuthToken = utils.getFromLocalStorage("auth_key");
    if(!AuthToken) navigate("/login");
  }, [])

  const [notesColl, setNotesColl] = useState([]);
  const data = utils.getFromLocalStorage(types.NOTES_DATA);
  useEffect(() => {
    console.log(data)
    if(data && data.length) {
      setNotesColl(data);
      return;
    };
    utils.addToLocalStorage(types.NOTES_DATA, notesData);
    setNotesColl(notesData);
  }, [data])

  console.log({notesColl})

  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.main}>
        <Navbar />
        <Greetings />
        <div className={style.data}>
        {notesColl.map((note, i) => <Note key={note.id} text={note.text} date={note.createdAt} color={note.color} />)}
        </div>
      </div>
      
    </div>
  )
}

export default Notes
