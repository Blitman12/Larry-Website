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
      <div className="row">
        <div className="contact-form-card col-md-5">
          <Call
            name="Larry Litman"
            phone="602 - 300 - 8519"
            email="Llitman@healthcaresystemsandservices.com"
          />
        </div>
        <div className="contact-form-card col-md-5">
          <Call
            className="contact-form-card"
            name="Tyler Litman"
            phone="602 - 391 - 9071"
            email="Tlitman@healthcaresystemsandservices.com"
          />
        </div>
      </div>

      <div className="row top-spacer-25">
        <div className="call col-8">
          <form className="email-form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label for="exampleInputEmail1">Email: </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Name: </label>
              <input
                type="test"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message: </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
