import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyAPI from './JoblyAPI';
import Alert from './Alert';
import './LoginReg.css';

const Login = ({ setToken }) => {
  const history = useHistory();
  const INT_STATE = { username: '', password: '', first_name: '', last_name: '', email: '', errors: [] };
  const [formData, setFormData] = useState(INT_STATE);
  const [activeForm, setActiveForm] = useState('login');

  // when clicking on these, add an animation
  const toggleLogin = () => {
    setActiveForm('login');
  };

  const toggleSignup = () => {
    setActiveForm('signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    let token;

    if (activeForm === 'signup') {
      data = {
        username: formData.username,
        password: formData.password,
        first_name: formData.first_name || undefined,
        last_name: formData.last_name || undefined,
        email: formData.email || undefined,
      };

      // by how the backend is setup, when we register, we return a JWT. Extract that token
      try {
        token = await JoblyAPI.register(data);
      } catch (errors) {
        return setFormData((d) => ({ ...d, errors }));
      }
    } else {
      // login
      data = {
        username: formData.username,
        password: formData.password,
      };

      try {
        token = await JoblyAPI.login(data);
      } catch (errors) {
        return setFormData((d) => ({ ...d, errors }));
      }
    }

    setToken(token);
    history.push('/companies');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  let login = (
    <div className='form'>
      <button className='Login-btn' onClick={toggleLogin}>
        Login
      </button>
      <button className='Signup-btn' onClick={toggleSignup}>
        SignUp
      </button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'></label>
          <input type='text' name='username' id='username' placeholder='username' value={formData.username} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='password'></label>
          <input type='password' min={5} name='password' id='password' placeholder='password' value={formData.password} onChange={handleChange} />
        </div>
        {formData.errors.length ? <Alert messages={formData.errors} /> : null}

        <button>Submit</button>
      </form>
    </div>
  );

  let reg = (
    <div className='form'>
      <button className='Login-btn' onClick={toggleLogin}>
        Login
      </button>
      <button className='Signup-btn' onClick={toggleSignup}>
        SignUp
      </button>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>
            <small>Username</small>
          </label>
          <input type='text' name='username' id='username' placeholder='username' value={formData.username} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='password'>
            <small>Password</small>
          </label>
          <input type='password' name='password' id='password' placeholder='password' value={formData.password} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='first_name'>
            <small>First Name</small>
          </label>
          <input type='first_name' name='first_name' id='first_name' placeholder='first name' value={formData.first_name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='last_name'>
            <small>Last Name</small>
          </label>
          <input type='last_name' name='last_name' id='last_name' placeholder='last name' value={formData.last_name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='email'>
            <small>Email</small>
          </label>
          <input type='email' name='email' id='email' placeholder='email' placeholder='email' value={formData.email} onChange={handleChange} />
        </div>
        {formData.errors.length ? <Alert messages={formData.errors} /> : null}

        <button>Submit</button>
      </form>
    </div>
  );

  if (activeForm === 'login') {
    return login;
  } else {
    return reg;
  }
};

export default Login;
