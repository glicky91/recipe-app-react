import React from 'react'
import { Col, Row } from 'reactstrap'
import FoodList from './FoodList'
// import ImageCard from './ImageCard'


export default function AboutPage() {
  return (
    <>
      <Row>
        <Col>
          <h1 className='headerq text-center'>About Page</h1>
          <p>Hi there 👋. My name is Hanna and this is my first React App. I hope you enjoy storing
            your favorite recipes in here! Below are some images of what your creations could look like!
          </p>
        </Col>
      </Row>
      <Row>
        <FoodList />
        {/* <ImageCard/> */}
      </Row>
    </>
  )
}
