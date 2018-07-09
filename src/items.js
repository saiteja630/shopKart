import React, { Component } from 'react';
import './items.css';
import one from './images/mens/one.jpg';
import two from './images/mens/two.jpg';
import three from './images/mens/three.jpg';
import four from './images/mens/four.jpg';
import five from './images/mens/five.jpg';
import Newtab from './Newtab';


class Items extends Component {
    render(){
               ;
        return(
            <div className='info'>
                    <div className="grid">
                        <img  src={one} alt='mens polo 1' title='mens polo red $9.99' onClick={Newtab}/> 
                        <img  src={two} alt='mens polo 2'/>
                        <img  src={three} alt='mens polo 3'/>
                        <img  src={four} alt='mens polo 4'/>
                        <img  src={five} alt='mens polo 5'/>
                        <img  src={one} alt='mens polo 1'/>
                        <img  src={two} alt='mens polo 2'/>
                        <img  src={three} alt='mens polo 3'/>
                        <img  src={four} alt='mens polo 4'/>
                        <img  src={five} alt='mens polo 5'/>                        
                        <img  src={one} alt='mens polo 1'/>
                        <img  src={two} alt='mens polo 2'/>
                        <img  src={three} alt='mens polo 3'/>
                        <img  src={four} alt='mens polo 4'/>
                        <img  src={five} alt='mens polo 5'/>
                    </div>
            </div>
        )
    }
}

export default Items;