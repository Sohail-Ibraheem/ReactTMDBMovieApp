import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

let IMG2 = 'https://image.tmdb.org/t/p/w500/';
const MoviePage = ({ page }) => {
  // passing page as props
  const [movie2, setMovie2] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const { id } = useParams();
  console.log('this is params id', typeof id);
  let URL2 = `https://api.themoviedb.org/3/movie/popular?api_key=7b8d894ec3444f8f0115d71b1d617bf6&language=en-US&page=${page}`;
  useEffect(() => {
    fetch(URL2)
      .then((res) => res.json())
      .then((data) => {
        setMovie2(data.results);
        console.log('this is setpagenumber', page);
        const newMovie = data.results.find((item) => item.id == parseInt(id));
        setMovie2(newMovie);

        console.log(newMovie);

        console.log(newMovie);
        // console.log(data.results)
      })
      .catch((error) => {
        console.log(error);
      });
    // return () => {
    //   clearInterval(clearIntervalId);
    // }
  }, [page]);
  console.log(movie2);
  return <div className='movie_page'>{<p>{movie2.title}</p>}</div>;
};

export default MoviePage;
