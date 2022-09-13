import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
    <App></App>,
  document.getElementById('root')
)

function stars(){
  let count = 150;
  let scene = document.querySelector('.scene');
  let i =0;
  while(i < count){
    let star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + 'px';
    star.style.width = 3 + 'px';
    star.style.height = 60 + 'px';
    star.style.animationDuration = duration + 's';

    scene.appendChild(star);
    i++;
  }
}
stars();
