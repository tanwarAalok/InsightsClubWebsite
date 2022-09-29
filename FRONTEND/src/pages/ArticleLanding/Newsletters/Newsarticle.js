import React from 'react';
import Base1 from './Base1';
import pdf from './Insights Club Newsletter.pdf'
import a from './Insights Club Newsletter-1.pdf';
import b from './IC NEWSLETTER SEPTEMBER ISSUE.pdf';

import me from './me.jpg';
import i from './i.jpg';
import e from './e.jpg';
import ins from './a.jpg';
import './Newsarticle.css'
import s from './s.png';
const Newsarticle=()=>{
    return(
        <div className='container2'>
            <div className='a'>Newsletter</div>
            <br/>
            <Base1 img={ins} link={a}/>           
             <br/>
            <Base1 img={s} link={b}/>
            <br/>
            
        </div>
    )
}
export default Newsarticle;