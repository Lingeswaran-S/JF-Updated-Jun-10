import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div class="ml-1">
        <Link to="/jobs">
          <button class="btn btn-success mt-3 shadow-lg p-3  ">
            <strong class="text-white">Companies</strong>
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
