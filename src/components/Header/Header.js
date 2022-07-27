import React from "react";

const Header = props => {
  return (
    <div className="header">
      <div className="title">
      </div>
      <div className="date">
        Hello There 10/10/10: {props.date}
      </div>
      <button>Click Here to see more</button>
    </div>
  )
}


export default Header;
