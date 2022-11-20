import React from 'react'
import styled from 'styled-components'
import { ReactComponent as OlxLogo} from '../../../assets/olx.svg'
import { ReactComponent as OlxBtn} from '../../../assets/olxBtn.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronDown, BsPlusLg } from 'react-icons/bs'

const Header = () => {
  return (
    <Container>
      <div className="wrapper">
        <span>
          <OlxLogo className="logo" />
        </span>
        <div className="searchBars">
          <span className='countrySearch inputField'>
            <p className="searchIcon"><AiOutlineSearch /></p>
            <input type="text" placeholder='Country Dropdown' />
            <p className="downIcon"><BsChevronDown /></p>
          </span>
          <span className='itemSearch inputField'>
            <input type="text" placeholder='Find Cars, Mobiles and more' />
            <p className="searchIcon"><AiOutlineSearch /></p>
          </span>
        </div>
        <div className="buttons">
          <h3>Login</h3>
          <div title="Sell" className="sellBtn">
            <span><OlxBtn /></span>
            <div className='innerbtnText'>
              <span className='plusIcon'><BsPlusLg /></span>
              <p>Sell</p>
            </div>
          </div>
        </div>
      </div>
      <div className="categoryBar">
        <div>ALL CATEGORIES <span><BsChevronDown /></span></div>
        <ul className='menuList'>
          <li>Mobile Phones</li>
          <li>Cars</li>
          <li>Motorcycles</li>
          <li>Houses</li>
          <li>TV-Video-Audio</li>
          <li>Tablets</li>
          <li>Land & Plots</li>
        </ul>
      </div>
    </Container>
    
  )
}

export default Header

const Container = styled.div`
  /* height: 10vh;
  background-color: #F7F8F8;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8rem;
  flex: 10; */
  & .wrapper{
    height: 10vh;
    padding: 0 8rem;
    background-color: #F7F8F8;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 10;
  }
  & .logo{
    --logoSize: 55px;
    height: var(--logoSize);
    width: var(--logoSize);
    margin-right: 3rem;
    flex: 1;
  }
  & .searchBars{
    margin-right: 2rem;
    flex: 7.5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .inputField{
    display: flex;
    align-items: center;
    border: 2px solid #002f34;
    border-radius: 4px;
    height: 48px;
    margin: 0 5px;
    max-height: 100%;
    background-color: #fff;
    width: 40%;
    & .searchIcon{
      font-size: 20px;
      padding-left: 10px;
      margin-top: 20px;
      color: black;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .downIcon{
      font-size: 15px;
      padding-right: 10px;
      margin-top: 15px;
      color: black;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    } 
    & .searchIcon:last-child{
      padding: 0 15px;
      background-color: #002F34;
      color: #fff;
      cursor: pointer;
    }
  }
  & .inputField:focus-within{
    border-color: #23E5DB;
    border-width: 1px;
  }
  & .inputField:last-child{
    width: 100%;
  }
  & input{
    border: none;
    background-color: inherit;
    padding: 5px 10px;
    height: 100%;
    width: 100%;
  }
  & .buttons{
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3{
      padding-top: 2px;
      font-weight: 700;
      border-bottom: 2px solid black;
      cursor: pointer;
    }
    & h3:hover{
      border-color: #F7F8F8;
    }
    & .sellBtn{
      cursor: pointer;
      position: relative;
      margin-left: 10px;
    }
    & .innerbtnText{
      display: flex;
      align-items: center;
      position: absolute;
      top: 1px;
      left: 26px;
      font-size: 17px;
      & .plusIcon{
        height: 100%;
      }
      & p{
        padding-top: 10px;
        margin-left: 5px;
      }
    }
  }
  & .categoryBar{
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
    min-height: 5vh;
    display: flex;
    align-items: center;
    padding: 0 8rem;
    font-family: 'Roboto', sans-serif;
    overflow-x: auto;
    & div{
      color: #273534;
      font-size: 15px;
      font-weight: 600;
      display: flex;
      align-items: center;
      & span{
        margin-left: 10px;
        font-size: 17px;
      }
    }
    & .menuList{
      display: flex;
      align-items: center;
      margin-top: 15px;
      font-size: 15px;
      font-weight: 500;
      margin-left: 15px;
      & li{
        cursor: pointer;
        margin: 0 10px;
        width: max-content;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .wrapper, .categoryBar{
      padding: 5px;
    }
  }
`