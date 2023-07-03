import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Secret = () => {
  const [secretData, setSecretData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        console.log("TOKEN-SECRET",token)
        const response = await axios.get(
          "http://localhost:3001/api/auth/secret",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        window.localStorage.setItem("token", token);

        if (response.status === 200) {
          const data = response.data;
          setSecretData(data);
          navigate("/");
        }
      } catch (error) {
        console.error("Error retrieving secret data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Secret Component</h2>
      {secretData && (
        <div>
          <p>Secret data: {secretData}</p>
          {console.log("SECRET.DATA", secretData)}
        </div>
      )}
    </div>
  );
};

export default Secret;
