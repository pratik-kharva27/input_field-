import { useState } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState([]);

  // console.log(inputs,"sparrow");

  const [tabledata, setTabledata] = useState(false);


  const handleInputAdd = () => {
        // document.getElementById("inputFields").innerHTML += `<div><input type="text"></div>`;
    setInputs([...inputs, { val: "" }]);
    setTabledata(false);
  };

  const handlevalue = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index].val = e.target.value;
    setInputs(newInputs);
  };

  const handleRemoveInput = (index) => {
        //   const inputfield = document.getElementById('inputFields');
        //   inputfield.removeChild(inputfield.lastChild);
    const newArry = [...inputs];
    newArry.splice(index, 1);
    setInputs(newArry);
  };
  
  // const clear =()=>{
  //   setInputs("")
  // }

  const submitInput = () => {
    console.log(inputs);

    setTabledata(true);

  }

  return (
    <>
      <h1>Code With Sparrow</h1>

       {/* <div>
       <button onClick={handleRemoveInput} >Remove</button>
       <div id="inputFields"><input type ="text" ></input></div>
       <button onClick={handleInputAdd}>Add</button>
       </div> */}
   

      {inputs.map((data, index) => ( 
        
        <div key={index}>

     

            <input
              type="text"
              value={data.val}
              onChange={(e) => handlevalue(e, index)}
            />
          
            {inputs.length > 0 && (
              <button onClick={() => handleRemoveInput(index)}>Remove</button>
            )}
          

        </div>
      ))}

      <div>
        <button onClick={handleInputAdd}>Add</button>
        <button onClick={submitInput}>Submit</button>
      </div>
     
      {inputs.map((data,index) => (
        <div key={index}>

        {
          tabledata ? 
          <table >
            <tr><td>{data.val}</td></tr>
          </table> 
          : null
        }

        </div>
      ))}
     
    </>
  );
}

export default App;
