
import { Button } from "@/components/ui/button";

type QuestionCardProps = {
  points: 5 | 10 | 15 | 20 | 30;
  onClick: (points: 5 | 10 | 15 | 20 | 30) => void;
};

const QuestionCard = ({ points, onClick }: QuestionCardProps) => {
  return (
    <div 
      className="question-card bg-[#E6D5A9] rounded-lg p-6 shadow-md border border-[#AFBEA2] text-center hover:shadow-lg hover:border-[#9CB4AC]"
    >
      <div className="text-3xl font-bold mb-4 text-[#51624F]">{points} נקודות</div>
      <Button 
        onClick={() => onClick(points)}
        className="w-full bg-[#51624F] hover:bg-[#51624F]/90 text-white"
      >
        הגרל שאלה
      </Button>
    </div>
  );
};

export default QuestionCard;
