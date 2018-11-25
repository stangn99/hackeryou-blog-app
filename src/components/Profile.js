import React from 'react';
import axios from 'axios';

class Profile extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    this.getUser();
  }
  getUser = async () => {
    const res = await axios.get(`/users/${this.props.match.params.userId}`)
    console.log(res)
    this.setState({ user: res.data.data[0]})
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        {this.props.match.params.userId}

        {JSON.stringify(this.state.user, null, 3)}
      </div>
    )
  }
}

export default Profile;