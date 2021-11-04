import React, { useState } from 'react';

const RadioButtonHook = () => {

    let valorColor = ""
    let colors = ["Negro", "Cafe", "Azul"]
    let option = ["Si", "No"]
    let option2 = ["Si", "No"]
    const [displayColor,setColor] = useState("Azul");
    const [display,setDisplay] = useState();
    const [display2,setDisplay2] = useState();

    const checkedOption = (display, display2) => {
        console.log(display + "    " + display2)
        if(display === display2) {
            return display2
        }
        return display
    };

    return(
        <div>
          <center>
            {colors.map(result =>(
                <div>
                    <input type="radio" value={result} name="radioValues"
                        onChange={(e) => 
                            console.log(e)
                            // setColor(e.target.value)
                            // console.log(displayColor)
                        }
                    />
                    <b style={{color:"red"}}>{result}</b>   
                </div>    
            ))}
            <h2 style={{color:"red"}}>{displayColor}</h2>
          </center>
          <center>
            {option.map(result =>(
                <div>
                    {/* <input type="radio" value={result} name="radioValues2" checked={display === result || display2 === result && display !== result } */}
                    <input type="radio" value={result} name="radioValues2" checked={checkedOption(display,display2) === result }

                        onChange={(e) => setDisplay(e.target.value)}
                    />
                    <b style={{color:"red"}}>{result}</b>   
                </div>    
            ))}
            <h2 style={{color:"red"}}>{display}</h2>
          </center>
          <center>
            {option.map(result =>(
                <div>
                    <input type="radio" value={result} name="radioValues3" checked={display2 === result }
                        onChange={(e) => setDisplay2(e.target.value)}
                    />
                    <b style={{color:"red"}}>{result}</b>   
                </div>    
            ))}
            <h2 style={{color:"red"}}>{display2}</h2>
          </center>
          {/* <button onClick={useState("Cafe")}>Boton</button> */}
        </div>
    );
}

export default RadioButtonHook;