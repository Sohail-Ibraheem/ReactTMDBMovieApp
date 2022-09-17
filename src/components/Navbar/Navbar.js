import React, {useState} from 'react';
// import SingleMovie from '../../components/singlemovie/SingleMovie';


import './navbar.css';



const Navbar = ({setMovie}) => {

const [query , setQuery] = useState('')
const Search = `https://api.themoviedb.org/3/search/movie?api_key=7b8d894ec3444f8f0115d71b1d617bf6&query=${query}`
const searchMovie = async (e) => {
    e.preventDefault();
    if(query != ''){
        try{
            const resp = await fetch(Search);
            const data = await resp.json();
            setMovie(data.results)
                }
                catch(err){
            console.log(err)
                }
    }else{
        alert('Please first write the movie name')
    }

}
const changeHandle = (e) => {
    e.preventDefault();
        setQuery(e.target.value);
       
    
    
}
  return (
    <>
        <header>
            <nav>
                <div className="nav_brand">
                    <h2><a href='/' style={{cursor : 'pointer'}}>ReactMovie<span className='brand'>App</span></a></h2>
                </div>
             
                <form action="" onSubmit={searchMovie}>
                <div className="search">
                    <input type="text" name='query' autoComplete='off' placeholder='search movie...' value={query} onChange={changeHandle}/>
                    <button type='submit' className='submit_btn'>Search</button>
                </div>
                </form>
            </nav>
    
        </header>
        {/* <SingleMovie/> */}
    </>
  )
}

export default Navbar