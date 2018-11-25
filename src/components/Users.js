import React from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  state = {
    users: []
  }
  async componentDidMount() {
    try {
      // Get users from API (GET /users)
      const res = await axios.get('/users')
      // Set the users in state
      this.setState({users: res.data.data})
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user._id}>
                <Link to={`/users/${user._id}`}>{user.name}</Link>
              </li>
            )
          })}
        </ul>
        {/* <pre>
          {JSON.stringify(this.state.users, null, 3)}
        </pre> */}
      </div>
    )
  }
}

export default Users;