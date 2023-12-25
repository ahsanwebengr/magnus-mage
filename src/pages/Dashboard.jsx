import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../components/Card';
import { dashboard } from '../provider/features/dashboard/dashboard.slice';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.dashboard?.isLoading);

    const moveRouter = (response) => {
        const getBlogs = response?.data?.result;
        setBlogs(getBlogs);
    };

    useEffect(() => {
        dispatch(dashboard({ successCallBack: moveRouter }));
    }, []);

    const totalPages = Math.ceil(blogs.length / 4);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            {isLoading && <Loader />}

            <section className='container max-w-7xl mx-auto py-8 px-2'>
                <h2 className='text-primary uppercase text-xl lg:text-2xl font-bold mb-6'>Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5">
                    {blogs
                        .slice((currentPage - 1) * 4, currentPage * 4)
                        .map((blog) => (
                            <Card blog={blog} key={blog?._id} />
                        ))}
                </div>

                {/* Pagination  */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    onPrevPage={handlePrevPage}
                    onNextPage={handleNextPage}
                />
            </section>
        </>
    );
};

export default Dashboard;
