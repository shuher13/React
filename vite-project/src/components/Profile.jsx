import React from "react";


function Profile({img, name}) {
  return (
    <div>
      <img src={img} alt="avatar" />
      <h2>{name}</h2>
    </div>
  );
}

export default Profile;
