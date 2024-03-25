import { useState } from 'react';
// import LoginForm from './components/LoginForm';


const Login = () => {
    const {focused, setFocused} = useState(false);
    const [values, setValues] = useState({
        username:"",
        password:"",
    });

    const inputs =[
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMsg: "Your login credentials don't match an account in our system.",
            label: "Username",
        },

        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMsg: "Your login credentials don't match an account in our system.",
            label: "Password",
        }
    ];


  

    const handleFocus = (e) => {
      setFocused(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };
  
    // return (
    //   <div className="formInput">
    //     <label>{label}</label>
    //     <input
    //       {...inputProps}
    //       onChange={onChange}
    //       onBlur={handleFocus}
    //       onFocus={() =>
    //         inputProps.name === "confirmPassword" && setFocused(true)
    //       }
    //       focused={focused.toString()}
    //     />
    //     <span>{errorMessage}</span>
    //   </div>
    // );

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label>values</label>
                {inputs.map((input) => (
                    <Login key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    handleChange={handleChange}
                    onBlur={handleFocus}
                //     onFocus={() => input.name === "confirmPassword" &&setFocused(true)
                // }
                // focused={focused.toString()}
                        />
                ))}
            </form>
        </div>
    )
};

export default Login;

// import React from 'react';

// class Login extends React.Component {
//     render() {
//         return(
//             <div className="wrapper">
//                 <div className="form-box login">
//                     <h2>Login</h2>
//                     <form action="#">
//                         <div className="input-box">
//                             <span className="icon"></span>
//                             <input type="user-id" required></input>
//                             <label>User ID</label>
//                         </div>
//                     </form>
//                 </div>
//             </div> 
//         )
//     }
// }

// export default Login;