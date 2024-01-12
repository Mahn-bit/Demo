import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function Like() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <FaHeart
        onClick={() => {
          setIsActive(!isActive);
        }}
        color={isActive ? "red" : "black"}
      />
    </>
    
  );
}

export default Like;
