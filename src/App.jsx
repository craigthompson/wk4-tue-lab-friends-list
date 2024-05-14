import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  const addFriend = () => {
    const friendObj = { picture: picture, name: name };
    setFriends([...friends, friendObj]);

    // Reset the input fields
    setPicture("");
    setName("");
  };

  const friendInfo = friends.map((friend) => (
    <div key={friend.name}>
      <img src={friend.picture} alt="Picture of {friend.name}" width="50px" />
      <span>{friend.name}</span>
    </div>
  ));

  return (
    <div>
      <label htmlFor="picture">Picture URL: </label>
      <input
        type="text"
        id="picture"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="button" onClick={addFriend}>
        Add Friend
      </button>
      {friendInfo}
    </div>
  );
}
