import confetti from "canvas-confetti";
import { useState } from "react";
import { motion } from "framer-motion";
import myImage from "../images/antmeme.jpg";
import myImage2 from "../images/dogmeme.jpg";
import myImage3 from "../images/hedgehogmeme.jpg";
import myImage4 from "../images/ottermeme.jpg";
import myImage5 from "../images/duckmeme.jpg";
import myImage6 from "../images/llamameme.jpg";

const quotes = [
  "With the new day comes new strength and new thoughts. -Eleanor Roosevelt",
  "It always seems impossible until it's done. -Nelson Mandela",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
  "Do what you can, with what you have, where you are. -Theodore Roosevelt",
];

export default function App() {
  // States for tasks, completed tasks history, and quotes
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [taskInput, setTaskInput] = useState("");
  const [quote, setQuote] = useState("");
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

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
    setCompletedTasks([...completedTasks, taskId]); // Save completed task history

    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    // 🎉 Confetti Effect
    confetti({
      particleCount: 1000,
      origin: { y: 0.6, x: 0.5 },
      startVelocity: 50,
      spread: 360,
      ticks: 2000,
      zIndex: 0,
    });
  };

  // Function to undo the last completed task
  const undoLastCompletedTask = () => {
    if (completedTasks.length === 0) return;
    const lastTaskId = completedTasks.pop();
    setTasks(
      tasks.map((task) =>
        task.id === lastTaskId ? { ...task, completed: false } : task
      )
    );
    setCompletedTasks([...completedTasks]); // Update history
    setQuote(""); // Clear the motivational quote
  };

  return (
    <div className="min-h-screen bg-skyBlue flex flex-col items-center p-6">
      <h1 className="text-white text-3xl font-bold mb-4">---CHANGE NAME---</h1>

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
          className="bg-lavenderGray text-warmBeige px-4 py-2 rounded-lg hover:bg-sageGreen"
        >
          Add Task
        </button>
        <button
          onClick={undoLastCompletedTask}
          className="bg-coolGray text-warmBeige px-4 py-2 rounded-lg hover:bg-mutedNavy"
        >
          Undo Last Task
        </button>
        <button
          onClick={() => setTasks([])}
          className="bg-coral text-warmBeige px-4 py-2 rounded-lg hover:bg-coolGray"
        >
          Clear Tasks
        </button> 
      </div>

      {/* Task List Container */}
      <div className="w-full max-w-md max-h-80 overflow-y-auto border border-white rounded-lg p-2 bg-white bg-opacity-0 backdrop-blur-md shadow-md">
        <ul>
          {tasks.map((task) => (
            <motion.li
              key={task.id}
              className={`p-3 mb-2 rounded-lg shadow-md text-white ${
                task.completed ? "bg-pink-400 line-through" : "bg-pink-700"
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
      </div>

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
      <img
        src={myImage}
        alt="My Image"
        className="absolute top-4 left-4 w-32 h-32 rounded-md shadow-lg"
      />
      <img
        src={myImage2}
        alt="My Image2"
        className="absolute top-4 right-4 w-32 h-32 rounded-md shadow-lg"
      />
      <img
        src={myImage3}
        alt="My Image3"
        className="absolute bottom-4 left-4 w-32 h-32 rounded-md shadow-lg"
      />
      <img
        src={myImage4}
        alt="My Image4"
        className="absolute bottom-4 right-4 w-32 h-32 rounded-md shadow-lg"
      />
      <img
        src={myImage5}
        alt="My Image5"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-32 h-32 rounded-md shadow-lg"
      />
      <img
        src={myImage6}
        alt="My Image6"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-32 h-32 rounded-md shadow-lg"
      />
    </div>
  );
}
