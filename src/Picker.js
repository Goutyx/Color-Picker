import { useState } from 'react';
import './Picker.css';

function Pick(){

    const colors=["red", "blue", "green", "yellow", "orange", "pink", "purple", "grey", "black", "white", "purple"];
    const [bg, setBg]=useState("white");

    return(
        <div id="box" style={{background:bg}}>
            <h1>COLOR PICKER APP</h1>
            <div className='boxer'>
                {colors.map((color, index)=>(
                    <div key={index} className='clr' style={{background:color}} onClick={()=>setBg(color)}>{color}</div>  
                ))}
            </div>
        </div>
    );
}
export default Pick;