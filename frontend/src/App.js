import React, { useState } from "react";
import Users from "./Users";
import User from "./User";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="container mx-auto px-4">
      {user ? (
        <User user={user} selectUser={userVal => setUser(userVal)} />
      ) : (
        <Users selectUser={userVal => setUser(userVal)} />
      )}
    </div>
  );
}

export default App;
