import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { z } from "react-router-dom";
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default function CustomPagination({ setPage, page,numOfPages = 10 }) {
  // Scroll to top when page changes
  const history=useHistory();
  const path=history.location.pathname;
  // console.log(setPage);
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          page={page}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}
