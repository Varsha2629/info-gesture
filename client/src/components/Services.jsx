import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Mailto from "./MailLink";

import "./Services.scss";
const Services = () => {
  const [service, setService] = useState([]);

  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/services`).then((response) => {
      setService(response.data);
    });
  }, []);

  const allServices = service.map((item) => {
    return (
      <>
        <Card className="s-card mx-3">
          <Card.Img variant="top mt-4" src={item.image_url} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
          <div className="p-3 h3">
            <Mailto email={item.email} title={item.title} />
          </div>
        </Card>
      </>
    );
  });

  return (
    <>    
      <div>
        <div className="text-center mb-4">
          <h1>Services</h1>
        </div>

        <Container className="mb-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-4">          
            <div className="col">
              <div className="service-card rounded">
                <img
                  src="images/education.jpg"
                  className="card-img-top"
                  alt="education"
                />
                <div className="card-body">
                  <h5 className="card-title">Education</h5>
                  <p className="card-text">
                    People for Education is a unique organization in Canada:
                    independent, non-partisan, and fuelled by a belief in the
                    power and promise of public education.
                  </p>
                </div>
              </div>
              <div className="service-link rounded">
                <a
                  className="service-link-title"
                  href="https://peopleforeducation.ca/"
                >
                  Education Services
                </a>
              </div>
            </div>
            <div className="col">
              <div className="service-card rounded">
                <img
                  src="images/resources.png"
                  className="card-img-top"
                  alt="government-resources"
                />
                <div className="card-body">
                  <h5 className="card-title">Government Resources</h5>
                  <p className="card-text">
                    At ServiceOntario you can get your driver's licence, plate
                    stickers, health cards, birth certificates, register a birth
                    and more.
                  </p>
                </div>
              </div>
              <div className="service-link rounded">
                <a
                  className="service-link-title"
                  href="https://www.ontario.ca/page/serviceontario"
                >
                  Services for ontario
                </a>
              </div>
            </div>
            <div className="col">
              <div className="service-card rounded">
                <img
                  src="images/jobs.jpg"
                  className="card-img-top"
                  alt="jobs"
                />
                <div className="card-body">
                  <h5 className="card-title">Jobs</h5>
                  <p className="card-text">
                    Find a job or contract, explore skills and training, and
                    find out about workplace standards and labour mobility.
                  </p>
                </div>
              </div>
              <div className="service-link rounded">
                <a
                  className="service-link-title"
                  href="https://www.canada.ca/en/services/jobs.html"
                >
                  Employment Services
                </a>
              </div>
            </div>
          </div>
        </Container>
        <Container className="border-bottom">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-4 mb-5">
            <div className="col">
              <div className="service-card">
                <img
                  src="images/chils-care.jpg"
                  className="card-img-top"
                  alt="food"
                />
                <div className="card-body">
                  <h5 className="card-title">Child Care</h5>
                  <p className="card-text">
                    Children shine brightest when they play and learn –
                    together. You can see up coming program for child here.
                  </p>
                </div>
              </div>
              <div className="service-link rounded">
                <a
                  className="service-link-title"
                  href="https://ymcagta.org/child-care"
                >
                  Child-care
                </a>
              </div>
            </div>

            <div className="col">
              <div className="service-card rounded">
                <img
                  src="images/fitness.jpg"
                  className="card-img-top"
                  alt="fitness"
                />
                <div className="card-body">
                  <h5 className="card-title">Fitness</h5>
                  <p className="card-text">
                    Community resource centres provide community members of all
                    ages with access to a wide variety of health and social
                    supports and services.
                  </p>
                </div>
              </div>
              <div className="service-link rounded">
                <a
                  className="service-link-title"
                  href="https://www.torontocentralhealthline.ca/listServices.aspx?id=10259&region=Toronto"
                >
                  Health Community Resource
                </a>
              </div>
            </div>

            <div className="col">
              <div className="service-card rounded">
                <img
                  src="images/social.jpg"
                  className="card-img-top"
                  alt="social"
                />
                <div className="card-body">
                  <h5 className="card-title">Social</h5>
                  <p className="card-text">
                    Community-based programs that facilitate the recovery of
                    individuals who live with mental illness living in Toronto
                    by providing opportunities for peer support, skills
                    development and leadership.
                  </p>
                </div>
              </div>
              <div className="service-link rounded">
                <a
                  className="service-link-title"
                  href="https://toronto.cmha.ca/programs-services/social-resource-centres/"
                >
                  Social Resource Centre
                </a>
              </div>
            </div>
          </div>
        </Container>

        <h3 className="service-list-title my-5">Services List</h3>
        <Container fluid className="service-list-container d-flex mt-5">
          <Row xs={1} md={3} className="g-4 py-5 justify-content-center">
            {allServices}
          </Row>
        </Container>

        
        <div className="contact-tag">
          <h3>Community Contact </h3>
          <p>
            <i class="fa fa-phone-square button-icon-left"></i> 512-842-1111
            <br></br>
            <i class="fa fa-envelope" aria-hidden="true"></i> info@community.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
