import React from 'react';
import Card from '../components/Card';

const Dashboard = () => {
    return (
        <section className='container max-w-7xl mx-auto py-8 px-2'>
            <h2 className='text-primary uppercase text-xl lg:text-2xl font-bold mb-6'>Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
};

export default Dashboard;