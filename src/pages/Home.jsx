import { Link } from "react-router-dom"
import { Collapse } from 'antd'
import styled from 'styled-components'
import { useEffect } from "react"

const Home = () => {

    const { Panel } = Collapse

    useEffect(()=>{
        document.title = "SMIT React Assigments"
    })

    return (
        <Container>
            <div className="wrapper">
                <Collapse accordion={true} className="accordion">
                    <Panel header="Assignment 1" key="1">
                        <div className="taskInfo">
                            <div className="taskDesc">
                                <h2>Assignment 1</h2>
                                <ul>
                                    <li>what is React</li>
                                    <li>Spa vs Mpa</li>
                                    <li>Angular vs React</li>
                                    <li>library vs Framework</li>
                                    <li>Dom vs Virtual dom</li>
                                    <li>Oneway Data Binding vs Two way</li>
                                </ul>
                            </div>
                            <a target='blank' href="https://docs.google.com/document/d/1JMKZ6MGC3bYGv05SRWVs0993fw7dvECzr4DS68jssgap8/edit?usp=share_link">
                                <div className="taskBtn">View Submission</div>
                            </a>
                        </div>
                    </Panel>
                    <Panel header="Assignment 2" key="2">
                        <div className="taskInfo">
                            <div className="taskDesc">
                                <h2>Assignment 2</h2>
                                <ul>
                                    <li>Render Variables in React Component</li>
                                    <li>Difference b/w Direct Import and Destructered Imports</li>
                                    <li>Fetch API and Render in React Component</li>
                                </ul>
                            </div>
                            <Link to={'/assignment/two'}>
                                <div className="taskBtn">View Submission</div>
                            </Link>
                        </div>
                    </Panel>
                    <Panel header="Assignment 3" key="3">
                        <div className="taskInfo">
                            <div className="taskDesc">
                                <h2>Assignment 3</h2>
                                <ul>
                                    <li>OLX Clone</li>
                                </ul>
                            </div>
                            <Link to={'/assignment/olx'}>
                                <div className="taskBtn">View Submission</div>
                            </Link>
                        </div>
                    </Panel>
                    <Panel header="Assignment 4" key="4">
                        <div className="taskInfo">
                            <div className="taskDesc">
                                <h2>Assignment 4</h2>
                                <ul>
                                    <li>Turo Clone</li>
                                </ul>
                            </div>
                            <Link to={'/assignment/turo'}>
                                <div className="taskBtn">View Submission</div>
                            </Link>
                        </div>
                    </Panel>
                </Collapse>
            </div>
        </Container>
    )
}

export default Home

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #7cc6fe;
    padding: 0;
    margin: 0;
    & .wrapper{
        width: 650px;
        min-height: 250px;
        height: min-content;
        padding: 30px 20px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        & .accordion{
            border-radius: 5px;
            box-shadow: 10px 10px 55px 0px rgb(0 0 0 / 50%);
            width: 100%;
            height: 100%;
            & .taskInfo{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 15px;
                & .taskDesc{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 65%;
                    & li{
                        list-style-position: outside;
                        margin-block: 3px;
                        list-style: initial;
                    }
                }
                & .taskBtn{
                    background-color: #252d4a;
                    color: #fff;
                    padding: 10px;
                    border-radius: 3px;
                }
            }
        }
    }
`