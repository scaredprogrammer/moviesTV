import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import ContentModal from './components/ContentModal/ContentModal'
import SingleContent from './components/SingleContent/SingleContent'
import { useHistory} from "react-router-dom";
function App() {
  const history=useHistory();
  // const {page}=useParams();
   console.log(history.location.pathname,'hii');
   //console.log(history);
   let url=history.location.pathname.split('/');
   console.log(url,'url');
   url=Number(url[1]);
   console.log(url,'url');
  let pathn =  window.location.pathname;
pathn = pathn.split("/");
let a = pathn[1];
let b = pathn[2]
let modalvalue = false;

if(a && b){
    modalvalue = true    
  }
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            
            <Route path="/:media_type/:id">
              <ContentModal ></ContentModal>
            </Route>
            <Route path="/movies" component={Movies} exact/>
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
            <Route   exact path="/" ><Trending/></Route>
            {typeof url ==='number' && <Route  path="/:page"><Trending url={url}/></Route>}
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation val={pathn}/>
    </BrowserRouter>
  );
}

export default App;
