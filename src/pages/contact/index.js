import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = () => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row mobile-reverse space-around">
        {/* Contact Form */}
        <div className="col-lg-5 col-sm-12 mobile-spacer-25">
          <div className="call fill-width">
            <form
              className="email-form"
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label for="exampleInputEmail1">Email: </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Name: </label>
                <input
                  type="test"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message: </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        {/* Contact cards */}
        <div className="col-lg-5 col-12">
          <div className="contact-form-card">
            <Call
              name="Larry Litman"
              phone="602 - 300 - 8519"
              email="Llitman@healthcaresystemsandservices.com"
            />
          </div>
          <div className="contact-form-card"  style={{marginTop: '100px'}}>
            <Call
              className="contact-form-card"
              name="Tyler Litman"
              phone="602 - 391 - 9071"
              email="Tlitman@healthcaresystemsandservices.com"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
