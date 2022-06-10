import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function JobList() {
  const sty = {
    tableLayout: "fixed",
    width: "600%",
    padding: 20,
  };
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
        <table class="table mt-2 align-middle">
          <tbody class="thead-light">
            {arrayList.map((data, ind) => {
              let regLink = "https://linktr.ee/faceprep";
              return (
                <tr key={ind}>
                  <td>
                    <Link
                      to={{
                        pathname: "/read",
                        state: {
                          name: data.company,
                          req: data,
                          link:
                            data.regLink !== undefined ? data.regLink : "Not",
                          // data.regLink !== undefined ? data.regLink : "Not",
                        },
                      }}
                    >
                      <button class="btn btn-secondary mb-1 ">
                        <strong class="text-white">{data.company}</strong>
                      </button>
                      {/* <span>{data}</span> */}
                    </Link>
                  </td>
                  <td>
                    <em style={{ color: "red" }}>
                      {data.Link_valid_till !== undefined ? data.Link_valid_till : "?"}
                    </em>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default JobList;
