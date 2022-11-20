import styled from 'styled-components'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'


const Card = ({cardTitle, price, address, lastUpdated, imgUrl, featured, heart}) => {

  return (
    <Container>
      <div className="card">
        <div className="cardImage">
          <img src={imgUrl} alt="card" width="100%" height="100%" />
          {featured && <span className='featuredTag'>Featured</span> }
        </div>
        <div className={featured ? 'cardInfo featured' : 'cardInfo'}>
          <div className="top">
            <div className="head">
              <p>{cardTitle}</p>
              <span className={heart ? 'heartIcon heartRed' : 'heartIcon'}>{ !heart ? <AiOutlineHeart /> : <BsFillHeartFill />}</span>
            </div>
            <div className="price">
              Rs. {price}
            </div>
          </div>
          <div className="bottom">
            <p>{address} • {lastUpdated}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Card

const Container = styled.div`
  & .card{
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 2;
    width: 275px;
    height: 300px;
    margin: 10px;
    overflow: hidden;
    user-select: none;
    outline: 0.1rem solid rgba(0,47,52,.2);
  }
  & .cardImage, .cardInfo{
    flex: 1;
    width: 100%;
    max-height: 150px;
  }
  .cardImage{
    position: relative;
  }
  .featuredTag{
    position: absolute;
    background-color: #FFCE32;
    width: max-content;
    height: max-content;
    font-size: 13px;
    padding: 5px;
    border-radius: 5px;
    bottom: 10px;
    left: 10px; 
    color: #000;
  }
  & .featured{
    position: relative;
  }
  & .featured:before{
    content: '';
    width: 7px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.4s;
    background-color: #FFCE32;
  }
  & .cardInfo{
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .top{
      display: flex;
      flex-direction: column;
      & .head{
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;
        & p{
          font-size: 18px;
          padding-top: 15px;
        }
        & .heartIcon{
          font-size: 25px;
          cursor: pointer;
        }
        & .heartRed{
          color: red;
        }
      }
    }
  }
`