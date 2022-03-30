import React from "react";
// import PropTypes from "prop-types";
import Button from "./Button";

// const Header = ({ title  = "Task Default"}) => {
const Header = ({ title }) => {
  const handleClick = () => {
    console.log("Click With handle");
  };
  return (
    <div className="header">
      <h1> {title} </h1>
      <Button
        handleClick={handleClick}
        color="purple"
        text="Show Add Task Bar"
      />
    </div>
  );
};

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// Header.defaultProps = {
//   title: "Task Tracker",
// };

export default Header;
