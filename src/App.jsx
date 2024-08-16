import "./App.css";
import AddPlan from "./components/AddPlan.jsx";
import Card from "./components/Card.jsx";
import { useState } from "react";
import HourCounter from "./components/HourCounter.jsx";

function App() {
  const [mustTasks, setMustTasks] = useState([]);
  const [optionalTask, setOptionalTask] = useState([]);

  const calculateTotalHours = (tasks) => {
    return tasks.reduce((total, task) => {
      const hours = parseInt(task.split("-")[1].replace("hrs", "").trim(), 10);
      return total + hours;
    }, 0);
  };

  const removeTask = (type, index) => {
    if (type === "Must") {
      const updatedTasks = [...mustTasks];
      updatedTasks.splice(index, 1);
      setMustTasks(updatedTasks);
    } else {
      const updatedTasks = [...optionalTask];
      updatedTasks.splice(index, 1);
      setOptionalTask(updatedTasks);
    }
  };

  const totalMustHours = calculateTotalHours(mustTasks);
  const totalOptionalHours = calculateTotalHours(optionalTask);
  const totalHours = totalMustHours + totalOptionalHours;

  return (
    <>
      <h1>Productive Procastination</h1>
      <h4>Plan your day</h4>
      <AddPlan
        mustTasks={mustTasks}
        setMustTasks={setMustTasks}
        optionalTask={optionalTask}
        setOptionalTask={setOptionalTask}
        totalHours={totalHours}
        calculateTotalHours={calculateTotalHours}
      ></AddPlan>
      <HourCounter totalHours={totalHours}></HourCounter>
      <Card
        mustTasks={mustTasks}
        optionalTask={optionalTask}
        removeTask={removeTask}
      ></Card>
    </>
  );
}

export default App;
