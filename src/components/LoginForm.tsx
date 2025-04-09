
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const LoginForm = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputUsername.trim()) {
      setError("יש להזין שם משתמש");
      return;
    }
    
    login(inputUsername);
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">ברוך הבא</CardTitle>
          <CardDescription>התחבר כדי לתרגל C#</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                שם משתמש
              </label>
              <Input
                id="username"
                type="text"
                value={inputUsername}
                onChange={(e) => {
                  setInputUsername(e.target.value);
                  setError("");
                }}
                placeholder="הכנס שם משתמש"
                className="w-full"
              />
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>
            <Button type="submit" className="w-full">
              התחבר
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
