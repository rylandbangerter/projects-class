import confetti from "canvas-confetti";
import { useState } from "react";
import { motion } from "framer-motion";

const quotes = [
  "It always seems impossible until it's done. -Nelson Mandela",
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best. -St. Jerome",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. -Thomas A. Edison",
  "If you're going through hell, keep going. -Winston Churchill",
  "It does not matter how slowly you go as long as you do not stop. -Confucius",
  "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. -Norman Vincent Peale",
  "Start where you are. Use what you have. Do what you can. -Arthur Ashe",
  "Either you run the day or the day runs you. -Jim Rohn",
  "A good plan violently executed now is better than a perfect plan executed next week. -George S. Patton",
  "If you fell down yesterday, stand up today. -H. G. Wells",
  "They can conquer who believe they can. -Virgil",
  "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
  "When something is important enough, you do it even if the odds are not in your favor. -Elon Musk",
  "Life is 10% what happens to you and 90% how you react to it. -Charles R. Swindoll",
  "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. -Helen Keller",
  "With the new day comes new strength and new thoughts. -Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
  "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
  "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. -Roy T. Bennett",
  "Success is walking from failure to failure with no loss of enthusiasm. -Winston Churchill",
  "The only way to achieve the impossible is to believe it is possible. -Charles Kingsleigh",
  "The best way to predict the future is to create it. -Peter Drucker",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
  "You miss 100% of the shots you don't take. -Wayne Gretzky",
  "Your limitation—it's only your imagination. -Unknown",
];

export default function App() {
  // Your states
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [taskInput, setTaskInput] = useState(""); 
  const [quote, setQuote] = useState(""); 

  // Function to add a task
  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = { id: Date.now(), text: taskInput, completed: false };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  // Function to mark task as completed
  const completeTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );

    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    
    // 🎉 Confetti Effect
    confetti({
      particleCount: 1000,
      origin: { y: 0.6, x: 0.5 }, // Centered horizontally and slightly lower vertically
       // Adjust the size of the confetti
        startVelocity: 60,
        spread: 360,
        ticks: 600,
        zIndex: 0,
    });
  };

  // ✅ The return should be inside the function and only appear ONCE!
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center p-6">
      <h1 className="text-white text-3xl font-bold mb-4">Motivation Slay</h1>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="px-4 py-2 border rounded-md focus:outline-none"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          ➕ Add Task
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            className={`p-3 mb-2 rounded-lg shadow-md text-white ${
              task.completed ? "bg-gray-400 line-through" : "bg-blue-700"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {task.text}
            {!task.completed && (
              <button
                onClick={() => completeTask(task.id)}
                className="ml-3 bg-yellow-500 text-black px-2 py-1 rounded-md"
              >
                ✅ Done
              </button>
            )}
          </motion.li>
        ))}
      </ul>

      {quote && (
        <motion.div
          className="mt-6 p-4 bg-white text-black text-lg rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {quote}
        </motion.div>
      )}
    </div>
  );
}
