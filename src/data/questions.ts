
export type Question = {
  id: string;
  points: 5 | 10 | 15 | 20 | 30;
  text: string;
  codeExample?: string;
};

// Placeholder questions in Hebrew
export const questions: Question[] = [
  {
    id: "q1",
    points: 5,
    text: "מהי המילה השמורה להגדרת משתנה בעל ערך שלא ניתן לשנות ב-C#?",
    codeExample: "// דוגמה:\n// ??? int maxValue = 100;"
  },
  {
    id: "q2",
    points: 5,
    text: "איך מגדירים מחלקה (class) ב-C#?",
  },
  {
    id: "q3",
    points: 10,
    text: "כתבו פונקציה המקבלת מספר שלם ומחזירה האם הוא זוגי",
    codeExample: "// כתבו את הפתרון שלכם כאן\nbool IsEven(int number)\n{\n    // השלימו את הקוד\n}"
  },
  {
    id: "q4",
    points: 10,
    text: "מהו ההבדל בין ערכים מסוג value type ל-reference type?",
  },
  {
    id: "q5",
    points: 15,
    text: "כתבו לולאה המדפיסה את כל המספרים מ-1 עד 10 המתחלקים ב-3",
    codeExample: "// כתבו את הפתרון שלכם כאן"
  },
  {
    id: "q6",
    points: 15,
    text: "הסבירו מהי ירושה (inheritance) ב-C# ותנו דוגמה קצרה של קוד",
  },
  {
    id: "q7",
    points: 20,
    text: "כתבו פונקציה הממיינת מערך של מספרים שלמים בסדר עולה",
    codeExample: "void SortArray(int[] numbers)\n{\n    // השלימו את הקוד\n}"
  },
  {
    id: "q8",
    points: 20,
    text: "הסבירו מהם generics ב-C# וכתבו דוגמת קוד פשוטה",
  },
  {
    id: "q9",
    points: 30,
    text: "ממשו מחלקה המייצגת רשימה מקושרת של מספרים שלמים",
    codeExample: "class LinkedList\n{\n    // השלימו את הקוד\n}"
  },
  {
    id: "q10",
    points: 30,
    text: "כיצד מממשים ממשק (interface) ב-C#? צרו ממשק IShape עם שתי מחלקות המממשות אותו",
    codeExample: "// כתבו את הפתרון שלכם כאן"
  },
  // Additional questions for each point category
  {
    id: "q11",
    points: 5,
    text: "מהי הפקודה להדפסת טקסט למסך ב-C#?",
  },
  {
    id: "q12",
    points: 10,
    text: "מהו namespace ב-C# וכיצד משתמשים בו?",
  },
  {
    id: "q13",
    points: 15,
    text: "הסבירו מהם Properties ב-C# וכתבו דוגמה",
  },
  {
    id: "q14",
    points: 20,
    text: "כתבו פונקציה המקבלת מחרוזת ובודקת האם היא פלינדרום",
    codeExample: "bool IsPalindrome(string text)\n{\n    // השלימו את הקוד\n}"
  },
  {
    id: "q15",
    points: 30,
    text: "ממשו את אלגוריתם חיפוש בינארי במערך ממוין",
    codeExample: "int BinarySearch(int[] array, int target)\n{\n    // השלימו את הקוד\n}"
  },
];

export const getRandomQuestionByPoints = (points: 5 | 10 | 15 | 20 | 30): Question => {
  const questionsWithPoints = questions.filter(q => q.points === points);
  const randomIndex = Math.floor(Math.random() * questionsWithPoints.length);
  return questionsWithPoints[randomIndex];
};
