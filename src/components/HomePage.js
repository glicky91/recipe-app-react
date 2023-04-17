import React from 'react'
import { Col, Row } from 'reactstrap'
import SearchBar from './SearchBar'
import RecipeList from './RecipeList'

export default function HomePage() {

  return (
    <>
      <Row className='g-3'>
        <Col className='col-10'>
          <h2 className='headerq'>My Fav Recipes!</h2>
          <p><em>Powered by Redux</em></p>
        </Col>
        <Col className='col-2 ms-auto'>
          <SearchBar placeholder="Search.." />
        </Col>
        <RecipeList />
      </Row>

    </>
  )
}
