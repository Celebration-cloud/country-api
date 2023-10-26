
function Button({turn, handleReset, output}) {
  return (
    <>{output && (<button
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
        onClick={handleReset}
      >
        Reset
      </button>)}
      
      
    </>
  );
}

export default Button
