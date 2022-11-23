import React from 'react'
import styled from 'styled-components'
import turoBanner from '../../../assets/turoBanner.jpg'
import { BiSearchAlt } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'

const Banner = () => {
  return (
    <Container style={{backgroundImage: `url('${turoBanner}/')`}}>
      <div className="searchBox">
        <div className="where">
          <p>Where</p>
          <input type="text" placeholder='City, Airport, Address or Hotel' />
        </div>
        <div className="from">
          <p>From</p>
          <div className='picker'>
            <div>11/22/2022 <span><BsChevronDown /></span></div>
            <div>10:30 PM <span><BsChevronDown /></span></div>
          </div>
        </div>
        <div className="until">
          <p>Until</p>
          <div className='picker'>
            <div>11/22/2022 <span><BsChevronDown /></span></div>
            <div>10:30 PM <span><BsChevronDown /></span></div>
          </div>
        </div>
        <div className="searchIcon"><span><BiSearchAlt /></span></div>
      </div>
    </Container>
  )
}

export default Banner

const Container = styled.div`
  height: 400px;
  background-color: teal;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  & .searchBox{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    height: 50px;
    margin: 0 auto;
    border-radius: 100px;
    background-color: #fff;
    overflow: hidden;
    flex: 4;
    & .where{
      flex: 1.5;
      position: relative;
      min-width: max-content;
      & p{
        top: -3px;
        left: 20px;
        position: absolute;
        font-size: 13px;
        font-weight: 500;
      }
      & input{
        margin-top: 15px;
        margin-left: 20px;
        border: none;
        width: 90%;
        font-size: 15px;
      }
    }
    & .from, & .until{
      border-left: 1px solid #c7c7c7;
      padding-left: 10px;
      padding-top: 13px;
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
      height: 100%;
      & p{
        top: 1px;
        left: 10px;
        position: absolute;
        font-size: 13px;
        font-weight: 500;
      }
      .picker{
        display: flex;
        width: max-content;
        & div{
          font-size: 16px;
          display: flex;
          & span{
            display: flex;
            align-items: center;
            margin-left: 2px;
          }
        }
        & div:first-child{
          margin-right: 10px;
        }
      }
    }
    & .searchIcon{
      flex: 0.5;
      display: flex;
      justify-content: flex-end;
      margin-right: 10px;
      & span{
        cursor: pointer;
        display: flex;
        background-color: #593CFB;
        border-radius: 50%;
        padding: 7px;
        font-size: 25px;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 1100px){
    .searchBox{
      width: 90%;
    }
  }
  @media screen and (max-width: 725px){
    .searchBox{
      width: 100%;
    }
  }
`