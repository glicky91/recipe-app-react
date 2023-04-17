import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
// import { Card, CardImg, CardImgOverlay, CardTitle, Container } from 'reactstrap';
import { FOOD } from '../app/shared/FOOD';

export default function ImageCard() {

  return (
    
    FOOD.map((f)=>{
        return (
            f && (
        
                // <img className='rounded me-3' src={f.image} alt={f.name} />
                // why does image work without f but not name?
            
                <Row>
                    
                    <Col>
                    <Card style={{ width: "18rem" }}>
                        <CardImg src={f.image} alt={f.name} />
                        <CardBody>
                            <CardImgOverlay><strong>{f.name}</strong></CardImgOverlay>
                            <CardText><i>{f.comment}</i></CardText>
                        </CardBody>
                    </Card>
                    </Col>
                    
                </Row>
          
                    
        
            )
        )
    })
  )
}


//what do i do here..if i want the f.name to be an overlay.. it seems like i need to make these cards but if I do then they get HUGE... help!