import React from "react";

export default function Greeting() {
  const currentTime = new Date().getHours();

  if (6 < currentTime && currentTime < 12) {
    return <h1 className="app-greeting">Good morning!</h1>;
  } else if (12 <= currentTime && currentTime < 17) {
    return <h1 className="app-greeting">Good afternoon!</h1>;
  } else if (17 <= currentTime && currentTime < 22) {
    return <h1 className="app-greeting">Good evening!</h1>;
  } else if (
    (23 <= currentTime && currentTime <= 24) ||
    (0 <= currentTime && currentTime < 5)
  ) {
    return <h1 className="app-greeting">Good night!</h1>;
  } else {
    return <h1 className="app-greeting">This should never happen</h1>;
  }
};
