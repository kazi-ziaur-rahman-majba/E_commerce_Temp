import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import constants from "../constants";

interface PaginationResult {
    currentSelectedPage: number;
    setCurrentSelectedPage: React.Dispatch<React.SetStateAction<number>>;
    getTotalPages: (count: number, limit: number) => number;
    handleBookPagination: (event: { selected: number }) => void;
    startIndex: number;
    setStartIndex: React.Dispatch<React.SetStateAction<number>>;
    endIndex: number;
    setEndIndex: React.Dispatch<React.SetStateAction<number>>;
    getStartAndEndIndex: (count: number, limit: number) => void;
}

const usePaginate = (): PaginationResult => {
    const [searchParams] = useSearchParams();
    const [currentSelectedPage, setCurrentSelectedPage] = useState<number>(
        parseInt(searchParams.get('page') || "1")
    );
    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(0);

    const getTotalPages = (count: number, limit: number): number => {
        return Math.ceil(count / limit);
    };

    const handleBookPagination = (event: { selected: number }): void => {
        const { selected } = event;
        setCurrentSelectedPage(selected + 1);
    };

    const getStartAndEndIndex = (count: number, limit: number): void => {
        const totalPage = getTotalPages(count, limit);
        if (currentSelectedPage > totalPage) {
        setCurrentSelectedPage(totalPage);
        return;
        }
        const temp_startIndex = (currentSelectedPage - 1) * constants.WISHLIST_LIMIT;
        const temp_endIndex = temp_startIndex + constants.WISHLIST_LIMIT;
        setStartIndex(temp_startIndex);
        setEndIndex(temp_endIndex);
    };

    return {
        currentSelectedPage,
        setCurrentSelectedPage,
        getTotalPages,
        handleBookPagination,
        startIndex,
        setStartIndex,
        endIndex,
        setEndIndex,
        getStartAndEndIndex,
    };
};

export default usePaginate;
