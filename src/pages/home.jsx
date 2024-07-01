
import Hero from "../components/hero";
import Row from "../components/row";
import requests from "../Requests";


const Home = () => {
  return (
    <>
      <Hero />
      <div className="">
        <Row rowID="1" category="Popular" fetchURL={requests.requestPopular} />
        <Row rowID="2" category="Top rated" fetchURL={requests.requestTopRated} />
        <Row rowID="3" category="Drama" fetchURL={requests.requestGenres[18]} />
        <Row rowID="4" category="Comedy" fetchURL={requests.requestGenres[35]} />
        <Row rowID="5" category="TV Series" fetchURL={requests.requestTVSeries} />
        <Row rowID="6" category="Horror" fetchURL={requests.requestGenres[27]} />
        <Row rowID="7" category="Action" fetchURL={requests.requestGenres[28]} />
        <Row rowID="8" category="Sitcoms" fetchURL={requests.requestSitcoms} />
        <Row rowID="9" category="Adventure" fetchURL={requests.requestGenres[12]} />
        <Row rowID="10" category="Romance" fetchURL={requests.requestGenres[10749]} />
        <Row rowID="11" category="Fantasy" fetchURL={requests.requestGenres[14]} />
        <Row rowID="12" category="Animation" fetchURL={requests.requestGenres[16]} />
        <Row rowID="13" category="Science Fiction" fetchURL={requests.requestGenres[878]} />
      </div>
    </>
  );
};

export default Home;

