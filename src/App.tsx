import confetti from "canvas-confetti";
import { useState } from "react";
import { motion } from "framer-motion";
import myImage from "../images/antmeme.jpg"; // Adjust the path as necessary
import myImage2 from "../images/dogmeme.jpg";
import myImage3 from "../images/hedgehogmeme.jpg";
import myImage4 from "../images/ottermeme.jpg";

const quotes = [
  "With the new day comes new strength and new thoughts. -Eleanor Roosevelt",
  "It always seems impossible until it's done. -Nelson Mandela",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
  "Do what you can, with what you have, where you are. -Theodore Roosevelt",
  "You miss 100% of the shots you don’t take. -Wayne Gretzky",
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. -William James",
  "The best way to predict the future is to create it. -Peter Drucker",
  "Hardships often prepare ordinary people for an extraordinary destiny. -C.S. Lewis",
  "Life is 10% what happens to you and 90% how you react to it. -Charles R. Swindoll",
  "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
  "Start where you are. Use what you have. Do what you can. -Arthur Ashe",
  "Don’t watch the clock; do what it does. Keep going. -Sam Levenson",
  "Our greatest glory is not in never falling, but in rising every time we fall. -Confucius",
];

export default function App() {
  // States for tasks and quotes
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
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
      startVelocity: 50,
      spread: 360,
      ticks: 2000,
      zIndex: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center p-6">
      <h1 className="text-white text-3xl font-bold mb-4">ur mom</h1>

      {/* Task Input */}
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

      {/* Task List */}
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

      {/* Motivational Quote */}
      {quote && (
        <motion.div
          className="mt-6 p-4 bg-white text-black text-lg rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {quote}
        </motion.div>
      )}

      {/* Image Display */}
      <img src={myImage} alt="My Image" className="absolute top-4 left-4 w-32 h-32 rounded-md shadow-lg" />
      <img src={myImage2} alt="My Image2" className="absolute top-4 right-4 w-32 h-32 rounded-md shadow-lg" />
      <img src={myImage3} alt="My Image3" className="absolute bottom-4 left-4 w-32 h-32 rounded-md shadow-lg" />
      <img src={myImage4} alt="My Image4" className="absolute bottom-4 right-4 w-32 h-32 rounded-md shadow-lg" />
    </div>
  );
}
