import './TheBody.css';
import { useState, useEffect } from 'react';
import Filtering from "./Filter/Filtering";
import Search from './Search/Search'
import Result from './Result/Result';
import Button from './Reset/Button'
import api from '../../data.json'

function TheBody({turn}) {
  const [search, setSearch] = useState([]);
  const [filter, setFilter] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleMapping = (location) => {
    setFilter(location)
  }

  const handleSearch = (input) => {
    setOutput(input)
  }
  async function handleResult() {
    setLoading(true)
    const data = await 
    setSearch(data)
    setLoading(false)
  };
  
  useEffect(() => {
    handleResult();
  }, []);

  const handleReset = () => {
    setFilter("")
    setOutput("")
  };
  
  return (
    <div
      style={
        turn === true
          ? {
              backgroundColor: "hsl(207, 26%, 17%)",
              color: "white",
            }
          : {
              backgroundColor: "white",
              color: "hsl(207, 26%, 17%)",
            }
      }
    >
      <div
        className="container"
      >
        <div className="searchFill row">
          <div className="col">
            <Search handleSearch={handleSearch} turn={turn}/>
          </div>
          <div className="col fill">
            <Filtering handleMapping={handleMapping} turn={turn} />
            <Button
              turn={turn}
              handleReset={handleReset}
              search={search}
              output={output}
            />
          </div>
        </div>
        <Result loading={loading} filter={filter} output={output} search={search} turn={turn} />
      </div>
    </div>
  );
}

export default TheBody;