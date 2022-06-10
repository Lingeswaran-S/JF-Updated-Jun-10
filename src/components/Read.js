import React from "react";
import { Link, useLocation } from "react-router-dom";

function Read() {
  const location = useLocation();
  const { req } = location.state;
  const { name } = location.state;
  let reqList = [];
  function process() {
    console.log("pro reach");

    for (const key in req) {
      if (key !== "company" && key !== "id") {
        reqList.push([key, req[key]]);
      }
    }
    console.log(reqList);
  }
  return (
    <React.Fragment>
      <div class="container border mt-1 rounded pb-4 ">
        <Link to="/jobs">
          <button class="btn btn-success mt-3 shadow-lg ">
            <strong class="text-white">Companies</strong>
          </button>
        </Link>
        <div class="container table-responsive-xl pt-3 ">
          {process()}
          <table
            class="table table-striped border border-success"
            style={{ tableLayout: "fixed" }}
          >
            <thead class="table-danger border">
              <th colSpan="2">Company : {name}</th>
            </thead>
            <tbody class="table table-bordered">
              {reqList.map((data, ind) => (
                <tr key={ind}>
                  <td>{data[0]}</td>
                  <td style={{ wordWrap: "break-word" }}>
                    <div>{data[1]}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Read;
