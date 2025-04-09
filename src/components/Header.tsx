
import { useUser } from "../context/UserContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { username, isLoggedIn, logout } = useUser();

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-purple">C# <span className="text-theme-blue">למידה</span></h1>
        {isLoggedIn && (
          <div className="flex items-center gap-4">
            <span className="text-gray-700">שלום, <span className="font-medium text-theme-purple">{username}</span></span>
            <Button variant="outline" onClick={logout} size="sm">התנתק</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
