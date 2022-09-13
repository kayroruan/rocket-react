import './App.css'
import React from 'react';
import fogueteFoto from './componentes/imgs/foguete.png'


export default () => {
    return (
        <div className='scene'>
            <div className='rocket'>
                <img src={fogueteFoto}/>
            </div>
        </div>
    )
}