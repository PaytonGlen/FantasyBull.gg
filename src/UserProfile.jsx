import axios from "axios";
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5001/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setError(error.response?.data?.message || "Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {loading && <p>Loading user...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>
            Bank:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(user.bank)}
          </p>
        </div>
      )}
      {!loading && !user && !error && <p>No user found</p>}
    </div>
  );
};

export default UserProfile;
