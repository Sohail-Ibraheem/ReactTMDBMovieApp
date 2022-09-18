import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import Navbar from '../Navbar/Navbar';
import {
  Link,
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import MovieBox from '../moviebox/MovieBox';
import './movie.css';
import { BottomNavigation, Fade, Slide, TableBody } from '@mui/material';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import RubberBand from 'react-reveal/RubberBand';
// import Slider from '../../components/Slider/Slider';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
}));

const Movie = ({ setPage, page }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  setPage(parseInt(query.get('page') || '1', 10));
  const [movie, setMovie] = useState([]);
  // let [page , setPage] = useState(1);
  let URL = `https://api.themoviedb.org/3/movie/popular?api_key=7b8d894ec3444f8f0115d71b1d617bf6&language=en-US&page=${page}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    // return () => {
    //   clearInterval(clearIntervalId);
    // }
  }, [page]);
  const classes = useStyles();
  return (
    <>
      <Navbar setMovie={setMovie} />
      {/* <Slider/> */}
      <div className='movie_container'>
        <div class='bg'></div>
        <div class='bg bg2'></div>
        <div class='bg bg3'></div>
        <Zoom clear>
          {movie.length > 0 ? (
            movie.map((movieReq) => (
              <MovieBox key={movieReq.id} {...movieReq} />
            ))
          ) : (
            <>
              <div class='center'>
                <h1 className='loader'>Loading😉</h1>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
              </div>
            </>
          )}
        </Zoom>
      </div>
      <footer>
        <RubberBand>
          <Stack spacing={2}>
            <Pagination
              style={{
                width: '90vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              classes={{ ul: classes.ul }}
              color='primary'
              // variant="outlined"
              size='small'
              page={page}
              count={500}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  reloadDocument
                  to={`/${item.page === 0 ? '' : `?page=${`${item.page}`}`}`}
                  {...item}
                />
              )}
            />
          </Stack>
        </RubberBand>
      </footer>
      <LightSpeed left>
        <p className='last_intro'>
          Copyright © 2022 favmovie.surge.sh 💝Developed By{' '}
          <a href='#'>Muhammad Sohail</a>
        </p>
      </LightSpeed>
    </>
  );
};

export default Movie;

export function PaginationLink() {
  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes>
        <Route path='/' element={<Movie />} />
      </Routes>
    </MemoryRouter>
  );
}
