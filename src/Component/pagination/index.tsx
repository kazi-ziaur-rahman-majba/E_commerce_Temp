import ReactPaginate from "react-paginate";

interface PaginationProps {
    totalPages: number;
    currentSelectedPage: number;
    handleBookPagination: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentSelectedPage,
    handleBookPagination,
}) => {
    return (
        <ReactPaginate
            pageCount={totalPages || 1}
            forcePage={currentSelectedPage - 1 || 0}
            onPageChange={handleBookPagination}
            breakLabel="..."
            nextLabel="Next"
            previousLabel="Previous"
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            containerClassName="flex items-center justify-center gap-1 mt-8 mb-4 text-sm list-none"
            pageClassName="flex cursor-pointer"
            pageLinkClassName="px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            activeClassName="bg-blue-50 border-blue-200"
            activeLinkClassName="text-blue-600 font-medium"
            previousClassName="mr-2 cursor-pointer"
            nextClassName="ml-2 cursor-pointer"
            previousLinkClassName="px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            nextLinkClassName="px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            disabledClassName="opacity-50 pointer-events-none"
            breakClassName="mx-1"
            breakLinkClassName="px-2 py-1.5"
            
        />
    );
};

export default Pagination;
