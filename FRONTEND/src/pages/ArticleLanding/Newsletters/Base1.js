import React from 'react';
import './Base1.css';

const Base1=(props)=>{
    const me=()=>{
        window.open(`${props.link}`, "_blank");
    }
    return(
        <div className='container1' style={{backgroundImage:`url(${props.img})`}} target="_blank" onClick={me}>
            
            
            

        </div>
    )
}
export default Base1;