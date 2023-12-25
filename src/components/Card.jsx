import React from 'react';

const Card = ({ blog }) => {
    const { title, image, updatedAt, description } = blog;

    function timeAgo(timestamp) {
        const currentDate = new Date();
        const pastDate = new Date(timestamp);

        const timeDifference = currentDate - pastDate;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else if (hours > 0) {
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (minutes > 0) {
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else {
            return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
        }
    }

    const relativeTime = timeAgo(updatedAt);
    return (
        <>
            <article className='px-3 py-2.5 bg-mega-light rounded-lg'>
                <div className="w-full h-42 md:h-36 mb-2">
                    <img src={image} alt="card-img" className='rounded w-full h-full object-cover' />
                </div>
                <h4 className='text-base font-bold truncate w-60 text-mega-black'>{title}</h4>
                <small className='text-xs text-mega-gray mb-3 font-normal'>{relativeTime}</small>
                <p className='text-black text-xs font-normal w-72 leading-4'>{description}</p>
            </article>
        </>
    );
};

export default Card;