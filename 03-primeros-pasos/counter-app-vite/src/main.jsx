import React from "react";
import ReactDOM from 'react-dom/client'
import {HelloWordApp} from './HelloWordApp';
import {FirstApp} from './FirstApp';
import {CounterApp} from './CounterApp'
import { TestimonioApp } from "./TestimonioApp";
import './styles.css'; //Los estilos globales se declaran en el main.jsx


//a FirstApp le agregamos atributos como "title"  y "subtitle" como propiedades que queremos pasar desde el componente padre hacia el hijo
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="contenedor-principal">
            <h1>Here is what our alumni say about freeCodeCamp:</h1>
            <TestimonioApp
            nombre='Emma Bostian'
            pais='Suecia'
            imagen='Emma'
            cargo='Ingeniera de Software'
            empresa='Spotify'
            testimonio='I&apos;ve always struggled with learning JavaScript. I&apos;ve taken many courses but freeCodeCamp&apos;s course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
            /> 

            <TestimonioApp
            nombre='Shawn Wang'
            pais='Singapore'
            imagen='Shawn'
            cargo='Software Engineer'
            empresa='Amazon'
            testimonio='It&apos;s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
            /> 
            
        </div>
        
    </React.StrictMode>
)

