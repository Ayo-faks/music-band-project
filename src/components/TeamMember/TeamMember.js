import React from "react";

const TeamMember = (props) => {
  return (
    <div className="team_member">
      <div className="team_img">
        <img src={props.img} alt="Team_image" />
      </div>
      <h3>{props.name}</h3>
      <p className="role">{props.category}</p>
    </div>
  );
};

export default TeamMember;
