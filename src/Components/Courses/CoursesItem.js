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
                <p><strong>CRN:</strong> {CRN}</p>
                <p><strong>Term:</strong> {Term}</p>
                <p><strong>Course:</strong> {Course}</p>
                <p><strong>Section:</strong> {Section}</p>
                <p><strong>Course Title:</strong> {CourseTitle}</p>
                <p><strong>Schedule Type:</strong> {ScheduleType}</p>
                <p><strong>Title:</strong> {Title}</p>
                <p><strong>Meeting Pattern:</strong> {MeetingPattern}</p>
                <p><strong>Instructor:</strong> {Instructor}</p>
                <p><strong>Building and Room:</strong> {BuildingAndRoom}</p>
                <p><strong>Part of Term:</strong> {PartOfTerm}</p>
                <p><strong>Credit Hours:</strong> {CreditHours}</p>
                <p><strong>Max Enroll:</strong> {MaxEnroll}</p>
            </div>
        )
    }
}

export default CoursesItem;
