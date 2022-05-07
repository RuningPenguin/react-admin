import React from "react";



const Home = () => {
  return (
    <>
      {new Array(100).fill("").map((v,i) => <span key={i}>{i}-</span>)}
      {new Array(100).fill("").map((v,i) => <h1 key={i}>home</h1>)}
    </>
  );
};

export default Home;