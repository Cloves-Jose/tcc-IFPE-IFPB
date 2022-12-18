import React, { useState } from 'react'
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
                            <form action="" method="post">
                                <div>
                                    <label htmlFor="" className='titleLogin'>Email</label>
                                    <input type="email" name="" id=""/>
                                </div>
                                <div>
                                    <label htmlFor="" className='titleLogin'>Senha</label>
                                    <input type="password" name="" id=""/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}