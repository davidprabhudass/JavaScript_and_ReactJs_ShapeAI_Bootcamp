import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
    <center><p>Copyright @ {currYear}</p></center>
    </footer>
  );
}

export default Footer;