
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
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">טוען שאלה...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowRight size={16} />
          חזרה לדף הבית
        </Button>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="border-b">
            <div className="flex justify-between items-center">
              <CardTitle>שאלה ({question.points} נקודות)</CardTitle>
              <div className="point-badge">{question.points}</div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
              {question.codeExample && (
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto code-editor mb-6">
                  <code>{question.codeExample}</code>
                </pre>
              )}
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">הפתרון שלי:</h3>
              <CodeEditor 
                initialValue={question.codeExample || ""} 
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
