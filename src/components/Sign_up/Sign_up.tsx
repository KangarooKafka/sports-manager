import React, { Component } from 'react'
import '../App.scss'

export default class SignUp extends Component {
    render() {
        return (
            <div className='auth-box'>
                <form className='form'>
                    <h3>Sign Up</h3>
                    <br></br>
                    <div className="mb-3">
                        <label>First name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}