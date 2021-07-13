import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Router, { useRouter } from 'next/router'
import { IMovieResponse, MovieProvider } from '../../services/movieProvider';
import CardContainer from "../../components/cardContainer";
import Pagination from 'react-bootstrap/Pagination';
import InputForm from '../../components/inputForm';
import AlertComponent from "../../components/alert";
import fetch from 'node-fetch';

/**
 * React Functional Component - InputForm
 *
 * @return {*} returns a ResultsPage - inputform, alert, pagination, cardContainer
 */
const ResultsPage: React.FC<any> = () => {
    const router = useRouter();
    const provider = new MovieProvider();

    const [movies, setMovies] = useState([]);
    const [total, setTotal] = useState('');
    const [searched, setSearched] = useState('');
    const [reqError, setError] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(1);

    const movieRef = useRef();
    const pages = [];
    const maxPagination = Math.ceil(parseInt(total) / 10)
    for (let i = 1; i <= maxPagination; i++) {
        pages.push(i);
    }
    
    useEffect(() => {
        if (router.query) {
            let { pagenum, q } = router.query as { pagenum: string, q: string };
            setSearched(q);
            provider.searchMovies(q, pagenum, fetch).then((result: IMovieResponse) => {
                setTotal(result.total);
                setMovies(result.movies);
                setError(false);
            }).catch(() => {
                setError(true);
            });
        }
    }, [router.query]);

    const confirmClick = (e) => {
        e.preventDefault();
        let searchQuery: string = (movieRef as any).current.value;
        Router.push({
            pathname: `/results/1`,
            query: { q: searchQuery },
        });
        setCurrentPage(1);
    };

    const paginationClick = (e) => {
        const pg = Number(e.target.id);
        Router.push({
            pathname: `/results/${pg}`,
            query: { q: searched },
        });
        setCurrentPage(pg);
    };

    const firstClick = () => {
        Router.push({
            pathname: `/results/1`,
            query: { q: searched },
        });
        setCurrentPage(1);
        setMaxPageLimit(5);
        setMinPageLimit(1);
    };

    const lastClick = () => {
        Router.push({
            pathname: `/results/${pages.length}`,
            query: { q: searched },
        });
        setCurrentPage(pages.length);
        setMaxPageLimit(pages.length);
        setMinPageLimit(pages.length - 5);
    };

    const handleNext = () => {
        Router.push({
            pathname: `/results/${currentPage + 1}`,
            query: { q: searched },
        });
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageLimit) {
            setMaxPageLimit(maxPageLimit + pageLimit);
            setMinPageLimit(minPageLimit + pageLimit);
        }
    };
    const handlePrev = () => {
        Router.push({
            pathname: `/results/${currentPage - 1}`,
            query: { q: searched },
        });
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) < minPageLimit) {
            setMaxPageLimit(maxPageLimit - pageLimit);
            setMinPageLimit(minPageLimit - pageLimit);
        }
    };

    /** @type {*} generates the pagination */
    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageLimit + 1 && number >= minPageLimit) {
            return (<Pagination.Item onClick={paginationClick} id={number} key={number} active={number === currentPage} activeLabel=''>
                {number}
            </Pagination.Item>);
        } else {
            return null;
        }
    });

    return <>
        <InputForm movieRef={movieRef} confirmClick={confirmClick} className='results'/>
        { reqError ?
            <AlertComponent headerText={'An unexpexted Error has occured'} text='Please try again later.' type='danger' /> :
            <>
                <Pagination className='results_pagination'>
                    {currentPage === 1 ? null : <Pagination.First id={'first'} onClick={firstClick} />}
                    {currentPage === 1 ? null : <Pagination.Prev id={'prev'} onClick={handlePrev} />}
                    {renderPageNumbers}
                    {currentPage < pages.length ? <Pagination.Next id={'next'} onClick={handleNext} /> : null}
                    {currentPage < pages.length ? <Pagination.Last id={'last'} onClick={lastClick} /> : null}
                </Pagination>
                { movies ? <CardContainer data={movies} /> : <AlertComponent headerText={'There were no movies found for search: ' + searched} text='Give it a try if you like.' type='warning' />}
            </>}
    </>;
}

export default ResultsPage;