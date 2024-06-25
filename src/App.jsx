import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="imgUrl">Picture:</label>
      <input
        id="imgUrl"
        type="text"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button">Add Friend</button>
    </div>
  );
}
