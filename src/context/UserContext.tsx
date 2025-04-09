
import React, { createContext, useContext, useState, useEffect } from "react";

type UserContextType = {
  username: string;
  points: number;
  isLoggedIn: boolean;
  login: (username: string) => void;
  addPoints: (pointsToAdd: number) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string>("");
  const [points, setPoints] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Load user data from localStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPoints = localStorage.getItem("points");
    
    if (storedUsername) {
      setUsername(storedUsername);
      setPoints(storedPoints ? parseInt(storedPoints) : 0);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (newUsername: string) => {
    const storedPoints = localStorage.getItem(`points_${newUsername}`);
    
    setUsername(newUsername);
    setPoints(storedPoints ? parseInt(storedPoints) : 0);
    setIsLoggedIn(true);
    
    localStorage.setItem("username", newUsername);
    if (!storedPoints) {
      localStorage.setItem(`points_${newUsername}`, "0");
    }
  };

  const addPoints = (pointsToAdd: number) => {
    const newPoints = points + pointsToAdd;
    setPoints(newPoints);
    localStorage.setItem(`points_${username}`, newPoints.toString());
    localStorage.setItem("points", newPoints.toString());
  };

  const logout = () => {
    setUsername("");
    setPoints(0);
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.removeItem("points");
  };

  return (
    <UserContext.Provider
      value={{
        username,
        points,
        isLoggedIn,
        login,
        addPoints,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
