import React from "react";

import "./MainHeader.css";

function MainHeader(props) {
  // props.children refers to the things between the opening and closing tags of MainHeader
  return <header className="main-header">{props.children}</header>;
}

export default MainHeader;
