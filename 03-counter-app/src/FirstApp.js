import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({saludo, subtext}) => {
    return (
        <>
            <h1>{saludo} </h1>
            <p>{subtext} </p>
        </>
    );
}

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtext: 'This is a subtext'
}

export default FirstApp;