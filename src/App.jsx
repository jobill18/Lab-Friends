import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  function addFriend() {
    const newFriends = [...friends];
    newFriends.push({ picture, name });
    setFriends(newFriends);
    // setFriends([...friends, { picture, name }]);
    setName("");
    setPicture("");
    console.log(friends);
  }

  return (
    <div>
      <label htmlFor="picture">Picture:</label>
      <input
        id="picture"
        type="text"
        value={picture}
        onChange={(e) => (
          setPicture(e.target.value),
          console.log(picture),
          console.log(e.target.value)
        )}
      />
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => (setName(e.target.value), console.log(name))}
      />
      <button type="button" onClick={addFriend}>
        Add Friend
      </button>
    </div>
  );
}
