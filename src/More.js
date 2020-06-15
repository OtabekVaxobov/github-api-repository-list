import React from "react";

import { Link } from "react-router-dom";

const More = props => {
 
  const element = props.location.state.repo;
  console.log(props.location.state.repo);
  return (
    <div className="container">
      <div className="card">
        <img
          width="150px"
          src={element.owner.avatar_url}
          alt="logo"
          className="imageView__img img-responsive"
        />
        <p>
          <div>
            <h3> Repository name:</h3> {element.name}
          </div>
          <div>
            <h3> Owner name:</h3> {element.owner.login}
          </div>
          <div>
            <h3> Repository description:</h3> {element.description}
          </div>
        </p>
        <p>
          <a href={element.html_url}>{element.html_url}</a>
        </p>
        <Link to="/">
          <button className="btn-info">Back</button>
        </Link>
      </div>
    </div>
  );
};
export default More;
