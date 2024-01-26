import React from "react";
import NavigationBar from "./component/common/NavigationBar" // Import the NavBar component

const Home = () => {
  return (
    <div>
      {/* Include the NavBar component */}

      <div className="container mt-4">
        <div className="jumbotron">
          <h1 className="display-4">Welcome to the Student Dashboard!</h1>
          <p className="lead">
            Explore the features and manage student information with ease.
          </p>
          <hr className="my-4" />
          <p>
            Get started by navigating through the dashboard using the menu above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
