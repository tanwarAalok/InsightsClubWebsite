import React from 'react';
import Base1 from './Base1';
import pdf from './my.pdf'
import me from './me.jpg';
import i from './i.jpg';
import e from './e.jpg';
import './Newsarticle.css'
const Newsarticle=()=>{
    return(
        <div className='container2'>
            <h3 className='a'>Newsletters</h3>
            <Base1 img={e} link={pdf}/>           
             <br/>
            <Base1 img={i} link={pdf}/>
            <br/>
            <Base1 img={i} link={pdf}/>
            <br/>
            <Base1 img={i} link={pdf}/>
            <br/>
            <Base1 timg={i} link={pdf}/>
            <br/>
            <Base1 img={i} link={pdf}/>
            <br/>
            <Base1 img={i} link={pdf}/>
            <br/>
            <Base1 img={i} link={pdf}/>
            <br/>
            <Base1 img={i} link={pdf}/>
        </div>
    )
}
export default Newsarticle;