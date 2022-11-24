import React from 'react'
import styled from 'styled-components'
import Banner from './components/Banner'
import Header from './components/Header'
import Slider from './components/Slider'
import { ReactComponent as TuroCarBook } from '../../assets/turoCarBook.svg'
import { carData, citiesData } from './data'

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
      <Slider hover={false} carouselTitle={'Browse by Make'} sliderData={carData} />
      <div className='carBook'>
        <div className="svgImg">
          <TuroCarBook />
          <div className='svgText'>
            <h2>Book a car {'>'}</h2>
            <p>Down the street or across the country, find the perfect vehicle for your next adventure.</p>
          </div>
          <div className='svgText'>
            <h2>Become a host {'>'}</h2>
            <p>Accelerate your entrepreneurship and start building a small car sharing business on Turo.</p>
          </div>
        </div>
      </div>
      <Slider hover={true} carouselTitle={'Browse by Destination'} sliderData={citiesData} />
      <div className="footer">
        <ul>
          <li>© 2022 Turo Clone</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Sitemap</li>
        </ul>
      </div>
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
  & .carBook{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    & .svgImg{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      & svg{
        width: 90%;
      }
      & .svgText{
        position: absolute;
        text-align: center;
        top: 175px;
        left: 60px;
        & h2{
          color: #593CFB;
          font-weight: 700;
          font-size: 25px;
          width: 50%;
        }
        & p{
          width: 48%;
        }
        :last-child{
          top: initial;
          left: initial;
          bottom: 120px;
          right: -260px;
        }
      }
    }
  }
  & .footer{
    margin-top: 3rem;
    background-color: #F4F4F4;
    & ul{
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 600;
      & li{
        margin: 0 10px;
        cursor: pointer;
        :hover{
          color: #593CFB;
        }
      }
    }
  }
`