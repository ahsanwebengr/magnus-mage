import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Pagination = ({ currentPage, totalPages, onPageChange, onPrevPage, onNextPage }) => {
    return (
        <div className="text-end flex items-center justify-end my-8">
            <button
                onClick={onPrevPage}
                className={`px-3 py-1 mx-5 inline-flex items-center justify-center bg-primary text-white hover:bg-primary  ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'} w-10 h-10 rounded-full`}
                disabled={currentPage === 1}
            >
                <IoIosArrowBack />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-3 py-1 mx-5 ${index + 1 === currentPage ? ' text-primary font-bold' : ' text-primary-color hover:text-primary font-bold'
                        } w-10 h-10 rounded-full`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={onNextPage}
                className={`px-3 py-1 mx-5 inline-flex items-center justify-center bg-primary text-white hover:bg-primary ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'opacity-100'} w-10 h-10 rounded-full`}
                disabled={currentPage === totalPages}
            >
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default Pagination;
