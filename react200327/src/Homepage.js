import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

import DatePicker from 'antd/es/date-picker'; // for js
import 'antd/es/date-picker/style/css'; // for css

import { Button } from 'antd';




export default class Homepage extends Component {
    render() {
        return (

            <div>

                <h1> This is the Homepage page </h1>
                <Link to='./resume'> Resume page </Link>
                <Link to='./facebook'> Facebook page </Link>
                <Link to='./app'> App page </Link>

                <br></br>


                <Button type="primary">Primary</Button>
                <Button style={{ backgroundColor: 'lightgreen', color: 'lightred' }}>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
                <br />

            </div>
        );

    }
}








