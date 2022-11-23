import React from 'react'
import styled from 'styled-components'
import { ReactComponent as TuroLogo } from '../../../assets/turo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'

const Header = () => {
  return (
    <Container>
        <div className="topbar">
            Turo has launched in New York! Tap to explore cars.
        </div>
        <div className="navbar">
            <span className="logo">
                <TuroLogo />
            </span>
            <div className="buttons">
                <div className="hostbtn">Become a Host</div>
                <div className="hamburger">
                    <span><AiOutlineMenu /></span>
                    <span><BsPersonCircle /></span>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    flex-direction: column;
    & .topbar{
        text-decoration: underline;
        font-weight: 500;
        letter-spacing: .2px;
        text-align: center;
        padding: 15px;
        background-color: #F4F4F4;
    }
    & .navbar{
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    & .buttons{
        display: flex;
        align-items: center;
        & .hostbtn{
            transition: 0.5s all ease;
            padding: 0 10px;
            background-color: #FFFFFF;
            border: 1px solid #414143;
            color: #414143;
            margin-right: 15px;
            font-size: 13px;
            line-height: 25px;
            cursor: pointer;
            display: flex;
            align-items: center;
            font-weight: 500;
            height: 30px;
            :hover{
                background-color: #E7E7E8;
                border-color: #898989;
                color: #898989;
            }
        }
        & .hamburger{
            transition: 0.5s all ease;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
            width: 68px;
            border-radius: 8px;
            padding: 8px 5px 4px;
            margin-top: 2px;
            :hover{
                background-color: #F4F4F4;
            }
            & span{
                margin: 0 5px;
            }
        }
    }
`