import React from 'react'
import { Component, Fragment } from 'react'

import "../styles/login.css"

export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className='container'>
                    <div className='subcontainer'>
                        <div className='leftSide'>
                            <p>Bem vindo ao sistema</p>
                        </div>  
                        <div className='rigthSide'>
                            Olá
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}