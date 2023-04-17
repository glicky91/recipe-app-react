
import { useState,useEffect } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { useSpring, animated } from '@react-spring/web';

const AnimatedImageCard =({f})=> {
  const { name, image, comment} = f;
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1:0,
    transform: toggle ? 'scale(1,1)' :'scale(1,0)',
    config:{duration: 900}
  });

  useEffect(()=>{
    setToggle(true);
  },[])

  return (
    f &&(
      <animated.div style={animatedStyle}>
          <Card>
              <CardImg src={image} alt={name} />
              <CardBody>
                  <CardTitle>{name}</CardTitle>
                  <CardText>{comment}</CardText>
              </CardBody>
          </Card>
        </animated.div>
    )
  );
};

export default AnimatedImageCard;
//what do i do here..if i want the f.name to be an overlay.. it seems like i need to make these cards but if I do then they get HUGE... help!