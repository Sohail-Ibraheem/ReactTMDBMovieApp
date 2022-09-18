// import React, { useRef, useState ,useEffect } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";


// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./slider.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";
// import zIndex from "@mui/material/styles/zIndex";

// let IMG3 = 'https://image.tmdb.org/t/p/w500/';
// const Slider = () => {
//   const [slider , setSlider] = useState([]);
//   let [page , setPage] = useState(1);
//   let URL2 = `https://api.themoviedb.org/3/movie/popular?api_key=7b8d894ec3444f8f0115d71b1d617bf6&language=en-US&page=${page}`;
//   useEffect(() => {
//     fetch(URL2)
//     .then((res => res.json())).then((data) => {
//       setSlider(data.results)
//       console.log('tiis is line 25 and slider data' ,data.results)
//   }).catch((error) => {
//     console.log(error)
//   })
//   // return () => {
//   //   clearInterval(clearIntervalId);
//   // }
//   },[page]);
//   // const {id , title , poster_path} = movie;
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation ]}
//         className="mySwiper"
//       >
//         {
//           slider.map((slidedata) => {
//             const {poster_path , overview ,title ,vote_average , id , backdrop_path , original_language , release_date , vote_count} = slidedata;
//             const movieName = title.substring(0,16);
//             return(
//               <>
              
//               <SwiperSlide>
//               <img src={IMG3+poster_path} alt={poster_path} className='movie_poster'/>
//               <div className="slide_name">
//               <h4>{movieName.length >= 16 ? `${movieName}.....` : movieName}</h4>
//               <p>{vote_average}</p>
//               </div>
//               <img src={IMG3+backdrop_path} alt={backdrop_path} style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}/></SwiperSlide>
//               </>
//             )

//           })
//         }
   

//       </Swiper>
//     </>
    
//   );
  
// }


// export default Slider;