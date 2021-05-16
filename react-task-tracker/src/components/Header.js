import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" color="green" onAdd={onAdd} />
    </header>
  );
};

// Sets a default value, in case prop is not entered.
Header.defaultProps = {
  title: "Task Tracker",
};

// Restricts the prop data type. e.g. 'string', 'boolean', etc
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
