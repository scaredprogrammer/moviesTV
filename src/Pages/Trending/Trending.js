import axios from "axios";
import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { Link, useHistory } from "react-router-dom";
const Trending = ({url}) => {
  
  let v=1;
  console.log(url,v,'urlll')
  if(url>v){
     v=url;
  }

  const [page, setPage] = useState(v);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=b8876594426392793b3ed15a1d14028c&page=${page}`
    );

    setContent(data.results);
  };
  const history=useHistory();
  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
    history.push(`/${page}`);
  }, [page,history]);
  
    

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} page={page}/>
    </div>
  );
};

export default Trending;
