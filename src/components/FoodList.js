
import { Col } from 'reactstrap';
import AnimatedImageCard from './AnimatedImageCard';
// import { FOOD } from '../app/shared/FOOD';
import { selectAllFood } from './foodSlice';
import { useSelector } from 'react-redux';

export default function AboutPageList() {
    const food = useSelector(selectAllFood);
    return (
        food.map((f, idx) => {
            return (
                f && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedImageCard f={f} />
                    </Col>

                )
            );
        })
    )

};
