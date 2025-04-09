
import { useUser } from "../context/UserContext";

const MAX_POINTS = 650;

const ProgressBar = () => {
  const { points } = useUser();
  const percentage = Math.min(Math.round((points / MAX_POINTS) * 100), 100);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">התקדמות שלך</span>
        <span className="text-sm font-medium text-theme-purple">{points} / {MAX_POINTS} נקודות</span>
      </div>
      
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="mt-1 text-xs text-gray-500 text-left">{percentage}%</div>
    </div>
  );
};

export default ProgressBar;
