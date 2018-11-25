import React from 'react';
import axios from 'axios';

class Posts extends React.Component {
  state = {
    posts: []
  }
  componentDidMount() {
    this.refresh();
  }

  refresh = async () => {
    // 1. Make a get request to '/posts'
    try {
      const res = await axios.get('/posts');
      this.setState({posts: res.data.data})
    } catch (err) {
      
    }
    // 2. if successful store the postin state
    // 3. if unsuccessful log out the error
  }
  render() {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {this.state.posts.map((post) => {
            console.log(post)
            return (
              <li key={post._id}>{post.title} - {post.user.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Posts