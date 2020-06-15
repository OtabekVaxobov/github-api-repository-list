import React, { useEffect, useState } from "react";
import axios from "axios";
import Repos from "./Repos";
import Pagination from "./Pagination";
import Fuse from "fuse.js";

const Fetcher = () => {
  const [repos, setRepos] = useState([]); // api.github repos list
  const [loading, setLoading] = useState(false); //Loading!...
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10); //pagination size
  const [query, updateQuery] = useState(""); //serch

  const fuse = new Fuse(repos, {
    keys: ["name", "description", "owner.login", "id"]
  });
  const results = fuse.search(query);

  const ReposResults = query ? results.map(repos => repos.item) : repos;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const res = await axios.get("https://api.github.com/repositories");
      setRepos(res.data);
      setLoading(false);
    };
    fetchRepos();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = ReposResults.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="">
      <div>
        <form className="search">
          <label className="search-text">Search</label>
          <input type="text" value={query} onChange={onSearch} />
        </form>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={ReposResults.length}
        paginate={paginate}
      />
      <Repos repos={currentPosts} loading={loading} />
    </div>
  );
};
export default Fetcher;
