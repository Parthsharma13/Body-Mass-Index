import React,{useState} from 'react';

function Bmiform(){
    const [Weight,setWeight] = useState('')
    const [Height,setHeight] = useState('')
    const [result,setResult] = useState('')
    const [output,setOutput] = useState('')
    const [weightneeded,setWeightneeded] = useState('')
    const [bmineeded,setBmineeded] = useState('')
    const [weightneeded2,setWeightneeded2]=useState('')
    const [weightTohealthy,setWeightTohealthy]=useState('')
    function handlechange1(event){
        setWeight(event.target.value);
    }
    function handlechange2(event){
        setHeight(event.target.value);
    }
    function clickHandlercalculate(){
        let result=(Weight/(Height*Height)).toFixed(2)
        let weightneeded=24.9*(Height*Height)
        let bmineeded=(Weight-weightneeded).toFixed(2)
        let weightneeded2=18.5*(Height*Height)
        let weightTohealthy=(weightneeded2-Weight).toFixed(2)

         
        console.log("calculate button clicked")
        
        console.log(result)
        setResult(result)
        setWeightneeded(weightneeded)
        setBmineeded(bmineeded)
        setWeightneeded2(weightneeded2)
        setWeightTohealthy(weightTohealthy)
        
        
        if (result<18.5){
            console.log("Underweight")
            setOutput("Category : UnderWeight")
            setWeightTohealthy('You Need To Gain '+ weightTohealthy+' kg')
            setBmineeded('')

        }
        else if(result>=18.5 && result<=24.9){
            console.log("Healthy Weight")
            setOutput("Category : Healthy Weight")
            setBmineeded('')
            setWeightTohealthy('')
        }
        else if (result>=25 && result<=29.9){
            console.log("Overweight")
            setOutput("Category : OverWeight")
            console.log(weightneeded)
            setBmineeded('You Need To Lose '+ bmineeded+' kg')
            setWeightTohealthy('')

        }
        else{
            console.log("Obese")
            setOutput("Category : Obese")
            setBmineeded('You Need To Lose '+ bmineeded+' kg')
            setWeightTohealthy('')

        }
        
        
    }
    function clickHandlerclear(){
        console.log("clear button clicked")
        setHeight('')
        setWeight('')
        setResult('')
        setOutput('')
        setWeightneeded('')
        setBmineeded('')
        setWeightTohealthy('')
    }
    return(
        <div className='container'>
        <div>
            <h1>BMI -- Body Mass Index</h1>
        </div>
        <div className='form'>
            <form>
            <div>
                <lable className='lable'>Weight : <input type="number" value={Weight} onChange={handlechange1} /> <b className='bold'>Kilogram</b>
                </lable>
                </div>
                <div>
                <lable className='height'>Height : <input type="number" value={Height} onChange={handlechange2} /> <b className='bold'>meter</b>
                </lable>
                </div>
            </form>
            <div>
            <button onClick={clickHandlercalculate} className='Button'>Calculate</button>
            <button onClick={clickHandlerclear} className='Button'>Clear</button>
            </div>
            
        </div >
            <div className='result'><h3>BMI Score : {result}</h3></div>
            <div className='result'><b>{output} </b></div>            
            <div className='result'><b>{bmineeded}</b></div>
            <div className='result'><b>{weightTohealthy}</b></div>
        </div>
    );
}

export default Bmiform;