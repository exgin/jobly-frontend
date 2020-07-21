import React, { useEffect, useContext, useState } from 'react';
import JoblyAPI from './JoblyAPI';
import Context from './Context';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Alert from './Alert';

const Profile = () => {
  const { currUser, setCurrUser } = useContext(Context);

  const [formData, setFormData] = useState({
    username: currUser.username,
    password: currUser.password || '',
    first_name: currUser.first_name || '',
    last_name: currUser.last_name || '',
    email: currUser.email || '',
    errors: [],
    successUpdate: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = {
        first_name: formData.first_name || undefined,
        last_name: formData.last_name || undefined,
        email: formData.email || undefined,
        password: formData.password,
      };

      let username = formData.username;
      let res = await JoblyAPI.saveUserProfile(username, data);

      setFormData((form) => ({ ...form, errors: [], successUpdate: true, password: '' }));
      setCurrUser(res);
    } catch (errors) {
      setFormData((form) => ({ ...form, errors }));
    }
  };

  return (
    <div>
      <Container>
        <h2>
          {formData.first_name} {formData.last_name}'s profile
        </h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for='username'>Username</Label>
            <Input type='text' name='username' id='username' value={formData.username} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label for='first_name'>First name</Label>
            <Input type='text' name='first_name' id='first_name' value={formData.first_name} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label for='last_name'>Last name</Label>
            <Input type='text' name='last_name' id='last_name' value={formData.last_name} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='text' name='email' id='email' value={formData.email} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label for='password'>Enter Password To Confirm Changes</Label>
            <Input type='password' name='password' id='password' value={formData.password} onChange={handleChange} />
          </FormGroup>

          {formData.errors.length ? <Alert messages={formData.errors} /> : null}
          {formData.successUpdate ? <Alert messages={['User updated successfully.']} /> : null}

          <Button>Change Information</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Profile;
