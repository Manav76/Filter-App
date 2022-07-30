import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';
const NavBar = ({value , changeInput}) => (
    <div className = "searchBar-wrap">
      <SearchIcon className = 'searchBar-icon' />
      <input type = "text" placeholder="Zevi Search" value = {value} onChange = {changeInput} />
    
    </div>
);

export default NavBar
