import React from 'react';

const Heading = ({ text, style }) => {
    return (
        <>
            <h4 className={`text-lg lg:text-2xl font-bold text-center capitalize ${style}`}>{text}</h4>
        </>
    );
};

export default Heading;