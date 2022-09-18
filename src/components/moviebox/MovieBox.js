import React from 'react';
import { NavLink} from 'react-router-dom'
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Typography from '@mui/material/Typography';
import './moviebox.css';
// import { display } from '@mui/system';
// import {AiOutlineCloseCircle} from 'react-icons/ai';
// import ReactPlayer from 'react-player'
// import movieTrailer from 'movie-trailer';
// import LightSpeed from 'react-reveal/LightSpeed';
// import MoviePage from '../MoviePage/MoviePage';


let IMG = 'https://image.tmdb.org/t/p/w500/';


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '100%',
//   height : '80%',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };
const MovieBox = (props) => {
const {poster_path , overview ,title ,vote_average , id , backdrop_path , original_language , release_date , vote_count} = props;
const movieName = title.substring(0,16);
// const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // let movieTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7b8d894ec3444f8f0115d71b1d617bf6&append_to_response=videos`;
  // const [video , setVideo] = useState([])
  // let videoUrl = 'https://www.youtube.com/watch?v=';
//   useEffect(() => {
// fetch(movieTrailer).then((res => res.json())).then((data) => {
//   setVideo(data.results[0].key)
// }).catch((error) => {
//   console.log(error)
// })
//   },[])
  return (
    <>
   <div className='movie'>
   {/* <div class="card" onClick={handleOpen}> */}
   <div class="card" >
        <div class="img">
        <NavLink to={`/movie/${id}`}>
            <img src={IMG+poster_path} alt={poster_path}/>
            </NavLink>
        </div>
            <div class="movie_data" key={id}>
                <div class="movie_name" ><p>{movieName.length >= 16 ? `${movieName}.....` : movieName}</p></div>
                <div class="rating"><p>{vote_average}</p></div>
            </div>
                <div class="movie_review">
                    <h2>overview</h2>
                    <p>{overview}</p>
                    </div>

    </div>
    {/* <div className="modal">
    <LightSpeed>
      <Modal style={{width : '100%' , height : '100vh'}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      
        <Fade in={open}>
          <Box sx={style} style={{ background : 'none'}}> 
          <span className='close_btn' onClick={handleClose}><AiOutlineCloseCircle></AiOutlineCloseCircle></span>
           <h4 style={{color : 'cyan' , textAlign : 'center', fontSize : '20px' , marginTop : '40px'}}>Watch Trailer</h4>
          <ReactPlayer style={{position : 'absolute' , top : '50%' , left : '50%' , transform : 'translate(-50% ,-50%'}}
          url={videoUrl+video}
          width='50%'
          height={300}
          controls={true}
          // pip={true}
        />
          </Box>
        </Fade>
      </Modal>
      </LightSpeed>
      </div> */}
       {/* <div className="movie_card">
        <div className="movie_img">
            <img src={IMG+poster_path} alt="movie_poster" />
        </div>
        <div className="movie_details">
            <p>{title}</p>
        </div>
        <div className="movie_overview">
            <p>{title}</p>
        </div>
       </div> */}
      </div>
    </>
  )
}


export default MovieBox;

