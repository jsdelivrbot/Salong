import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        
        
        <li className="lista" key={post.id}>
       <Link to={`/posts/${post.id}`}>
        <div className="Hr">
       {post.pris} {post.title}</div>
        </Link>
        
</li>
        
      );
    });
  }

  render() {
    return (
      <div>

      
      <div className="Bar"> 
        <h2>Hår</h2></div>

        <div className="Bar"> 
        <h2>Filter</h2></div>
        

        <ul className="lista">
          {this.renderPosts()}
        </ul>
       </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
