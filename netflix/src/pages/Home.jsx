import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

 const Home = () => {
   return (
    <div>
      <Main />
      <Row title='Up Coming' fetchUrl={requests.requestUpcoming}/>
      <Row title='Top Popular' fetchUrl={requests.requestPopular}/>
      <Row title='Top Rated' fetchUrl={requests.requestTopRated}/>
    </div>
   )
 }
 export default Home;