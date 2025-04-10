
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import LoginForm from "../components/LoginForm";

const Index = () => {
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  const handleSelectQuestion = (points: 5 | 10 | 15 | 20 | 30) => {
    navigate(`/question/${points}`);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#AFBEA2]/20 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <LoginForm />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#AFBEA2]/20">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#51624F]">זוכרים C#?! 😵‍💫😁</h1>
        
        <div className="mb-12">
          <ProgressBar />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8 text-[#51624F]">בחר שאלה לפי ניקוד</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[5, 10, 15, 20, 30].map((points) => (
              <QuestionCard 
                key={points}
                points={points as 5 | 10 | 15 | 20 | 30}
                onClick={handleSelectQuestion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
