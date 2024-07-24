import React from 'react'
import style from "./navbar.module.scss";
import sunset from "../../../assets/sunset.png"
import search from "../../../assets/search.png"

function Navbar() {
  return (
    <div className={style.header}>
        <article className={style.search}>
            <img src={search} alt="search" className={style.searchImg}/>
            <input type="search" placeholder='Search Notes'/>
        </article>
        <div>
            <img src={sunset} alt="sunset" />
        </div>
    </div>
  )
}

export default Navbar
