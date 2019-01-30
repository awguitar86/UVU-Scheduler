import React, { Component } from 'react';
import data from '../classes.json';

class Courses extends Component {
    render(){
        return(
            <div>
                {data[0]}
            </div>
        )
    }
}

export default Courses;