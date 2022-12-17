import { useEffect, useState } from 'react'
import { Button, Form, Input, Table, Modal, Checkbox } from 'antd'
import { auth, db } from '../firebase'
import { collection, addDoc, query, getDocs, Timestamp } from 'firebase/firestore'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import styled from 'styled-components'

const Portfolio = () => {

    const [projects, setProjects] = useState([])

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [technology, setTechnology] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [codeUrl, setCodeUrl] = useState("")
    const [liveUrl, setLiveUrl] = useState("")
    const [featured, setFeatured] = useState(false)

    const [showProjects, setProjectsVisibility] = useState(false)

    const [user, setUser] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        document.title = "Portfolio Dashboard"
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
                if(showProjects){
                    const fetchProjects = async () => {
                        let arr = []
                        const q = query(collection(db, "projects"))
                        const querySnapshot = await getDocs(q)
                        querySnapshot.forEach(doc => {
                            arr.push(doc.data())
                        })
                        arr = arr.sort((a,b)=>b.date.seconds-a.date.seconds)
                        setProjects(arr)
                    }
                    fetchProjects()
                }
            }
        })
        return () => unsub()
    }, [showProjects])

    const handleLogin = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password)
          setUser(true)
        } catch (error) {}
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Technology',
            dataIndex: 'technology',
            key: 'technology',
        },
        {
            title: 'Code',
            dataIndex: 'codeUrl',
            key: 'codeUrl',
        },
        {
            title: 'Live',
            dataIndex: 'liveUrl',
            key: 'liveUrl',
        },
        // {
        //     title: 'Actions',
        //     dataIndex: 'actions',
        //     key: 'actions',
        // },
    ]

    const handleSubmit = async () => {
        await addDoc(collection(db, "projects"), { name, desc, technology, imgUrl, codeUrl, liveUrl, featured, date: Timestamp.now() })
        setName("")
        setDesc("")
        setTechnology("")
        setImgUrl("")
        setCodeUrl("")
        setLiveUrl("")
        setFeatured(false)
    }

    if (!user) {
        return (
            <Modal
                title="Login to Continue"
                open={true}
                footer={false}
                closable={false}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Email is Required!' }]}
                    >
                        <Input value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Password is Required!' }]}
                    >
                        <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 18, span: 16 }}>
                        <Button onClick={handleLogin} type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
    else {
        return (
            <Container>
                <h1>Portfolio Projects Dashboard</h1>
                <main style={!showProjects ? { height: '100%' } : { height: '0', overflow: 'hidden' } }>
                    <Form size='default' layout='vertical'>
                        <Form.Item label="Project Name">
                            <Input value={name} onChange={e => setName(e.target.value)} placeholder='Enter Project Name' size='default' />
                        </Form.Item>
                        <Form.Item label="Project Description">
                            <Input value={desc} onChange={e => setDesc(e.target.value)} placeholder='Enter Project Description' size='default' />
                        </Form.Item>
                        <Form.Item label="Technology Used (Spearate by Comma)">
                            <Input value={technology} onChange={e => setTechnology(e.target.value)} placeholder='Enter Project Technology' size='default' />
                        </Form.Item>
                        <Form.Item label="Image URL">
                            <Input value={imgUrl} onChange={e => setImgUrl(e.target.value)} placeholder='Enter Image URL' size='default' />
                        </Form.Item>
                        <Form.Item label="Github Repository">
                            <Input value={codeUrl} onChange={e => setCodeUrl(e.target.value)} placeholder='Enter Project Github Repo Link' size='default' />
                        </Form.Item>
                        <Form.Item label="Live URL">
                            <Input value={liveUrl} onChange={e => setLiveUrl(e.target.value)} placeholder='Enter Project Live Site Link' size='default' />
                        </Form.Item>
                        <Checkbox style={{marginBottom: '10px'}} onChange={(e) => setFeatured(e.target.checked)}>Featured</Checkbox>
                        <Form.Item>
                            <Button onClick={()=>handleSubmit()} type="primary" size='large'>Add Project</Button>
                        </Form.Item>
                    </Form>
                </main>
                <Button primary="true" size='large' onClick={()=> setProjectsVisibility(current => !current)}>{!showProjects ?'Show Projects' : 'Hide Projects'}</Button>
                <main style={showProjects ? { height: '100%' } : { height: '0', overflow: 'hidden' }}>
                    <div className="table">
                        <h2>All Projects</h2>
                        <Table dataSource={projects} columns={columns} />
                    </div>
                </main>
            </Container>
        )
    }

}

export default Portfolio

const Container = styled.div`
    padding: 1rem 7rem 0;
    & main{
        transition: all 0.5s;
    }
    & h1{
        margin-bottom: 15px;
        padding: 0;
        text-align: center;
        font-weight: 600;
    }
    & .form{
        width: 100%;
        margin: 0 auto;
    }
    & .table{
        width: 80%;
        margin: 3rem auto 0;
        & h2{
            font-weight: 600;
        }
    }
`