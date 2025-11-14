// src/pages/Contact.jsx
import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
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

  // ⚡ REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS ⚡
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_0sjyrne',        // From Email Services
    TEMPLATE_ID: 'template_x8zegml',     // From Email Templates
    PUBLIC_KEY: 'SSeudS9KSMQLCvQjV'           // From API Keys
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
        if (value.trim().length < 1) {
          error = 'First name is required';
        }
        break;
case 'mobileNo':
  // Philippine mobile number validation - now expecting numbers only
  const phoneRegex = /^[0-9]{10,11}$/;
  let normalizedPhone = value;
  
  // Remove any non-numeric characters (just in case)
  normalizedPhone = normalizedPhone.replace(/\D/g, '');
  
  if (!phoneRegex.test(normalizedPhone) || !normalizedPhone.startsWith('9')) {
    error = 'Please enter a valid Philippine mobile number (e.g., 09123456789 - 11 digits starting with 9)';
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
      if (key !== 'lastName') {
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
      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        from_email: formData.email,
        phone: formData.mobileNo,
        message: formData.message,
        to_email: 'glenpabico19@gmail.com' // This will be used in your template
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully!', result);

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
      console.error('EmailJS error:', error);
      setErrors({ 
        submit: `Failed to send message. Please try again or contact me directly at glenpabico19@gmail.com. Error: ${error.text || 'Check console for details'}` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-modern-wrapper" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="contact-modern-header text-center mb-5">
              <h1 className="contact-modern-title">Let's Create Something Amazing</h1>
              <p className="contact-modern-subtitle">Get in touch and let's discuss your project</p>
            </div>
            
            <Row className="g-4">
              {/* Contact Information Card */}
              <Col md={5}>
                <Card className="contact-info-modern">
                  <Card.Body className="p-4">
                    <div className="contact-info-header">
                      <h3 className="contact-info-title">Contact Information</h3>
                      <p className="contact-info-description">
                        Reach out through any of these channels
                      </p>
                    </div>

                    <div className="contact-info-content">
                      <div className="contact-item">
                        <div className="contact-icon-wrapper">
                          <div className="contact-icon phone"></div>
                        </div>
                        <div className="contact-details">
                          <h4 className="contact-item-title">Phone</h4>
                          <p className="contact-item-text">+63 951 971 3958</p>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon-wrapper">
                          <div className="contact-icon location"></div>
                        </div>
                        <div className="contact-details">
                          <h4 className="contact-item-title">Location</h4>
                          <p className="contact-item-text">Daet, Camarines Norte 4600</p>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon-wrapper">
                          <div className="contact-icon email"></div>
                        </div>
                        <div className="contact-details">
                          <h4 className="contact-item-title">Email</h4>
                          <p className="contact-item-text">glenpabico19@gmail.com</p>
                          <p className="contact-item-text">glenpabico20@gmail.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="contact-hours">
                      <h4 className="hours-title">Response Time</h4>
                      <p className="hours-text">Typically within 24 hours</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Contact Form */}
              <Col md={7}>
                <Card className="contact-form-modern">
                  <Card.Body className="p-4">
                    <div className="form-header">
                      <h3 className="form-title">Send a Message</h3>
                      <p className="form-description">Fill out the form below and I'll get back to you soon</p>
                    </div>

                    {isSubmitted && (
                      <Alert variant="success" className="modern-alert success">
                        <strong>✅ Message Sent Successfully!</strong> I'll get back to you within 24 hours.
                      </Alert>
                    )}

                    {errors.submit && (
                      <Alert variant="danger" className="modern-alert error">
                        <strong>Error:</strong> {errors.submit}
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit} className="modern-form">
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Group className="form-group-modern">
                            <Form.Label className="form-label-modern">
                              First Name <span className="required">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              placeholder="Your first name"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              onBlur={(e) => {
                                const error = validateField('firstName', e.target.value);
                                setErrors(prev => ({ ...prev, firstName: error }));
                              }}
                              isInvalid={!!errors.firstName}
                              className="form-input-modern"
                            />
                            <Form.Control.Feedback type="invalid" className="form-error-modern">
                              {errors.firstName}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="form-group-modern">
                            <Form.Label className="form-label-modern">
                              Last Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                              placeholder="Your last name"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="form-input-modern"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="g-3">
                        <Col md={6}>
                         <Form.Group className="form-group-modern">
  <Form.Label className="form-label-modern">
    Mobile Number <span className="required">*</span>
  </Form.Label>
  <Form.Control
    type="tel"
    name="mobileNo"
    placeholder="09123456789"
    value={formData.mobileNo}
    onChange={(e) => {
      // Remove all non-numeric characters
      const numbersOnly = e.target.value.replace(/\D/g, '');
      
      // Limit to 11 digits
      if (numbersOnly.length <= 11) {
        setFormData(prev => ({
          ...prev,
          mobileNo: numbersOnly
        }));
      }
      
      // Clear error when user types
      if (errors.mobileNo) {
        setErrors(prev => ({
          ...prev,
          mobileNo: ''
        }));
      }
    }}
    onBlur={(e) => {
      const error = validateField('mobileNo', e.target.value);
      setErrors(prev => ({ ...prev, mobileNo: error }));
    }}
    isInvalid={!!errors.mobileNo}
    className="form-input-modern"
    onKeyPress={(e) => {
      // Prevent typing of non-numeric characters
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    }}
  />
  <Form.Control.Feedback type="invalid" className="form-error-modern">
    {errors.mobileNo}
  </Form.Control.Feedback>
</Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="form-group-modern">
                            <Form.Label className="form-label-modern">
                              Email Address <span className="required">*</span>
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              onBlur={(e) => {
                                const error = validateField('email', e.target.value);
                                setErrors(prev => ({ ...prev, email: error }));
                              }}
                              isInvalid={!!errors.email}
                              className="form-input-modern"
                            />
                            <Form.Control.Feedback type="invalid" className="form-error-modern">
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="form-group-modern">
                        <Form.Label className="form-label-modern">
                          Your Message
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          placeholder="Tell me about your project, ideas, or questions..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="form-input-modern form-textarea-modern"
                        />
                      </Form.Group>

                      <Form.Group className="form-group-modern">
                        <Form.Label className="form-label-modern">
                          Spam Protection <span className="required">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="spamCheck"
                          placeholder="Type 'webdesign' to continue"
                          value={formData.spamCheck}
                          onChange={handleInputChange}
                          onBlur={(e) => {
                            const error = validateField('spamCheck', e.target.value);
                            setErrors(prev => ({ ...prev, spamCheck: error }));
                          }}
                          isInvalid={!!errors.spamCheck}
                          className="form-input-modern"
                        />
                        <Form.Control.Feedback type="invalid" className="form-error-modern">
                              {errors.spamCheck}
                            </Form.Control.Feedback>
                        <Form.Text className="form-help-modern">
                          Type "webdesign" to verify you're human
                        </Form.Text>
                      </Form.Group>

                      <div className="form-actions">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="submit-btn-modern"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Sending Message...
                            </>
                          ) : (
                            'Send Message'
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