import React from 'react';

const LoginForm = ({ inputs, values, handleChange, handleFocus, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div className="formInput" key={input.id}>
          <label>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={values[input.name]}
            onChange={handleChange}
            onBlur={handleFocus}
          />
          <span>{input.errorMsg}</span>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;