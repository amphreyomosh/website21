import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../Styles/Contact.css";

const Contact = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", message: "" });
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setNewComment((prevComment) => ({ ...prevComment, [name]: value }));
    }
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.message) {
      const commentWithTags = addTags(newComment.message);
      setComments([...comments, { ...newComment, message: commentWithTags }]);
      setNewComment({ name: "", message: "" });
    }
  };

  const addTags = (message) => {
    const tags = ["#Kumbatia", "#Africa", "#Peace", "#Festival"];
    let updatedMessage = message;
    tags.forEach((tag) => {
      if (message.toLowerCase().includes(tag.toLowerCase())) {
        updatedMessage = updatedMessage.replace(
          new RegExp(tag, "gi"),
          `<span class="hashtag">${tag}</span>`
        );
      }
    });
    return updatedMessage;
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // You can add subscription logic here
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  const renderComments = () => {
    return comments.map((comment, index) => (
      <div
        key={index}
        className="comment"
        dangerouslySetInnerHTML={{ __html: comment.message }}
      />
    ));
  };

  return (
    <Container className="contact-section">
      <Row className="Contact">
        <Card>
          <Col md={6}>
            <h2>Contact Information</h2>
            <p>Email: info@kumbatiapfestival.com</p>
            <p>Phone: +254706255611</p>
            {/* Additional contact information can be added */}
          </Col>
        </Card>
        <Card>
          <Col md={6}>
            <h2>Contact Form</h2>
            <Form className="form-style">
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={newComment.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Type your message"
                  value={newComment.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={handleSubmitComment}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Card>
      </Row>
      <Row>
        <Card>
          <Col md={6}>
            <h2>Live Comments</h2>
            <div className="comments">{renderComments()}</div>
          </Col>
        </Card>
      </Row>
      <Row>
        <Card>
          <Col md={6}>
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest news and announcements.</p>
            <Form className="subscribe-form" onSubmit={handleSubscribe}>
              <Form.Group controlId="formNewsletterEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Card>
      </Row>
    </Container>
  );
};

export default Contact;
