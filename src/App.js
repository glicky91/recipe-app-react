import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'reactstrap'
import AboutPage from './components/AboutPage'
import AddRecipe from './components/AddRecipePage'
import HomePage from './components/HomePage'
import TopBar from './components/TopBar'
import './App.css'
import { selectAllRecipes } from './components/recipeListSlice'
import AddRecipePage from './components/AddRecipePage'


export default function App() {
  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='addrecipe' element={<AddRecipePage />} />
        </Routes>
      </Container>
    </>
  )
}
