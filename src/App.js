import './App.css';
import React, { useState } from 'react';
import image from './CodeCogsEqn.png'

const App = () => {

  const [result, setResult] = useState('')
  const [value, setValue] = useState(
    {
    "Y1": '',
    "I1_INTERCEPT": '',
    "I1_SLOPE": '',
    "T1": '',
    "G1": '',
    "C1_SLOPE": '',
    "C1_INTERCEPT": '',
    "Y2": '',
    "I2_INTERCEPT": '',
    "I2_SLOPE": '',
    "T2": '',
    "G2": '',
    "C2_INTERCEPT": '',
    "C2_SLOPE": ''
    }
  )
  const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(value)
        const requestOptions = {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': 'localhost:3000'
            },
          body: JSON.stringify(value)
      };

      fetch('http://127.0.0.1:8000/NX', requestOptions)
        .then((response) => response.json())
        .then((responsevalue) => setResult(responsevalue.value));
 }
    return (
      <div className="App">
      <div className="image" >
        <img src={image} alt="" width="998" height="49"></img>
      </div>
          <form onSubmit={handleSubmit}>
            <div className="vals">
              <div className="country1">
                <h1>Country 1</h1>
                  <label>
                    Country 1's production:
                      <input type="text" value={value.Y1} onChange={e => setValue({ ...value, Y1: e.target.value})}/>
                  </label>
                  <label>
                    Country 1's investment function's intercept:
                      <input type="text" value={value.I1_INTERCEPT} onChange={e => setValue({ ...value, I1_INTERCEPT: e.target.value})}/>
                  </label>
                  <label>
                    Country 1's investment function's slope:
                      <input type="text" value={value.I1_SLOPE} onChange={e => setValue({ ...value, I1_SLOPE: e.target.value})}/>
                  </label>
                  <label>
                    Country 1's tax revenue:
                      <input type="text" value={value.T1} onChange={e => setValue({ ...value, T1: e.target.value})}/>
                  </label>
                  <label>
                    Country 1's government spending:
                      <input type="text" value={value.G1} onChange={e => setValue({ ...value, G1: e.target.value})}/>
                  </label>
                  <label>
                    Country 1's consumption's function intercept:
                      <input type="text" value={value.C1_INTERCEPT} onChange={e => setValue({ ...value, C1_INTERCEPT: e.target.value})}/>
                  </label>
                  <label>
                    Country 1's consumption's function slope:
                      <input type="text"value={value.C1_SLOPE} onChange={e => setValue({ ...value, C1_SLOPE: e.target.value})}/>
                  </label>
                </div>
                <div className="country2">
                <h1>Country 2</h1>
                  <label>
                    Country 2's production:
                      <input type="text" value={value.Y2} onChange={e => setValue({ ...value, Y2: e.target.value})}/>
                  </label>
                  <label>
                    Country 2's investment function's intercept:
                      <input type="text" value={value.I2_INTERCEPT} onChange={e => setValue({ ...value, I2_INTERCEPT: e.target.value})}/>
                  </label>
                  <label>
                    Country 2's investment function's slope:
                      <input type="text" value={value.I2_SLOPE} onChange={e => setValue({ ...value, I2_SLOPE: e.target.value})}/>
                  </label>
                  <label>
                    Country 2's tax revenue:
                      <input type="text" value={value.T2} onChange={e => setValue({ ...value, T2: e.target.value})}/>
                  </label>
                  <label>
                    Country 2's government spending:
                      <input type="text" value={value.G2} onChange={e => setValue({ ...value, G2: e.target.value})}/>
                  </label>
                  <label>
                    Country 2's consumption's function intercept:
                      <input type="text" value={value.C2_INTERCEPT} onChange={e => setValue({ ...value, C2_INTERCEPT: e.target.value})}/>
                  </label>
                  <label>
                    Country 2's consumption's function slope:
                      <input type="text" value={value.C2_SLOPE} onChange={e => setValue({ ...value, C2_SLOPE: e.target.value})}/>
                  </label>
                  </div>
                </div>
                <div id='output'>  
                  <div type="submit" value="Submit">
                    <button className="Button">Calculate</button>
                    <h1>The value is: {result}</h1>
                  </div>
                  </div>
          </form>
      </div>
    );
  };


export default App;
