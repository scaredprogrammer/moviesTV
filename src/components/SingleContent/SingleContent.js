import { Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import React,{useState} from 'react'
import {Link,Switch,BrowserRouter} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));


const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const classes = useStyles();
  const handleOpen = () => {
    window.location.href = media_type+'/'+id;

  };
  // console.log('locker room',media_type,id,window.location.href)
  return (
    <><BrowserRouter>
    <Link to={`${media_type}/${id}`}>
    <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
          onClick={handleOpen}
      >
  
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
      </div>
     
    </Link>
      </BrowserRouter>
    </>
  );
};

export default SingleContent;
