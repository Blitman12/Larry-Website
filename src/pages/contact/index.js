import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call2 from '../../components/Call2';

const Contact = props => (
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
      <div className="col-md-5 pt-2">
        <Call2 name="Larry Litman" phone="602 - 300 - 8519" email="Llitman@healthcaresystemsandservices.com" button />
      </div>
        <div className="col-md-5 pt-2">
        <Call2 name="Tyler Litman" phone="602 - 391 - 9071" email="Tlitman@healthcaresystemsandservices.com" button />
      </div>
  </div>
  

  <div className="row">
        <div className="col-8">
          <h4 className="mt-4">Business Hours</h4>
          <table className="table table-sm opening-hours-table">
            <tbody>
              <tr>
                <td className="day font-weight-bold">Monday</td>
                <td className="opens">8:00am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Tuesday</td>
                <td className="opens">8:00am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Wednesday</td>
                <td className="opens">8:00am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Thursday</td>
                <td className="opens">8:00am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Friday</td>
                <td className="opens">8:00am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Saturday</td>
                <td className="opens">Changing</td>
                <td />
                <td className="closes" />
              </tr>
              <tr>
                <td className="day font-weight-bold">Sunday</td>
                <td className="opens">Changing</td>
                <td />
                <td className="closes" />
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
  </Layout>
);

export default Contact;
