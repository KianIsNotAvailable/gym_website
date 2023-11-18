import React from 'react'
import './calculator.css'
import  { useState } from 'react';
function Calculator() {

    const [Gender, setGender] = useState(male);
    var male = 5;
    var female = -161;
    const femaleChecked = () =>{
        setGender(female);
        console.log(Gender)
       };
    const maleChecked = () =>{
        setGender(male)
        console.log(Gender)
    };
    const [ageInput, setAgeInput] = useState('');
    const handleAgeInput = (e) =>{
       setAgeInput(e.target.value)
    };
    const [weightInput, setWeightInput] = useState('');
    const handleWeightInput = (e)=>{
        setWeightInput(Math.floor(e.target.value * 0.45359237))
    };
    const [height,setHeight]=useState('');
    const handleHeightSelect = (e) =>{
        setHeight(Math.floor(e.target.value * 2.54))
    };
    const [Activity, setActivity] = useState('');
    const handleActivity = (e) =>{
        setActivity(e.target.value)
    };
    const [calories, setCalories] = useState('');
    const handleCalculate = ()=>{
        setCalories(Math.floor(((10 * weightInput) + (6.25 * height) - (5 * ageInput) + Gender) * Activity))
    }
    



  return (
    <div>
        <section >
  <div >
    <h1 >Welcome to the Calorie Calculator</h1>
  </div>
  <div className='everything'>
    <table >
        <tbody>
            <tr >
                <td >Gender:</td>
                <td>
                    <label>
                      <input type="radio" name="gender" id="male" value="male" checked onChange={maleChecked}/> 
                        Male
                    </label>
                    <label>
                      <input type="radio" name="gender" id="female" value="female" onChange={femaleChecked}/>
                        Female
                    </label>
                </td>
            </tr>
            <tr> <td ></td> </tr>
            <tr >
              <td >
                <label for="age">Age:</label>
              </td>
              <td>
                <input type="number" name="age" placeholder="Enter your Age"  id="ageInput" maxlength="3" value={ageInput} onChange={handleAgeInput}/>
              </td>
            </tr>
            <tr> <td ></td> </tr>
            <tr >
              <td >
                <label for="weight">Weight:</label>
              </td>
              <td>
                <input type="text" name="weight"  id="weightInput" maxlength="3" placeholder="lbs"  value={weightInput} onChange={handleWeightInput}/>
              </td>
            </tr>
            <tr> <td ></td> </tr>
            <tr >
              <td >
                <label for="height">Height:</label>
              </td>
              <td>
                <select name="height"  id="heightSelect" onSelect={handleHeightSelect}>
                  <option value="55">4ft 7in</option>
                  <option value="56">4ft 8in</option>
                  <option value="57">4ft 9in</option>
                  <option value="58">4ft 10in</option>
                  <option value="59">4ft 11in</option>
                  <option value="60">5ft 0in</option>
                  <option value="61">5ft 1in</option>
                  <option value="62">5ft 2in</option>
                  <option value="63">5ft 3in</option>
                  <option value="64">5ft 4in</option>
                  <option value="65">5ft 5in</option>
                  <option value="66">5ft 6in</option>
                  <option value="67">5ft 7in</option>
                  <option value="68">5ft 8in</option>
                  <option value="69">5ft 9in</option>
                  <option value="70">5ft 10in</option>
                  <option value="71">5ft 11in</option>
                  <option value="72">6ft 0in</option>
                  <option value="73">6ft 1in</option>
                  <option value="74">6ft 2in</option>
                  <option value="75">6ft 3in</option>
                  <option value="76">6ft 4in</option>
                  <option value="77">6ft 5in</option>
                  <option value="78">6ft 6in</option>
                  <option value="79">6ft 7in</option>
                  <option value="80">6ft 8in</option>
                  <option value="81">6ft 9in</option>
                  <option value="82">6ft 10in</option>
                  <option value="83">6ft 11in</option>
                  <option value="84">7ft 0in</option>
                </select>
              </td>
            </tr>
            <tr> <td ></td> </tr>
            <tr >
              <td >Activity Level:</td>
              <td>
                <select name="Activity" id="Activity" onSelect={handleActivity}>
                  <option value="1.2">Sedentary: Office Job</option>
                  <option value="1.375">Light Exercise: once or twice per week</option>
                  <option value="1.55">Moderate Exercise: 3 to 5 days per week</option>
                  <option value="1.725">Heavy Exercise: 6 to 7 days per week</option>
                  <option value="1.9">Athlete: multiple times per day</option>
                </select>
              </td>
            </tr>
            <tr> <td ></td> </tr>
            <tr >
              <td></td>
              <td>
                <a href="#Results"><button  id="calculate" onClick={handleCalculate}>Calculate!</button></a>
              </td>
            </tr>
        </tbody>
    </table>
  </div>
</section>
    </div>
  )
}

export default Calculator