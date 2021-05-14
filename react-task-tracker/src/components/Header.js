import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// Sets a default value, in case prop is not entered.
Header.defaultProps = {
    title: 'Task Tracker',
}

// Restricts the prop data type. e.g. 'string', 'boolean', etc
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in js.
var headingStyle = {
    color: 'blue',
    backgroundColor: 'gray'
}

export default Header
