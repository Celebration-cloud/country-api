import { v4 as uuid } from "uuid";
import CardList from "./CardList";
import "./ResultPage.css";
import DefaultResult from "./DefaultResult";
export default function ActionAreaCard({ output, filter, loading, turn, search }) {
  // THE FULL RESULT AND FILTRATION
  if (loading) {
    <h4 style={}>Loading...</h4>
  }else {
    return (
    <div className="resultPage">
      {/* LOADING */}

      {/* IF THERE IS A SEARCH VALUE */}
      
      {search?.map(
        (item) =>
          item.name.toLowerCase().includes(output.toLowerCase()) && (
            <div key={uuid()}>
              

              {/* IF THERE IS FILTRATION */}
              {item.region === filter && (
                <div className="result">
                  <CardList item={item} turn={turn} />
                  <br />
                  <br />
                </div>
              )}

              {/* IF THERE IS ALL REGION */}
              {filter === "All Region" && (
                <div className="result">
                  <CardList item={item} turn={turn} />
                </div>
              )}

              {/* IF THERE IS NO FILTRATION */}
              {!filter && (
                <div className="result">
                  <CardList item={item} turn={turn} />
                </div>
              )}
            </div>
          )
      )}

      {/* DEFAULT RESULT */}
      <DefaultResult
        search={search}
        output={output}
        turn={turn}
        filter={filter}
      />
      {/* IF THERE IS NO SEARCH VALUE BUT THERE IS FILTRATION */}
      {search?.map(
        (item) =>
          !output.toLowerCase() &&
          item.region === filter && (
            <div key={uuid()}>
              <CardList item={item} turn={turn} />
              <br />
              <br />
            </div>
          )
      )}

      {/* IF THERE IS NO SEARCH VALUE BUT THERE IS ALL REGION*/}
      {search?.map(
        (item) =>
          !output.toLowerCase() &&
          filter === "All Region" && (
            <div key={uuid()}>
              <CardList item={item} turn={turn} />
              <br />
              <br />
            </div>
          )
      )}
      <br />
    </div>
  );
  }
  
}
