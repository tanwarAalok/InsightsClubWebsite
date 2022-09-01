import React from 'react';
import Base1 from './Base1';
import pdf from './Insights Club Newsletter.pdf'
import me from './me.jpg';
import i from './i.jpg';
import e from './e.jpg';
import ins from './a.jpg';
import './Newsarticle.css'
const Newsarticle=()=>{
    return(
        <div className='container2'>
            <div className='a'>Newsletter</div>
            <br/>
            <Base1 img={ins} link={pdf}/>           
             <br/>
            <Base1 img={ins} link={pdf}/>
            <br/>
            <Base1 img={ins} link={pdf}/>
            <br/>
            <Base1 img={ins} link={pdf}/>
            <br/>
            <Base1 timg={ins} link={pdf}/>
            <br/>
            <Base1 img={ins} link={pdf}/>
            <br/>
            <Base1 img={ins} link={pdf}/>
            <br/>
            <Base1 img={ins} link={pdf}/>
            <br/>
            <Base1 img={ins} link={pdf}/>
        </div>
    )
}
export default Newsarticle;