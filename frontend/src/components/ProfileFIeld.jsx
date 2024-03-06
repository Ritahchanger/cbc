import React from "react";

const ProfileFIeld = ({fieldName,fieldValue}) => {
  return (
    <div className="col flex">
      <p className="field_title">{fieldName}</p>
      <p className="field_title">{fieldValue}</p>
    </div>
  );
};

export default ProfileFIeld;
