import React from 'react'
import "./Resources.css";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { sub_jects } from '../components/Datasheet';

const Subjects = (props) => {
      return (
        <div className='container'>
            <div className="content">
                <p className='title-first'>{props.name}</p>
                { sub_jects.map((subject)=>(
                    <div className="subject_div">
                        <p><Link to={subject.link}>{subject.lesson}</Link></p>
                    </div>
                )) }
            </div>
        </div>
      )
}

export default Subjects