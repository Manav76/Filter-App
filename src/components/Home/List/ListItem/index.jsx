import React from 'react'
import './styles.css'
const ListItem = ({item:{coverSrc , title , price , deliveryFee , rating}}) => (
    <div className='listItem-wrap'>
      <img src={coverSrc} alt="item" />
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
);

export default ListItem
