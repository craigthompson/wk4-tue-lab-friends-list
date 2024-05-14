import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="picture">Picture URL: </label>
      <input type="text" id="picture" />
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" />

      <button type="button">Add Friend</button>
    </div>
  );
}
