import React from 'react'
import styled from 'styled-components'
import Banner from './components/Banner'
import Header from './components/Header'
import Slider from './components/Slider'

const Home = () => {

  React.useEffect(()=>{
    document.title = "Turo Clone"
  }, [])

  return (
    <Container>
      <Header />
      <Banner />
      <div className="heading">
        <p>Find your drive</p>
        <h2>Explore the world's largest car sharing marketplace</h2>
      </div>
      <Slider />
      <div className="space"></div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  & .heading{
    font-family: Calibri, sans-serif;
    text-align: center;
    & p{
      color: #000;
      margin: 0;
      padding: 0;
      margin-top: 10px;
      font-size: 5.5rem;
    }
    & h2{
      color: #000;
      font-weight: 700;
      font-size: 2rem;
    }
  }
  & .space{
    height: 50vh;

  }
`