import React from 'react'
import { store } from './redux/store'
import { setGlobalState } from './redux/state'
import axios from 'axios'

const Page = async () => {
  const state = store.getState()
  let users = state.globalState?.users

  // component loads very first time
  console.log(users)

  if (!users?.length) {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    users = resp?.data || []
    store.dispatch(setGlobalState({ users }))
  }

  // after api call
  console.log(users)

  return (
    <div>
      <h1>Server Component</h1>
      <ul>
        {users?.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page
