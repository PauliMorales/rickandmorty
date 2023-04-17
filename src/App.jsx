import "./App.css";
import useFetch from "./hooks/useFetch";
import React, { useRef, useState } from "react";
import MainContent from "./components/MainContent";
import getRandomLocation from "./utils/getRandomLocation";
import PaginationResults from "./components/PaginationResults";
import header from "./assets/images/header.jpeg";
import footer from "./assets/images/footer.jpg";
import imgError from "./assets/images/img-error.png";
import Loading from "./components/Loading";

const App = () => {
  const [inputValue, setInputValue] = useState(getRandomLocation());

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, hasError, loading] = useFetch(url);
  const [data, setData] = useState();

  const inputLocation = useRef();

  const handleSubmit = (event) => {
    setData([]);
    event.preventDefault();
    setInputValue(inputLocation.current.value);
  };

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__header-img" src={header} alt="" />
        <div className="app__header-title">
          <div className="title">
            Rick<span>and </span>Morty
          </div>
          <div className="title middle">
            Rick<span>and </span>Morty
          </div>
          <div className="title bottom">
            Rick<span>and </span>Morty
          </div>
        </div>
      </div>
      <form className="app__form" onSubmit={handleSubmit}>
        <input
          className="app__input"
          ref={inputLocation}
          type="text"
          placeholder="Type # from 1 to 126"
        />
        <button className="app__btn">Search</button>
      </form>
      {hasError ? (
        <div className="app__error">
          <img className="app__error-img" src={imgError} alt="" />
          <div className="app__error-text">
            <h2 className="text">
              Hey! you must provide an id from
              <span className="number"> 1</span> to
              <span className="number"> 126</span>
            </h2>
            <div className="portal"></div>
          </div>
        </div>
      ) : (
        <>
          <MainContent location={data} />
          <PaginationResults setData={setData} location={location} />
          {loading && <Loading type={loading ? "loading" : ""} />}
        </>
      )}
      <footer>
        <img src={footer} alt="" />
      </footer>
    </div>
  );
};

export default App;
