
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
      <Card className="border-[#9CB4AC] bg-white/95 shadow-lg">
        <CardHeader className="border-b border-[#AFBEA2]/50 bg-[#E6D5A9]/30">
          <CardTitle className="text-2xl text-[#51624F]">ברוך הבא</CardTitle>
          <CardDescription className="text-[#51624F]/80">התחבר כדי לתרגל C#</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium mb-2 text-[#51624F]">
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
                className="w-full border-[#9CB4AC] focus-visible:ring-[#51624F]"
              />
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#51624F] hover:bg-[#51624F]/90 text-white"
            >
              התחבר
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
