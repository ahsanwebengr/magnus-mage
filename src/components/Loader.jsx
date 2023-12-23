import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-screen grid place-items-center bg-black/40 fixed top-0 left-0 w-full z-50'>
            <span className="loader"></span>
        </div>
    );
};

export default Loader;