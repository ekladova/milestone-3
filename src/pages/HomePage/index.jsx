import React, { useState } from "react";

const HomePage = () => {
  const [leader, setLeader] = useState({
    name: "Kate",
    score: 0,
  });

  return (
    <>
      {/* <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{leader.name}</td>
          </tr>
          <tr>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
};

export default HomePage;
