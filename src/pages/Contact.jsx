// src/pages/Contact.jsx
import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNo: '',
    email: '',
    message: '',
    spamCheck: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
        if (value.trim().length < 1) {
          error = 'First name is required';
        }
        break;
      case 'mobileNo':
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
        if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
          error = 'Please enter a valid mobile number';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'spamCheck':
        if (value !== 'webdesign') {
          error = 'Please type the correct characters';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'lastName') { // lastName is optional
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ 
        firstName: '', 
        lastName: '', 
        mobileNo: '', 
        email: '', 
        message: '',
        spamCheck: ''
      });
      setErrors({});
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-modern-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="contact-modern-header text-center mb-5">
              <h1 className="contact-modern-title">Get In Touch With Us Now!</h1>
            </div>
            
            <Row>
              {/* Contact Information Side */}
              <Col md={5} className="mb-4">
                <Card className="contact-modern-info-card h-100">
                  <Card.Body className="p-4">
                    <div className="contact-modern-info-section">
                      <h4 className="contact-modern-info-title">Phone Number</h4>
                      <p className="contact-modern-info-text">+63 951 971 3958</p>
                    </div>

                    <div className="contact-modern-info-section">
                      <h4 className="contact-modern-info-title">Location</h4>
                      <p className="contact-modern-info-text">
                        Daet, Camarines Norte 4600
                      </p>
                    </div>

                    <div className="contact-modern-info-section">
                      <h4 className="contact-modern-info-title">Email</h4>
                      <p className="contact-modern-info-text">
                        glenpabico19@gmail.com<br />
                       glenpabico20@gmail.com
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Contact Form Side */}
              <Col md={7}>
                <Card className="contact-modern-form-card">
                  <Card.Body className="p-4">
                    {isSubmitted && (
                      <Alert variant="success" className="contact-modern-alert">
                        <strong>Message Sent Successfully!</strong> We'll get back to you soon.
                      </Alert>
                    )}

                    {errors.submit && (
                      <Alert variant="danger" className="contact-modern-alert">
                        {errors.submit}
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="contact-modern-form-group mb-3">
                            <Form.Label className="contact-modern-label">
                              First Name *
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              placeholder="Enter your first name"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              onBlur={(e) => {
                                const error = validateField('firstName', e.target.value);
                                setErrors(prev => ({ ...prev, firstName: error }));
                              }}
                              isInvalid={!!errors.firstName}
                              className="contact-modern-input"
                            />
                            <Form.Control.Feedback type="invalid" className="contact-modern-error">
                              {errors.firstName}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="contact-modern-form-group mb-3">
                            <Form.Label className="contact-modern-label">
                              Last Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                              placeholder="Enter your last name"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="contact-modern-input"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="contact-modern-form-group mb-3">
                            <Form.Label className="contact-modern-label">
                              Mobile No *
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="mobileNo"
                              placeholder="Enter your mobile number"
                              value={formData.mobileNo}
                              onChange={handleInputChange}
                              onBlur={(e) => {
                                const error = validateField('mobileNo', e.target.value);
                                setErrors(prev => ({ ...prev, mobileNo: error }));
                              }}
                              isInvalid={!!errors.mobileNo}
                              className="contact-modern-input"
                            />
                            <Form.Control.Feedback type="invalid" className="contact-modern-error">
                              {errors.mobileNo}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="contact-modern-form-group mb-3">
                            <Form.Label className="contact-modern-label">
                              Email ID *
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter your email address"
                              value={formData.email}
                              onChange={handleInputChange}
                              onBlur={(e) => {
                                const error = validateField('email', e.target.value);
                                setErrors(prev => ({ ...prev, email: error }));
                              }}
                              isInvalid={!!errors.email}
                              className="contact-modern-input"
                            />
                            <Form.Control.Feedback type="invalid" className="contact-modern-error">
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <div className="contact-modern-divider"></div>

                      <Form.Group className="contact-modern-form-group mb-4">
                        <Form.Label className="contact-modern-label">
                          Message
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          placeholder="Type your message here..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="contact-modern-input contact-modern-textarea"
                        />
                      </Form.Group>

                      <Form.Group className="contact-modern-form-group mb-3">
                        <Form.Label className="contact-modern-label">
                          Please type "webdesign" *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="spamCheck"
                          placeholder="Type 'webdesign' here"
                          value={formData.spamCheck}
                          onChange={handleInputChange}
                          onBlur={(e) => {
                            const error = validateField('spamCheck', e.target.value);
                            setErrors(prev => ({ ...prev, spamCheck: error }));
                          }}
                          isInvalid={!!errors.spamCheck}
                          className="contact-modern-input"
                        />
                        <Form.Control.Feedback type="invalid" className="contact-modern-error">
                          {errors.spamCheck}
                        </Form.Control.Feedback>
                        <Form.Text className="contact-modern-help-text">
                          This helps us prevent spam. Thank you.
                        </Form.Text>
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="contact-modern-submit-btn"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Sending...
                            </>
                          ) : (
                            'Submit'
                          )}
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;