
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
      <div className="point-badge mx-auto mb-4">{points}</div>
      <h3 className="text-xl font-bold mb-4">שאלה בשווי {points} נקודות</h3>
      <p className="text-gray-600 mb-6">
        בחר שאלה בדרגת קושי זו כדי להרוויח {points} נקודות
      </p>
      <Button 
        onClick={() => onClick(points)}
        className="w-full"
      >
        בחר שאלה
      </Button>
    </div>
  );
};

export default QuestionCard;
