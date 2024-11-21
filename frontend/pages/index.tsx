'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Home = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState("");
  const [userDetails, setUserDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  

  // Effect to check if the user is authenticated based on the JWT token
  useEffect(() => {
    const token = window?.localStorage?.getItem("accessToken");
  console.log("Token:", token);

    if (token) {
      setIsAuthenticated(true);
      fetchUserData(token); // Fetch user data immediately if token exists
    } else {
      setLoading(false);
      router.push("/login"); // Redirect to login if no token is found
    }
  }, []);

  // Function to handle logging out
  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // Remove token from localStorage
    setIsAuthenticated(false);
    setMessage(""); // Clear message
    setUserDetails(null); // Clear user details
    router.push("/login"); // Redirect to login page
  };

  // Fetch user data using the stored JWT token
  const fetchUserData = async (token:string) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/find`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserDetails(response.data); // Set user details in the state
      setMessage(`Welcome, ${response.data.name}`); // Set personalized message
    } catch (error) {
      console.error("Error fetching user data:", error);
      setMessage("Failed to fetch user data.");
    }
    setLoading(false); // Stop loading once data is fetched
  };

  // Loading state while the token is being verified and user data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      {isAuthenticated ? (
        <>
          <h1>{message}</h1>
          {userDetails && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gridGap: "10px",
              }}
            >
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "5px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(150px, 1fr))",
                  gridGap: "10px",
                }}
              >
                <div>Name</div>
                <div>{userDetails.name}</div>
              </div>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "5px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(150px, 1fr))",
                  gridGap: "10px",
                }}
              >
                <div>Email</div>
                <div>{userDetails.email}</div>
              </div>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "5px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(150px, 1fr))",
                  gridGap: "10px",
                }}
              >
                <div>State</div>
                <div>{userDetails.state}</div>
              </div>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "5px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(150px, 1fr))",
                  gridGap: "10px",
                }}
              >
                <div>District</div>
                <div>{userDetails.district}</div>
              </div>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "5px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(150px, 1fr))",
                  gridGap: "10px",
                }}
              >
                <div>Address</div>
                <div>{userDetails.address}</div>
              </div>
            </div>
          )}
          <button
            onClick={handleLogout}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
};

export default Home;
