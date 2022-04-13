import React, { useEffect } from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
const MailtoUI = require('../../node_modules/mailtoui/dist/mailtoui-min.js');


const Mailto = ({ email, title, ...props }) => {
  useEffect(()=> {
    MailtoUI.run();
  })
  console.log('ET:', email, title )
  return (
    <a href={`mailto:varsha3051@gmail.com?subject=InfoGesture Inquiry: ${title || ""}`}>
      {props.children}
      <BsFillEnvelopeFill size={24} />
    </a>
  );
};

export default Mailto;
