import React from "react";

import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Fedi Hammami",
      image:
        "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
