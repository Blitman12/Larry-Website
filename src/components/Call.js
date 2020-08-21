import React from 'react';

export default function Call2 (props) {
 return (
      <div className="call">
    <div className="call-box-top">
    <div className="call-phone">
        <strong>Name: </strong>
        <a style={{color: '#1C3ED3'}}>{props.name}</a>
      </div>
      <div className="call-phone">
        <strong>Phone: </strong>
        <a href={`tel:${props.phone}`}>
        {props.phone}
        </a>
      </div>
      <div className="call-email">
        <strong>Email: </strong>
        <a href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <a href="/contact" className="button">
          Contact
        </a>
      </div>
    )}
  </div>
 )};
