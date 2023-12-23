import React from 'react';
import { cardImg } from '../assets';

const Card = () => {
    return (
        <>
            <article className='px-3 py-2.5 bg-mega-light rounded-lg'>
                <div className="w-full h-36 mb-2">
                    <img src={cardImg} alt="card-img" className='rounded w-full h-full object-cover' />
                </div>
                <h4 className='text-base font-bold truncate w-60 text-mega-black'>Lorem ipsum dolor sit amet</h4>
                <small className='text-xs text-mega-gray mb-3 font-normal'>15 min ago</small>
                <p className='text-black text-xs font-normal w-72 leading-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </article>
        </>
    );
};

export default Card;