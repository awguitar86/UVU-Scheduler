import React, { Component } from 'react';
import data from '../../classes';
import CoursesItem from './CoursesItem';

class Courses extends Component {
    render(){
        console.log(data);
        let displayData = data[0].map( item => {
            const index = data[0].indexOf(item);
            console.log(index);
            return <CoursesItem
                key={index}
                CRN={item.CRN}
                Term={item.Term}
                Course={item.Course}
                Section={item.Section}
                CourseTitle={item["Course Title"]}
                ScheduleType={item["Schedule Type"]}
                Title={item.Title}
                MeetingPattern={item["Meeting Pattern"]}
                Instructor={item.Instructor}
                BuildingAndRoom={item["Building and Room"]}
                PartOfTerm={item["Part of Term"]}
                CreditHours={item["Credit Hrs Min"]}
                MaxEnroll={item["Maximum Enrollment"]}
            />
        })
        return (
            <div className="courses-wrap">
                {displayData}
            </div>
        )
    }
}

export default Courses;