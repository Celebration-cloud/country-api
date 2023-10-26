import {useState} from 'react'
function Toggle({ handleSwitch , turn}) {
  const [tog, setTog] = useState({check: false});
  const handleChange = (e) =>{
    const {name, checked} = e.target
    setTog(prev => {return {...prev, [name]: checked}})
    handleSwitch(tog)
  }
  return (
    <div>
      <div className="toggle-switch">
        <label className="switch">
          <input
            type="checkbox"
            checked={tog.value}
            onChange={handleChange}
            name="check"
          />
          <span className="slider"></span>
        </label>
        <span style={turn === true ? { color: "white" } : {color: "black"}}>{turn ? " Dark Mode" : " Light Mode"}</span>
      </div>
    </div>
  );
}

export default Toggle
