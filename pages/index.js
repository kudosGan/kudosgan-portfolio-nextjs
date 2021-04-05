import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';


const roles  =["RPA Developer","ReactJs" ,"Python","Developer", "Tech Lover" , "Team-player", ]

class Index extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Kudas </h2>
                       </div>
                      <img className="image" src="/images/primage.jpeg"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the KudosGan website.
                    
                  </h1>
                </div>
                <div className="hero-welcome-bio">
                  <h1>
                     Discover ME !
                  </h1>
                </div>
                <Typed
                    loop
                    typeSpeed={70}
                    backSpeed={50}
                    strings={roles}
                    backDelay ={1000}
                    loopCount={0}
                    ShowCursor
                    className="self-typed"
                    coursorChar="|"
                     />
                                    
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}

export default Index;