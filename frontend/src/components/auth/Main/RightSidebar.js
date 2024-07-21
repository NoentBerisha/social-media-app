import React from "react";
import "./RightSidebar.css";
import ProfileIconComponent from "./profile-icon/ProfileIconComponent";

function RightSidebar() {
  const latestActivity = [
    {
      id: 1,
      name: "Alice Johnson",
      text: "<b>Alice Johnson</b> commented on your post",
      photoUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      isOnline: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      text: "<b>Bob Smith</b> liked your post",
      photoUrl: "https://example.com/photo-bob-smith.jpg",
      isOnline: false,
    },
    {
      id: 3,
      name: "Carol Taylor",
      text: "<b>Carol Taylor</b> commented on your post",
      photoUrl: "https://example.com/photo-carol-taylor.jpg",
      isOnline: true,
    },
  ];

  const dropdownOptions = [
    { name: "Profile", url: "/profile" },
    { name: "Chat", url: "/chat" },
  ];

  const friends = [
    {
      id: 1,
      name: "Alice Johnson",
      text: "Alice Johnson",
      photoUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      isOnline: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      text: "Bob Smith",
      photoUrl: "https://example.com/photos/bob.jpg",
      isOnline: false,
    },
    {
      id: 3,
      name: "Carol Taylor",
      text: "Carol Taylor",
      photoUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      isOnline: true,
    },
    {
      id: 4,
      name: "David Brown",
      text: "David Brown",
      photoUrl: "https://example.com/photos/david.jpg",
      isOnline: false,
    },
    {
      id: 5,
      name: "Eve White",
      text: "Eve White",
      photoUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      isOnline: true,
    },
    {
      id: 6,
      name: "Frank Jones",
      text: "Frank Jones",
      photoUrl: "https://example.com/photos/frank.jpg",
      isOnline: true,
    },
    {
      id: 7,
      name: "Grace Lee",
      text: "Grace Lee",
      photoUrl: "https://example.com/photos/grace.jpg",
      isOnline: false,
    },
   
  ];

  return (
    <div className="right-sidebar">
      <div className="latest-acitvity">
        <span>
        <h3>Latest Activity</h3>
        <br></br>
        {latestActivity.map((activity) => (
          <ProfileIconComponent
            key={activity.id}
            name={activity.name}
            text={activity.text}
            photoUrl={activity.photoUrl}
            isOnline={activity.isOnline}
            dropdownOptions={dropdownOptions}
          />
        ))}
        </span>
      </div>

      <div className="active-friends">
      <h3>Active Friends</h3>
      <br></br> 
      <div className="sticky">
        

        {friends.map((friend) => (
          <ProfileIconComponent
            key={friend.id}
            name={friend.name}
            text={friend.text}
            photoUrl={friend.photoUrl}
            isOnline={friend.isOnline}
            dropdownOptions={dropdownOptions}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
