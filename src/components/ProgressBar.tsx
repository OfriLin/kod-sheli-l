
import { useUser } from "../context/UserContext";

const MAX_POINTS = 650;

const ProgressBar = () => {
  const { points } = useUser();
  const percentage = Math.min(Math.round((points / MAX_POINTS) * 100), 100);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#51624F]">התקדמות שלך</span>
        <span className="text-sm font-medium text-[#51624F]">{points} / {MAX_POINTS} נקודות</span>
      </div>
      
      <div className="progress-container bg-[#E6D5A9]/50 rounded-full h-4 overflow-hidden">
        <div 
          className="progress-bar bg-gradient-to-r from-[#51624F] to-[#9CB4AC]" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="mt-1 text-xs text-[#51624F]/70 text-left">{percentage}%</div>
    </div>
  );
};

export default ProgressBar;
