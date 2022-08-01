import './App.css';
import FormInputs from './components/FormInputs';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    username:"",
    email:"",
    date:"",
    password:"",
    confirmPass:"",
    errorMessage: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "User",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special characters!",
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email adress!",
      required: true,
    },
    {
      id: 3,
      name: "date",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      errorMessage: "",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "password",
      errorMessage: "Password shold be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPass",
      type: "password",
      placeholder: "confirm Pass",
      label: "confirm Pass",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        {inputs.map(input => (
          <FormInputs 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange}
            >
            </FormInputs>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
