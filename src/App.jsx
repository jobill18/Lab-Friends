import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="imgUrl">Picture:</label>
      <input type="text" name="imgUrl" id="imgUrl" />
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />
      <button type="button">Add Friend</button>
    </div>
  );
}
