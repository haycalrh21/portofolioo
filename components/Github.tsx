"use client";

import React, { useState, useEffect } from "react";

interface UserData {
  name: string;
  followers: number;
  following: number;
  public_repos: number;
}

function Github() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/haycalrh21");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserData(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2 className="text-black">{userData.name}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Github;
