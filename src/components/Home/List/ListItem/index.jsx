import React, { useState } from 'react'
import './styles.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
  const ListItem = ({item:{coverSrc , title , price , deliveryFee , rating}}) => {
    const [btnColor , setBtnColor] = useState("grey")
    return (
    <div className='listItem-wrap'>
      <img src={coverSrc} alt="item" />
      <IconButton onClick={
        ()=>{
          btnColor === "red" ? setBtnColor("grey") : setBtnColor("red");
        }
      }>
      <FavoriteIcon style={{color:btnColor , marginTop:"5px"}} />
      </IconButton>
      <header>
        <h4>{title}</h4>
        <span>⭐{rating}</span>
      </header>
      <footer>
        <p><span>${deliveryFee}</span></p>
        <p>
            <b>${price}</b>
        </p>
      </footer>
    </div>
    )
  };

export default ListItem
