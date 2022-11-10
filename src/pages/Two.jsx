import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Two = () => {

  React.useEffect(() => {
    document.title = "Assignment Two"
  })

  const fetchPosts = async () => {
    let arr = []
    for(let i=1;i<=10;i++){
      const post = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ i)
      arr.push(post.data)
    }
    alert('Check Console')
    console.log(arr)
  }

  const fetchUsers = async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')
    alert('Check Console')
    console.log(users.data)
  }

  const name = "Hello World"
  const obj = {name: "Hello World Object"}
  const data = ['We', 'are', 'United']
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
  const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]

  const code = `

  export default function AssignmnetTwo () {

    const fetchPosts = async () => {
      let arr = []
      for(let i=1;i<=10;i++){
        const post = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ i)
        arr.push(post.data)
      }
      alert('Check Console')
      console.log(arr)
    }

    const fetchUsers = async () => {
      const users = await axios.get('https://jsonplaceholder.typicode.com/users')
      alert('Check Console')
      console.log(users.data)
    }

    const name = "Hello World"
    const obj = {name: "Hello World Object"}
    const data = ['We', 'are', 'United']
    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
  
    return(
      <div>
        <div>
          <p>{name}</p>
          <p><b>Obj</b> --&gt; {obj.name}</p>
          <p><b>Data</b> --&gt; {\`${data[0]}, ${data[1]}, ${data[2]}\`}</p>
          <p><b>List</b> --&gt; {\`${list[0].name}, ${list[1].name}, ${list[2].name}\`}</p>
          <ul style={{ listStyle: 'decimal'}}><b>complex</b>: 
            <li style={{margin: '15px'}}>
              {\`${complex[0].company}, (${complex[0].jobs[0]}, ${complex[0].jobs[1]})\`}
            </li>
            <li style={{margin: '15px'}}>
              {\`${complex[1].company}, (${complex[1].jobs[0]}, ${complex[1].jobs[1]})\`}
            </li>
          </ul>
        </div>
        <hr />
        <div style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', width: '25%'}}>
          <button style={{ margin: '5px'}} onClick={fetchPosts}>Fetch 10 Post</button>
          <button style={{ margin: '5px'}} onClick={fetchUsers}>Fetch 10 User</button>
        </div>
      </div>
    )
  }
  `

  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ color: 'blue', textDecoration: 'underline' }}><Link to={'/'}>Return Home</Link></h2>
      <div>
        <p>{name}</p>
        <p><b>Obj</b> --&gt; {obj.name}</p>
        <p><b>Data</b> --&gt; {`${data[0]}, ${data[1]}, ${data[2]}`}</p>
        <p><b>List</b> --&gt; {`${list[0].name}, ${list[1].name}, ${list[2].name}`}</p>
        <ul style={{ listStyle: 'decimal'}}><b>complex</b>: 
          <li style={{margin: '15px'}}>
            {`${complex[0].company}, (${complex[0].jobs[0]}, ${complex[0].jobs[1]})`}
          </li>
          <li style={{margin: '15px'}}>
            {`${complex[1].company}, (${complex[1].jobs[0]}, ${complex[1].jobs[1]})`}
          </li>
        </ul>
      </div>
      <hr />
      <div style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', width: '25%'}}>
        <button style={{ margin: '5px'}} onClick={fetchPosts}>Fetch 10 Post</button>
        <button style={{ margin: '5px'}} onClick={fetchUsers}>Fetch 10 User</button>
      </div>
      <div style={{ margin: '10px'}}>
        <h2>React Component Code: </h2>
        <pre style={{color: 'brown'}}>
          {code}
        </pre>
      </div>
    </div>
  )
}

export default Two