
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type CodeEditorProps = {
  initialValue?: string;
  onSubmit: (code: string) => void;
};

const CodeEditor = ({ initialValue = "", onSubmit }: CodeEditorProps) => {
  const [code, setCode] = useState(initialValue);
  
  const handleSubmit = () => {
    onSubmit(code);
  };

  return (
    <div className="w-full">
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="min-h-[200px] font-mono text-left code-editor p-4 border-2 border-gray-200 rounded-lg"
        placeholder="// כתוב את הקוד שלך כאן"
      />
      <div className="mt-4 flex justify-end">
        <Button onClick={handleSubmit} className="px-8">הגש</Button>
      </div>
    </div>
  );
};

export default CodeEditor;
