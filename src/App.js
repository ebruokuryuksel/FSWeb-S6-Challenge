import React, { useState, useEffect }from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from "./components/SearchBar"
import Info from "./components/Info"
import Characters from "./components/Characters"
import Pagination from "./components/Pagination"
import Container from '@mui/material/Container';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [chars, setChars] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const totalPage = Math.ceil(count/10)
  console.log("hi", totalPage)
  
  const getData = () => {
    axios
      .get("https://swapi.dev/api/people/", {
        params: {
          page: page, //page
          search: search
        },
      })
      .then((res) => {
        setChars(res.data.results);
        setCount(res.data.count);

        // setCount(res.data.count);
        // setLoading(false);

        console.log(res);
        console.log(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
getData()
  }, [search, page])

  return (
    <div className="App">
      <Header/>
      <Container maxWidth="sm">
        <SearchBar setSearch={setSearch} />
        <Info count={count}/> {/*send prop */}
        <Characters chars={chars}/>
        <Pagination count={totalPage} setPage={setPage}/>
      </Container>

    </div>
  );
}

export default App;
