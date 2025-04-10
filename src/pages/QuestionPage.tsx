
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Header from "../components/Header";
import { getRandomQuestionByPoints, Question } from "../data/questions";
import CodeEditor from "../components/CodeEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const QuestionPage = () => {
  const { points } = useParams<{ points: string }>();
  const [question, setQuestion] = useState<Question | null>(null);
  const { addPoints } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (points) {
      const pointsValue = parseInt(points) as 5 | 10 | 15 | 20 | 30;
      const randomQuestion = getRandomQuestionByPoints(pointsValue);
      setQuestion(randomQuestion);
    }
  }, [points]);

  const handleSubmit = (code: string) => {
    if (question) {
      addPoints(question.points);
      toast.success(`נוספו ${question.points} נקודות לחשבון שלך!`);
      // Wait a moment before redirecting to show the toast
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  if (!question) {
    return (
      <div className="min-h-screen bg-[#AFBEA2]/20">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-[#51624F]">טוען שאלה...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#AFBEA2]/20">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2 text-[#51624F] hover:bg-[#E6D5A9]/30"
          onClick={() => navigate("/")}
        >
          <ArrowRight size={16} />
          חזרה לדף הבית
        </Button>

        <Card className="max-w-4xl mx-auto border-[#9CB4AC] shadow-md">
          <CardHeader className="border-b border-[#AFBEA2] bg-[#E6D5A9]/30">
            <div className="flex justify-between items-center">
              <CardTitle className="text-[#51624F]">שאלה ({question.points} נקודות)</CardTitle>
              <div className="point-badge bg-gradient-to-r from-[#51624F] to-[#9CB4AC]">{question.points}</div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 bg-white/90">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-[#51624F]">{question.text}</h2>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-[#51624F]">הפתרון שלי:</h3>
              <CodeEditor 
                onSubmit={handleSubmit} 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionPage;
