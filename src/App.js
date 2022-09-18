import React, { Suspense, useState } from 'react';
import Movie from './components/movie/Movie';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error/Error';
import MoviePage from './components/MoviePage/MoviePage';
// import { Switch } from '@mui/material';

const App = () => {
  const [page, setPage] = useState();
  // setting page and setPage as global so we can set it and use it in both movie and MoviePage Components

  //page was not updating in MoviePage because it was not passed to this component
  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={<Movie page={page} setPage={setPage} />}
        />
        <Route exact path='/movie/:id' element={<MoviePage page={page} />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
