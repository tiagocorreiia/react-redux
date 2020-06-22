import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../../state'

import './styles.css'

function UsersContainer() {
  const userData = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div className="container">
      <h2>Users List</h2>
      <ul>
        {userData.users.map((user) => (
          <li key={user.id}>
            <p>
              <b>Nome:</b> {user.name}{' '}
            </p>
            <span>
              <b>Website:</b> {user.website}{' '}
            </span>
            <button>More Info</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersContainer
