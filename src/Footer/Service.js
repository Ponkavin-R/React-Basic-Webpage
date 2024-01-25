import React from 'react'
import '../Footer/Service.css'
export default function Service() {
    return (
        <div>
            <br></br>
            <br></br>
            <h1>Our Services:</h1><br></br>
            <div className='service'>
                <div className='service-item'><img src={require('../networking.jpeg')}></img>Networking Course</div>
                <div className='service-item'><img src={require('../img/fullstack.jpeg')}></img>  Full Stack Cource</div>
                <div className='service-item'><img src={require('../img/htmlcss.jpeg')}></img>Html Css Cource</div>
                <div className='service-item'><img src={require('../img/react.png')}></img>React Cource</div>
                <div className='service-item'><img src={require('../img/fullstack.jpeg')}></img>Cybersecurity Course</div>
                <div className='service-item'><img src={require('../img/fullstack.jpeg')}></img>Angular Course</div>
            </div>
        </div>
    )
}
