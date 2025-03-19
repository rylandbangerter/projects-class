import confetti from "canvas-confetti";
import { useState } from "react";
import { motion } from "framer-motion";

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
"Everything you’ve ever wanted is on the other side of fear. -George Addair",
"Success is walking from failure to failure with no loss of enthusiasm. -Winston Churchill", 
"The only way to achieve the impossible is to believe it is possible. -Charles Kingsleigh",
"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. -Roy T. Bennett",  
"A journey of a thousand miles begins with a single step. -Lao Tzu",
"Great things are done by a series of small things brought together. -Vincent Van Gogh",  
"When something is important enough, you do it even if the odds are not in your favor. -Elon Musk",
"The future depends on what you do today. -Mahatma Gandhi",
"What you get by achieving your goals is not as important as what you become by achieving your goals. -Zig Ziglar", 
"The harder the conflict, the greater the triumph. -George Washington",
"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. -Helen Keller",  
"They can conquer who believe they can. -Virgil",  
"Do not wait to strike till the iron is hot, but make it hot by striking. -William Butler Yeats",
"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. -Earl Nightingale",  
"The secret of getting ahead is getting started. -Mark Twain",
"Happiness is not something ready made. It comes from your own actions. -Dalai Lama",  
"The only place where success comes before work is in the dictionary. -Vidal Sassoon",  
"You don’t have to be great to start, but you have to start to be great. -Zig Ziglar", 
"If you want to fly, give up everything that weighs you down. -Buddha",
"Success doesn’t come to you. You go to it. -Marva Collins",
"You are enough just as you are. -Meghan Markle",
"Be not afraid of going slowly, be afraid only of standing still. -Chinese Proverb",  
"Your limitation—it’s only your imagination. -Unknown",
"Be yourself; everyone else is already taken. -Oscar Wilde", 
"If opportunity doesn’t knock, build a door. -Milton Berle",
"Do what you feel in your heart to be right—for you’ll be criticized anyway. -Eleanor Roosevelt",
"The mind is everything. What you think you become. -Buddha",
"The best revenge is massive success. -Frank Sinatra",  
"What lies behind us and what lies before us are tiny matters compared to what lies within us. -Ralph Waldo Emerson",  
"Fear kills more dreams than failure ever will. -Suzy Kassem", 
"Act without expectation. -Lao Tzu",
"If you’re going through hell, keep going. -Winston Churchill", 
"Your only limit is your mind. -Unknown",
"Dream big and dare to fail. -Norman Vaughan",  
"Don’t limit your challenges. Challenge your limits. -Unknown", 
"Change the world by being yourself. -Amy Poehler",
"Be the change that you wish to see in the world. -Mahatma Gandhi",  
"Either you run the day, or the day runs you. -Jim Rohn",  
"If you fell down yesterday, stand up today. -H.G. Wells",
"He who has a why to live can bear almost any how. -Friedrich Nietzsche", 
"What we fear doing most is usually what we most need to do. -Tim Ferriss",  
"Make your life a masterpiece; imagine no limitations on what you can be, have, or do. -Brian Tracy",
"Doubt kills more dreams than failure ever will. -Suzy Kassem",
"No matter how hard the past, you can always begin again. -Buddha",  
"Everything you can imagine is real. -Pablo Picasso",
"Every accomplishment starts with the decision to try. -John F. Kennedy",
"Do what you love, and you’ll never work a day in your life. -Confucius", 
"Small steps in the right direction can turn out to be the biggest step of your life. -Naeem Callaway", 
"Be stubborn about your goals and flexible about your methods. -Unknown",
"If the plan doesn’t work, change the plan but never the goal. -Unknown",
"Don’t stop when you’re tired. Stop when you’re done. -Unknown",
"Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Gandhi",  
"Don’t tell people your plans. Show them your results. -Unknown",  
"Push yourself, because no one else is going to do it for you. -Unknown",  
"You are braver than you believe, stronger than you seem, and smarter than you think. -A.A. Milne",  
"We become what we think about. -Earl Nightingale",
"Difficulties in life are intended to make us better, not bitter. -Dan Reeves",  
"Hustle until your haters ask if you’re hiring. -Unknown",
"The expert in anything was once a beginner. -Helen Hayes",
"Rise above the storm, and you will find the sunshine. -Mario Fernández",   
"Keep going. Everything you need will come to you at the perfect time. -Unknown", 
"It does not matter how slowly you go as long as you do not stop. -Confucius", 
"You don’t have to be perfect to be amazing. -Unknown",
"Don’t quit. Suffer now and live the rest of your life as a champion. -Muhammad Ali", 
"A goal without a plan is just a wish. -Antoine de Saint-Exupéry",
"Don’t compare yourself to others. Compare yourself to the person you were yesterday. -Unknown", 
"The man who moves a mountain begins by carrying away small stones. -Confucius",
"Pain is temporary. Quitting lasts forever. -Lance Armstrong",
"The secret of success is to do the common thing uncommonly well. -John D. Rockefeller",  
"Courage is resistance to fear, mastery of fear—not absence of fear. -Mark Twain",
"Nothing worth having comes easy. -Theodore Roosevelt",
"You can’t go back and change the beginning, but you can start where you are and change the ending. -C.S. Lewis",
"If you want to lift yourself up, lift up someone else. -Booker T. Washington",
"Work hard in silence; let success make the noise. -Frank Ocean",
"It’s never too late to be what you might have been. -George Eliot",  
"If you really want to do something, you'll find a way. If you don’t, you’ll find an excuse. -Jim Rohn", 
"You were born to be a player. You were meant to be here. This moment is yours. -Herb Brooks",
"Just one small positive thought in the morning can change your whole day. -Dalai Lama",
"Be so good they can’t ignore you. -Steve Martin",
"A good plan violently executed now is better than a perfect plan executed next week. -George S. Patton",  
"Do what you have to do until you can do what you want to do. -Oprah Winfrey",
"Success is getting what you want. Happiness is wanting what you get. -Dale Carnegie", 
"Discipline is the bridge between goals and accomplishment. -Jim Rohn",
"Make each day your masterpiece. -John Wooden",
"Don't let yesterday take up too much of today. -Will Rogers", 
"Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",


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
