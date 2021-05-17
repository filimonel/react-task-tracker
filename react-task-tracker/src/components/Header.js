import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {/*  useLocation looks at the route we're on*/}
      {/* if route is equal to '/' then the component will render */}
      {location.pathname === "/" && (
        <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          // onClick is similar to .addEventListener('click')
          onClick={onAdd}
        />
      )}
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
