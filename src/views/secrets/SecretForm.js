import React, { Component } from 'react';
import { API } from 'aws-amplify';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup'; // for everything
import Col from 'react-bootstrap/Col';
import DVLAAlert from '../../components/Alert';

export default class SecretForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.nameProps || '',
      value: '',
      description: '',
      message: null,
      status: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(data) {
    const apiName = 'backend';
    const path = 'ssm/postParameter';

    let response = [];
    try {
      response = await API.post(apiName, path, { body: data });
      this.setState({
        message: 'Kubernetes Secret Updated',
        status: 'success'
      });
      // <Redirect to={{ pathname: '/order', state: { id: '123' }}}/>
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        this.setState({ message: error.message, status: 'danger' });
      } else if (error.request) {
        this.setState({ message: 'Authentication Denied', status: 'danger' });
      } else {
        // Something happened in setting up the request that triggered an Error
        this.setState({ message: error.message, status: 'danger' });
      }
    }

    return response;
  }

  render() {
    const { value, description, name, message, status } = this.state;

    const { nameProps } = this.props;
    const schema = yup.object({
      name: yup
        .string()
        .required()
        .matches(
          /^\/kubernetes\/(\w|[-])+\w+\/(\w|[-])+\w+$/,
          'must be /kubernetes/<namespace>/<secret_name>'
        ),
      value: yup.string().required(),
      description: yup.string().required()
    });
    return (
      <>
        {message && <DVLAAlert message={message} status={status} />}

        <Formik
          validationSchema={schema}
          onSubmit={this.handleSubmit}
          initialValues={{
            name,
            value,
            description
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      name="name"
                      readOnly={nameProps}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!touched.name && !!errors.name}
                    />
                    <Form.Control.Feedback
                      data-testid="errors-name"
                      type="invalid"
                    >
                      {errors.name}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="value">
                  <Form.Label>Value</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      name="value"
                      value={values.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!touched.value && !!errors.value}
                    />
                    <Form.Control.Feedback
                      data-testid="errors-value"
                      type="invalid"
                    >
                      {errors.value}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!touched.description && !!errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.description}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Button id="submit" type="submit" variant="primary">
                Update
              </Button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}
