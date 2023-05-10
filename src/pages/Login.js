import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="user-id" required></input>
                            <label>User ID</label>
                        </div>
                    </form>
                </div>
            </div> 
        )
    }
}

export default Login;