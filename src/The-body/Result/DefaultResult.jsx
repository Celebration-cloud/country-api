import { v4 as uuid } from "uuid";
import CardList from "./CardList";
function DefaultResult({search, output, filter, turn}) {
  return (
    <>
      {search?.map(
        (item) =>
          !output.toLowerCase() &&
          !filter && (
            <div key={uuid()}>
              <CardList item={item} turn={turn} />
              <br />
              <br />
            </div>
          )
      )}
    </>
  );
}

export default DefaultResult
