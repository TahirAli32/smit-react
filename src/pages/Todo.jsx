import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Form, Input, Table, Modal } from 'antd'
import { db } from '../firebase'
import { collection, addDoc, query, onSnapshot, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore'

const Todo = () => {

    const { TextArea } = Input

    const [todos, setTodos] = useState([])

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    useEffect(() => {
        document.title = "TODOs List"
        const unsub = onSnapshot(query(collection(db, "todos")), querySnapshot => {
            let index = 1
            let arr = []
            querySnapshot.forEach(doc => {
                arr.push({
                    sno: index,
                    title: doc.data().title,
                    desc: doc.data().desc,
                    actions: <CustomButton id={doc.id} oldValues={[doc.data().title, doc.data().desc]} />
                })
                index++
            })
            setTodos(arr)
        })
        return () => {
            unsub()
        }
    }, [])

    const addTodo = async () => {
        await addDoc(collection(db, "todos"), { title, desc })
        setTitle("")
        setDesc("")
    }

    const deleteAllTodo = async () => {
        const q = query(collection(db, "todos"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(async eachDoc => {
            await deleteDoc(doc(db, 'todos', eachDoc.id))
        })
    }

    const columns = [
        {
            title: 'S.No',
            dataIndex: 'sno',
            key: 'sno',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
        },
    ]

  return (
    <Container>
        <h1>TODOs List</h1>
        <Form layout='vertical' style={{width: '80%', margin: '0 auto'}}>
            <Form.Item label="Title">
                <Input value={title} onChange={e=> setTitle(e.target.value)} allowClear placeholder='Enter Title' size='large' />
            </Form.Item>
            <Form.Item label="Description">
                <TextArea
                    value={desc}
                    onChange={e=> setDesc(e.target.value)}
                    placeholder="Enter Description"
                    allowClear
                    showCount
                    autoSize={{
                        minRows: 3,
                        maxRows: 6,
                    }}
                />
            </Form.Item>
            <Form.Item>
                <Button disabled={title.match(/([^\s])/) && desc.match(/([^\s])/) ? false : true} style={{marginRight: '15px'}} type="primary" size='large' onClick={()=> addTodo()}>Add Todo</Button>
                <Button disabled={todos.length ? false : true} type="danger" size='large' onClick={()=> deleteAllTodo()}>Delete All Todo</Button>
            </Form.Item>
        </Form>
        <div className="table">
            <h2>Your TODOs</h2>
            <Table dataSource={todos} columns={columns} />
        </div>
    </Container>
  )
}

export default Todo

const Container = styled.div`
    height: 100vh;
    padding-top: 2rem;
    & h1{
        margin: 0;
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

const CustomButton = ({id, oldValues}) => {

    const { TextArea } = Input

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [newTitle, setNewTitle] = useState(oldValues[0])
    const [newDesc, setNewDesc] = useState(oldValues[1])

    const editTodo = async () => {
        const docRef = doc(db, 'todos', id)
        await updateDoc(docRef, {
            title: newTitle,
            desc: newDesc
        })
        setIsModalOpen(false)
    }

    const deleteTodo = async () => {
        const docRef = doc(db, 'todos', id)
        await deleteDoc(docRef)
    }

    return (
        <div>
            <Button style={{marginRight: '5px'}} type="primary" size='middle' onClick={()=> setIsModalOpen(true)}>Edit</Button>
            {/* <Button style={{marginRight: '5px'}} type="primary" size='middle' onClick={()=> console.log(newTitle, newDesc, oldValues[0], oldValues[1])}>Test</Button> */}
            <Button type="danger" size='middle' onClick={()=> deleteTodo()}>Delete</Button>
            <Modal 
                title="Edit Todo"
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <Button key="back" onClick={()=>setIsModalOpen(false)}>
                        Cancel
                    </Button>,
                    <Button disabled={newTitle.match(/([^\s])/) && newDesc.match(/([^\s])/) ? false : true} key="submit" type="primary" onClick={()=>editTodo()}>
                        Edit Now
                    </Button>
                ]}
            >
                <Form layout='vertical' style={{ width: '80%', margin: '0 auto' }}>
                    <Form.Item label="Title">
                        <Input value={newTitle} onChange={e=> setNewTitle(e.target.value)} allowClear placeholder='Enter Title' size='large' />
                    </Form.Item>
                    <Form.Item label="Description">
                        <TextArea
                            value={newDesc}
                            onChange={e=> setNewDesc(e.target.value)}
                            placeholder="Enter Description"
                            allowClear
                            showCount
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}