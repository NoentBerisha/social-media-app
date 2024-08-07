import React, { useState } from "react";
import "./MainContent.css";
import MainContent from "./MainContent";
import FollowersAndFollowing from "./FollowersAndFollowing";

function SliderComponent() {
  const [selectedOption, setSelectedOption] = useState("Posts");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const followers = [
    {
      id: 1,
      name: "Alice Johnson",
      text: "Alice Johnson",
      photoUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      isOnline: true,
      followers: 100,
      following: 200,
    },
    {
      id: 2,
      name: "Bob Smith",
      text: "Bob Smith",
      photoUrl: "https://example.com/photos/bob.jpg",
      isOnline: false,
      followers: 100,
      following: 200,
    },
    {
      id: 3,
      name: "Carol Taylor",
      text: "Carol Taylor",
      photoUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      isOnline: true,
      followers: 100,
      following: 200,
    },
    {
      id: 4,
      name: "David Brown",
      text: "David Brown",
      photoUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
      isOnline: false,
      followers: 100,
      following: 200,
    },
    {
      id: 5,
      name: "Eve White",
      text: "Eve White",
      photoUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      isOnline: true,
      followers: 100,
      following: 200,
    },
    {
      id: 6,
      name: "Frank Jones",
      text: "Frank Jones",
      photoUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
      isOnline: true,
      followers: 100,
      following: 200,
    },
    {
      id: 7,
      name: "Grace Lee",
      text: "Grace Lee",
      photoUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
      isOnline: false,
      followers: 100,
      following: 200,
    },
   
  ];


  return (
    <div className="slider">
      <nav className="navigation">
        <button
          className={selectedOption === "Posts" ? "active" : ""}
          onClick={() => handleOptionClick("Posts")}
        >
          Posts
        </button>
        <button
          className={selectedOption === "Followers" ? "active" : ""}
          onClick={() => handleOptionClick("Followers")}
        >
          Followers
        </button>
        <button
          className={selectedOption === "Following" ? "active" : ""}
          onClick={() => handleOptionClick("Following")}
        >
          Following
        </button>
      </nav>
      <div className="content">
        <div
          className={`content-item ${
            selectedOption === "Posts" ? "active" : ""
          }`}
        >
          {selectedOption === "Posts" && <MainContent />}
        </div>
        <div
          className={`content-item ${
            selectedOption === "Followers" ? "active" : ""
          }`}
        >
          {selectedOption === "Followers" && <FollowersAndFollowing initialList={followers} title={"Followers"}/>}
        </div>
        <div
          className={`content-item ${
            selectedOption === "Following" ? "active" : ""
          }`}
        >
          {selectedOption === "Following" && <FollowersAndFollowing initialList={followers} title={"Following"} />}
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
