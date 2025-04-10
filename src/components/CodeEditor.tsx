
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type CodeEditorProps = {
  initialValue?: string;
  onSubmit: (code: string) => void;
};

const CodeEditor = ({ initialValue = "", onSubmit }: CodeEditorProps) => {
  const [code, setCode] = useState("// כתבו את הפתרון שלכם כאן");
  
  const handleSubmit = () => {
    onSubmit(code);
  };

  return (
    <div className="w-full">
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="min-h-[200px] font-mono text-left code-editor p-4 border-2 border-[#9CB4AC] rounded-lg focus-visible:ring-[#51624F] bg-white/90"
        placeholder="// כתבו את הפתרון שלכם כאן"
      />
      <div className="mt-4 flex justify-end">
        <Button onClick={handleSubmit} className="px-8 bg-[#51624F] hover:bg-[#51624F]/90 text-white">הגש</Button>
      </div>
    </div>
  );
};

export default CodeEditor;
