import ActionAreaCard from "./ActionAreaCard";

function Result({loading, output, filter, search, turn}) {

  return (
    <>
      <ActionAreaCard output={output} filter={filter} search={search} turn={turn}/>
    </>
  );
}

export default Result
