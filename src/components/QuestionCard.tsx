
import { Button } from "@/components/ui/button";

type QuestionCardProps = {
  points: 5 | 10 | 15 | 20 | 30;
  onClick: (points: 5 | 10 | 15 | 20 | 30) => void;
};

const QuestionCard = ({ points, onClick }: QuestionCardProps) => {
  return (
    <div 
      className="question-card bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center"
    >
      <div className="text-3xl font-bold mb-4 text-theme-purple">{points} נקודות</div>
      <Button 
        onClick={() => onClick(points)}
        className="w-full"
      >
        הגרל שאלה
      </Button>
    </div>
  );
};

export default QuestionCard;
