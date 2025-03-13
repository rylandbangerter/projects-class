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
];

export default function App() {
  // State to store tasks
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [taskInput, setTaskInput] = useState(""); // State to store user input
  const [quote, setQuote] = useState(""); // State to store motivational quote

  // Function to add a task
  const addTask = () => {
    if (taskInput.trim() === "") return; // Prevent empty tasks
    const newTask = { id: Date.now(), text: taskInput, completed: false };
    setTasks([...tasks, newTask]); // Update the tasks array
    setTaskInput(""); // Clear input field after adding
  };

  // Function to mark task as completed
  const completeTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );

    // Show a random motivational quote when a task is completed
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center p-6">
      <h1 className="text-white text-3xl font-bold mb-4">
        ✨ Motivational To-Do ✨
      </h1>

      {/* Input field & add button */}
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

      {/* Task list */}
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

      {/* Motivational Quote Section */}
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
