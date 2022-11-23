import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import styled from 'styled-components'

const Slider = () => {

    let sliderData = [ '/assets/cars/bmw.jpg', '/assets/cars/ford.jpg', '/assets/cars/jeep.jpg', '/assets/cars/lambo.jpg', '/assets/cars/mb.jpg', '/assets/cars/nissan.jpg', '/assets/cars/porsche.jpg', '/assets/cars/subaru.jpg', '/assets/cars/tesla.jpg', '/assets/cars/toyota.jpg', ]
    const [current, setCurrent] = useState(0)

    let length = sliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const moveDots = (index) => {
        setCurrent(index)
    }

  return (
    <Section className='main'>
        <div className='slider'>
            <div className='leftArrow arrow'>
                <BsFillArrowLeftCircleFill onClick={() => prevSlide()} />
            </div>
            <div className='rightArrow arrow'>
                <BsFillArrowRightCircleFill onClick={() => nextSlide()} />
            </div>
            <img src={sliderData[current]} width="190px" height="154px" style={{borderRadius: '5px'}} alt="Slider Pic" />
            <div className='dots'>
                {Array.from({length: length}).map((item,index) => (
                    <div key={index} onClick={() => moveDots(index)} className={current === index ? 'dot active' : 'dot'}></div>
                ))}
            </div>
        </div>
    </Section>
  )
}

export default Slider

const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    .slider{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;
        .arrow{
            position: absolute;
            top: 50%;
            z-index: 100;
            user-select: none;
            svg{
                cursor: pointer;
                font-size: 60px;
                color: #143a51;
                :hover{
                    color: #146597;
                }
            }
            @media screen and (max-width: 1240px){
                top: 100%;
                svg{
                    font-size: 45px;
                }
            }
        }
        .rightArrow{
            right: 10rem;
            @media screen and (max-width: 1240px){
                right: 40%;
            }
        }
        .leftArrow{
            left: 10rem;
            @media screen and (max-width: 1240px){
                left: 40%;
            }
        }
        .slide{
            opacity: 0;
            transition: opacity ease-in-out .4s;
        }
        .active{
            opacity: 1;
        }
        @media screen and (max-width: 1240px){
            margin-bottom: 4rem;
        }
    }
    .dots{
        display: flex;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        .dot{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 3px solid #f1f1f1;
            margin: 0 5px;
            cursor: pointer;
            background: #f1f1f1;
        }
        .active{
            background: rgb(32, 32, 32);
        }
    }
`