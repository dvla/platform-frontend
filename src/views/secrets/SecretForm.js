import React, { Component } from 'react';
import { API } from 'aws-amplify';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup'; // for everything
import Col from 'react-bootstrap/Col';

export default class SecretForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.nameProps || '',
      value: '',
      description: ''
    };
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(data) {
    const apiName = 'backend';
    const path = 'ssm/postParameter';
    return API.post(apiName, path, { body: data });
  }

  render() {
    const { value, description, name } = this.state;
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
    );
  }
}
