import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const ListOfLinks = links.map((pagelocation)=>{
    console.log(pagelocation)
    return <a href={'#'+ pagelocation} key={pagelocation}>{pagelocation}</a>
  })
  return (
    <nav>
      {ListOfLinks}
    </nav>
)}

export default NavBar;
