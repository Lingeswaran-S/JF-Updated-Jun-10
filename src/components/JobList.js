import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function JobList() {
  let [arrayList, setArrayList] = React.useState([]);
  function reloadPage() {
    window.location.reload();
  }
  useEffect(() => {
    (function readData() {
      axios
        .get("https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test")
        // https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test
        // "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users"
        .then((res) => setArrayList(res.data));
    })();
  });
  return (
    <React.Fragment>
      <div class="container border mt-1 rounded ">
        <Link to="/">
          <button class="btn btn-info mt-3 shadow-lg ">
            <strong class="text-white">Home</strong>
          </button>
        </Link>
        <button
          onClick={reloadPage}
          class="btn btn-danger mt-3 ml-3 shadow-lg "
        >
          <strong class="text-white">Reload</strong>
        </button>
        <table class="table mt-2">
          <tbody class="thead-light">
            {arrayList.map((data, ind) => (
              <tr key={ind}>
                <Link
                  to={{
                    pathname: "/read",
                    state: {
                      name: data.company,
                      req: data,
                    },
                  }}
                >
                  <button class="btn btn-secondary mb-1 ">
                    <strong class="text-white">{data.company}</strong>
                  </button>
                </Link>

                {/* {console.log(data.req.exp)} */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default JobList;
