import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Formik } from 'formik';
import * as yup from 'yup'; // for everything

class UpdateSecret extends Component {
  static handleSubmit(event) {
    // eslint-disable-next-line no-console
    console.log(event);
  }

  constructor(props) {
    super(props);

    const { location } = this.props;
    const { state } = location;

    if (state) {
      const { Name, Value, Description } = location.state.secret;
      this.state = {
        name: Name,
        value: Value,
        description: Description
      };
    }
  }

  render() {
    const { name, value, description } = this.state;
    const schema = yup.object({
      name: yup.string().required(),
      value: yup.string().required(),
      description: yup.string().required()
    });

    return (
      <>
        <div className="container-fluid">
          <h1 data-testid="title" className="h3 mb-4 text-gray-800">
            Kubernetes Secrets
          </h1>
          <Card className="shadow mb-4">
            <Card.Header className="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Update Kubernetes Secret
              </h6>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
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
                                readOnly="true"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!touched.name && !!errors.name}
                              />
                              <Form.Control.Feedback type="invalid">
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
                              <Form.Control.Feedback type="invalid">
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
                                isInvalid={
                                  !!touched.description && !!errors.description
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.description}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </Form.Row>

                        <Button type="submit" variant="primary">
                          Update
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default UpdateSecret;
