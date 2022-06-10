import React from "react";

function NavBar() {
  return (
    <div class="pos-f-t mt-2 ">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h4 class="text-white">Collapsed content</h4>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark rounded">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <span>
            <strong class="text-white p-2">
              by
              <strong class="text-warning p-1 rounded p-2">Linges</strong>
            </strong>
          </span>
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
