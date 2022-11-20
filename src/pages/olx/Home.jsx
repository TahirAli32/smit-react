import { useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import OlxBanner from '../../assets/olxBanner.jpg'
import Card from './components/Card'

const Home = () => {

    useEffect(()=>{
        document.title = "Olx Clone"
    }, [])


    const cardData = [
      {
        cardTitle: 'Name of Card 1',
        price: '5000',
        address: 'My Address, Karachi',
        lastUpdated: '1 Week ago',
        imgUrl: 'https://images.olx.com.pk/thumbnails/304892992-240x180.webp',
        featured: false,
        heart: false
      },
      {
        cardTitle: 'Name of Card 2',
        price: '1500',
        address: 'My Address, Lahore',
        lastUpdated: '2 Days ago',
        imgUrl: 'https://images.olx.com.pk/thumbnails/305295096-240x180.webp',
        featured: true,
        heart: true
      },
      {
        cardTitle: 'Name of Card 3',
        price: '500',
        address: 'My Address, Multan',
        lastUpdated: '4 Days ago',
        imgUrl: 'https://images.olx.com.pk/thumbnails/305295103-240x180.webp',
        featured: false,
        heart: true
      },
      {
        cardTitle: 'Name of Card 4',
        price: '320',
        address: 'My Address, Dubai',
        lastUpdated: '2 Hours ago',
        imgUrl: 'https://images.olx.com.pk/thumbnails/260980911-240x180.webp',
        featured: true,
        heart: false
      },
      {
        cardTitle: 'Name of Card 5',
        price: '1010',
        address: 'My Address, Sharjah',
        lastUpdated: '5 Weeks ago',
        imgUrl: 'https://images.olx.com.pk/thumbnails/260980911-240x180.webp',
        featured: false,
        heart: true
      },
      {
        cardTitle: 'Name of Card 1',
        price: '5000',
        address: 'My Address, Karachi',
        lastUpdated: '1 Week ago',
        imgUrl: 'https://images.olx.com.pk/thumbnails/304892992-240x180.webp',
        featured: false,
        heart: false
      },
      {
        cardTitle: 'Name of Card 2',
        price: '1500',
        address: 'My Address, Lahore',
        lastUpdated: '2 Days ago',
        imgUrl: 'https://images.olx.com.pk/thumbnails/305295096-240x180.webp',
        featured: true,
        heart: true
      },
      {
        cardTitle: 'Name of Card 3',
        price: '500',
        address: 'My Address, Multan',
        lastUpdated: '4 Hours ago',
        imgUrl: 'https://images.olx.com.pk/thumbnails/305295103-240x180.webp',
        featured: false,
        heart: true
      },
    ]

  return (
    <Container>
      <Header />
      <div className="banner">
        <img src={OlxBanner} height="100%" width="100%" alt="banner" />
      </div>
      <div className="cards">
        {cardData.map((e,i)=>(
          <Card 
            key={i}
            cardTitle={e.cardTitle}
            price={e.price}
            address={e.address}
            lastUpdated={e.lastUpdated}
            imgUrl={e.imgUrl}
            featured={e.featured}
            heart={e.heart}
          />
        ))}
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  & .banner{
    padding: 0 9rem;
    margin-top: 1.5rem;
  }
  & .cards{
    padding: 0 9rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    .banner, .cards{
      padding: 15px 1rem;
    }
  }
`