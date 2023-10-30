import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import axios from "axios";
// import {
//   img_500,
//   unavailable,
//   unavailableLandscape,
// } from "../../config/config";
import "./ContentModal.css";
// import { Button } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import Carousel from "../Carousel/Carousel";
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import Details from "./ContentModalNew";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     width: "90%",
//     height: "80%",
//     backgroundColor: "#39445a",
//     border: "1px solid #282c34",
//     borderRadius: 10,
//     color: "white",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(1, 1, 3),
//   },
// }));

export default function TransitionsModal({ media_type, id ,v}) {

//   const classes = useStyles();
//   //  const [open, setOpen] = useState(v);
//   const [content, setContent] = useState();
  
//   // const handleOpen = () => {
//   //   AppendToResponse(media_type,id); 
//   //   setOpen(true);
     
    
//   // };

//   const handleClose = () => {
//     // setOpen(false);
//   };

//   // new fetch request
//   const AppendToResponse = async (media_type,id) => {
//     const {data} = await axios.get(
//       `https://api.themoviedb.org/3/${media_type}/${id}?api_key=b8876594426392793b3ed15a1d14028c&language=en-US&append_to_response=videos`
//     );
//     setContent(data);
//     console.log('dddaattaaa',data)
//   }


//   useEffect(() => {console.log('hiiiiiii',media_type,id,v)
//      AppendToResponse(media_type,id);
//     // eslint-disable-next-line
//   }, []);


// console.log('in content modal')
  
return (
    <>

  
<Switch>
    {/* {content &&  */}
      <Route path={`/:media_type/:id`} render={(c)=>{
      console.log('hello therer',media_type,id,v,c);
        return (
          <Details/>
        )
      //     <Modal
      //   aria-labelledby="transition-modal-title"
      //   aria-describedby="transition-modal-description"
      //   className={classes.modal}
      //   open= {true}
      //   onClose={handleClose}
      //   closeAfterTransition
      //   BackdropComponent={Backdrop}
      //   BackdropProps={{
      //     timeout: 500,
      //   }}
      // >
      //   <div>
      //   <Fade in={true}>
      //     <>
      //     {content && (
      //       <div className={classes.paper}>
      //         <div className="ContentModal">
      //           <img
      //             src={
      //               content.poster_path
      //                 ? `${img_500}/${content.poster_path}`
      //                 : unavailable
      //             }
      //             alt={content.name || content.title}
      //             className="ContentModal__portrait"
      //           />
      //           <img
      //             src={
      //               content.backdrop_path
      //                 ? `${img_500}/${content.backdrop_path}`
      //                 : unavailableLandscape
      //             }
      //             alt={content.name || content.title}
      //             className="ContentModal__landscape"
      //           />
      //           <div className="ContentModal__about">
      //             <span className="ContentModal__title">
      //               {content.name || content.title} (
      //               {(
      //                 content.first_air_date ||
      //                 content.release_date ||
      //                 "-----"
      //               ).substring(0, 4)}
      //               )
      //             </span>
      //             {content.tagline && (
      //               <i className="tagline">{content.tagline}</i>
      //             )}

      //             <span className="ContentModal__description">
      //               {content.overview}
      //             </span>

      //             <div>
      //               <Carousel id={id} media_type={media_type} />
      //             </div>

      //             <Button
      //               variant="contained"
      //               startIcon={<YouTubeIcon />}
      //               color="secondary"
      //               target="__blank"
      //               href={`https://www.youtube.com/watch?v=${content.videos?.results[0]?.key}`}
      //             >
      //               Watch the Trailer
      //             </Button>
      //           </div>
      //         </div>
      //       </div>
      //     )}</>
      //   </Fade>
      //   </div>
      // </Modal>
      //   )
      }}/>
    {/* } */}
</Switch>
    </>

  );
}
