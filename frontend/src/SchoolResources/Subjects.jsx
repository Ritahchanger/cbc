import React from 'react'
import "./Resources.css";

const Subjects = (props) => {
    const sub_jects=[
        'Mathematics',
        'English',
        'Swahili or Kenya Language',
        'Integrated Science',
        'Social Studies',
        'Business Studies',
        'Agriculture',
        'Pre technical + Pre-Career Studies',
        'Religious Education'
     ]
    
      return (
        <div className='container'>
            <div className="content">
                <p className='title-first'>{props.name}</p>
                { sub_jects.map((subject)=>(
                    <div className="subject_div">
                        <p>{subject}</p>
                    </div>
                )) }
            </div>
        </div>
      )
}

export default Subjects