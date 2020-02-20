import React from "react";

import styled from "styled-components";


import "./App.css";
const HeaderBadge = styled.h1 `
font-size: 40px;
color: orange;

`
const Header = () => {
    return (
    <div className = "headerCont">
        <div className="image1">
        
         </div>
         <div>
         <HeaderBadge >Nasa Photo of the Day!</HeaderBadge>
         </div>

    </div>
    )

}

export default Header;