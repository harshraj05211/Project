import React from 'react'
import style from "./sidebar.module.scss";
import pencil from "../../../assets/Pencil.png"
import Add from "../../../assets/Add.png";
import Join from "../../../assets/Join.png";
import { useNavigate } from 'react-router-dom';
import utils from "../../../utils/localStorage";
import types from '../../../config/types';

function Sidebar() {
  const navigate = useNavigate();

  function handleClick(event){
    if(event.target.id === 'plus'){
      let data = utils.getFromLocalStorage(types.NOTES_DATA);
      let updatedData = [{id : data.length+1, color : "rgba(174, 223, 232, 04)", text: "", createdAt : new Date().toISOString()}, ...data];
      utils.addToLocalStorage(types.NOTES_DATA, updatedData);
    }
  }

  function handleLogOut(){
    utils.removeFromLocalStorage("auth_key");
    navigate("/login");
  }

  return (
    <div className={style.container}>
        <div className={style.pencil}>
            <img src={pencil} alt='pencil' />
        </div>
        <div className={style.home}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVR4nO1YvWsVQRxc4weCRFBREFQERQRFYmNpl4CChWBhIWgh/gWKKS1tLa0srbQTowgWFmK6REFEtJDY+Y2i+2bWkd8jwXV9J3cvd/cuuAMLj3t3szN789uPcy4jI6MRqNc7SvIZgVf2260kkLxAoBdIWSMAkpdd1yFpfQBuLAn/qwE3JW1wXYSkvSTnYsEkH1tLrs1J2uO6BADHCXxIRvu6pHWS1gTg6h8mgM8ATnZh1FdZtgmESNwPkufTe0meIfAtuu+nGZM0NirxGwN5OxnZN+r1jhQ+4/0EgddJbdyRtKlt8fsJPE+y/VDSthLPbgnkvcT4S3l/qBXxJE8T+JpE4ZplvSyHpNUBuJJE7zvJc40JLyjGLwBODcsJ4ASBjwOKf23d4rcG8kEi/oW8P1AD9z5bsZM4PpK0vR7x3h8msJAU3i1J47V04Pomxo0zGaAF63u54ifi+Z39HQGnbfqsS3wyJU9bH1F/74cubsshyacR2TsAk65hAJi0vqI4zQ9VEzYjROI/1ZH3spD3B221jkycrUwSz9UkL7qWQfJSVBN3qxMAb5cIJO1yLUPS7rigKxPEi8wo9iuSxiIDoTJBPKU1orBpDSEbWD5CfgP8z2oAdrQkZwn49EBv1+w/AMc6aQDAVP9sUPRFImpmtHMGSM6WEb+4sj/pngH8js2gM66kzfHBv3MGQon7m+AsRDYwAPkNVEGO0ADkCFVBjtCoI8QBG7JS24R/rLJNcBYikPeH6SyQM21yFkLSTvu0UnbUFu+bkbSjTc6MjAy3svELWFJpslxRe9IAAAAASUVORK5CYII=" alt='home'/>
            <img src={Add} alt="plus" id='plus' onClick={handleClick}/>
        </div>
        <div className={style.exit}>
            <img src={Join} alt="exit" className={style.ig} onClick={handleLogOut}/>
        </div>
    </div>
  )
}

export default Sidebar;