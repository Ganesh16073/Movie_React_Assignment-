import React, { useEffect, useState } from "react";
import AllMovieContext from "./AllMovieContext";

const AllMovieContextProvider = ({ children }) => {
    const APIKEY = 'c45a857c193f6302f2b5061c3b85e743';
    const [popularMovie, setPopularMovie] = useState([]);
    const [upcomingMovie, setUpComingMovie] = useState([]);
    const [topRatedMovie, setTopRatedMovie] = useState([]);
    const [popularPage, setPopularPage] = useState(1);
    const [topRatedpage, setTopRatedPage] = useState(1);
    const [upcomingpage, setUpComingPage] = useState(1);

    useEffect(() => {
        const fetchPopularMovie = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=${popularPage}`
                );
                const data = await response.json();
                setPopularMovie(data.results);

            } catch (e) {
                console.error(`Failed to fetch popular movies: ${e}`);
            }
        };
        fetchPopularMovie();
    }, [popularPage]);

    useEffect(() => {
        const fetchUpComingMovie = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=${upcomingpage}`
                );
                const data = await response.json();
                setUpComingMovie(data.results);
            } catch (e) {
                console.error(`Failed to fetch upcoming movies: ${e}`);
            }
        };
        fetchUpComingMovie();
    }, [upcomingpage]);

    useEffect(() => {
        const fetchTopRatedMovie = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=${topRatedpage}`
                );
                const data = await response.json();
                setTopRatedMovie(data.results);
            } catch (e) {
                console.error(`Failed to fetch top-rated movies: ${e}`);
            }
        };
        fetchTopRatedMovie();
    }, [topRatedpage]);

    return (
        <AllMovieContext.Provider value={{ popularMovie, upcomingMovie, topRatedMovie, setPopularPage,setTopRatedPage, setUpComingPage }}>
            {children}
        </AllMovieContext.Provider>
    );
};

export default AllMovieContextProvider;
