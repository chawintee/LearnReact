import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Facebook extends Component {
    render() {
        return(
            <div>
                <h1> This is Facebook Page </h1>
                <Link to='./'> Homepage </Link>


            </div>

        )
    }
}