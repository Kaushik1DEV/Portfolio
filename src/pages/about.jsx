import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pic from '../assets/img/profile/profile.webp';

import '../pages/about.css';
const about= ()=>{

return(

<>
<div id="about">
    <div className="about">
    <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
    <Container>
        <Row className="pt-3 pb-5 align-items-center">
          <Col xs={12} md={6}>
          <Row className="justify-content-center mb-2 mr-2 ">
          <Image className="profile justify-content-end" src={Pic} alt="profilepic" roundedCircle />
             </Row> 
          </Col>
          <Col xs={12} md={6}>
          <Row className=" align-items-start p-2 my-details rounded">
         
          Hi there! I am <strong>&nbsp;Kaushik Pandey</strong>
                <br />A passionate programmer and a Web Developer, born and brought up in India. I am a  Web Developer with React.js, Redux, Express.js, and MongoDB as my tech stack.
                <br />
                I also have acquired a solid base in Data Structure and Algorithm.I have 4* at Hacker Rank Coding Platform.<br/>
                In 2020, I successfully completed my Engineering with specialization in 'Computer Science and Engineering'.
                <br />
                Working with the projects, my goal is always driven towards achieving amazing experience with the best level of quality and style to them.
                <br />
               
               I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                
              </Row>
            </Col>
         </Row>   
     </Container>    
</div>    
</div>
</>


)




}

export default about;