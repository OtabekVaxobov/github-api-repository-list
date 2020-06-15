import React from "react";
import { Link } from "react-router-dom";

const Repos = ({ repos, loading }) => {
  // console.log(repos);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <div className="row">
        {repos.map(repo => (
          <div key={repo.id} className="col-lg-4  mb-4">
            <div className="">
              <img
                title="my-img"
                width="150px"
                src={repo.owner.avatar_url}
                alt="my-img"
              />
              <p>
                <h3>Name:</h3>
                {repo.owner.login}
              </p>
              <p>
                <h4>repository name:</h4>
                {repo.name}
              </p>

              <p className="card-text">
                {" "}
                <h4>Information: </h4> {repo.description}
              </p>
              <Link
                to={{
                  pathname: `/more/${repo.id}`,
                  state: { repo }
                }}>
                <button className="btn-info">More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Repos;
