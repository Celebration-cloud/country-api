import FilterList from './FilterList';
import './Filter.css'
function Filtering({handleMapping, turn, handleReset}) {

  return (
    <div>
      <FilterList handleMapping={handleMapping} handleReset={handleReset} turn={turn}/>
    </>
  );
}

export default Filtering
