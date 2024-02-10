import React from 'react'
import './Resources.css'

const Junior = () => {

 const subjects=[
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
            { subjects.map((subject)=>(
                <div className="subject_div">
                    <p>{subject}</p>
                </div>
            )) }
        </div>
    </div>
  )
}

export default Junior