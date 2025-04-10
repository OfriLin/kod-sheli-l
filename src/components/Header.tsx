
import { useUser } from "../context/UserContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { username, isLoggedIn, logout } = useUser();

  return (
    <header className="bg-[#9CB4AC] shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#51624F]">C# <span className="text-[#E6D5A9]">למידה</span></h1>
        {isLoggedIn && (
          <div className="flex items-center gap-4">
            <span className="text-[#51624F] font-medium">שלום, <span className="font-bold text-[#51624F]">{username}</span></span>
            <Button 
              variant="outline" 
              onClick={logout} 
              size="sm"
              className="border-[#AFBEA2] text-[#51624F] hover:bg-[#AFBEA2]/20 hover:text-[#51624F]"
            >
              התנתק
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
