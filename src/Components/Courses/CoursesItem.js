import React, { Component } from 'react';
import './courses.css';

class CoursesItem extends Component {
    render(){
        const {
            CRN,
            Term,
            Course,
            Section,
            CourseTitle,
            ScheduleType,
            Title,
            MeetingPattern,
            Instructor,
            BuildingAndRoom,
            PartOfTerm,
            CreditHours,
            MaxEnroll
        } = this.props;
        console.log(this.props);
        return (
            <div className="courses-item-wrap">
                <p>{CRN}</p>
                <p>{Term}</p>
                <p>{Course}</p>
                <p>{Section}</p>
                <p>{CourseTitle}</p>
                <p>{ScheduleType}</p>
                <p>{Title}</p>
                <p>{MeetingPattern}</p>
                <p>{Instructor}</p>
                <p>{BuildingAndRoom}</p>
                <p>{PartOfTerm}</p>
                <p>{CreditHours}</p>
                <p>{MaxEnroll}</p>
            </div>
        )
    }
}

export default CoursesItem;
