import React,{Suspense} from 'react';
import Movie from './components/movie/Movie';
import { Route , Routes } from 'react-router-dom';
import Error from './components/Error/Error';
import MoviePage from './components/MoviePage/MoviePage';
// import { Switch } from '@mui/material';





const App = () => {
  return (
    <>
       
      <Routes>
      <Route exact path='/' element={<Movie/>}/>
      <Route exact path='/movie/:id' element={<MoviePage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App