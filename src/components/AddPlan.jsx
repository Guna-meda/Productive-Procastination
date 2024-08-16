import HourSelect from "./HourSelect.jsx";
import Preference from "./Preference.jsx";
import { useState } from "react";

function AddPlan({
  mustTasks,
  optionalTask,
  setMustTasks,
  setOptionalTask,
  totalHours,
}) {
  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");
  const [compulsion, setCompulsion] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (!task || !hours || !compulsion) {
      setError("Please enter all fields.");
      return;
    }

    const newTaskHours = parseInt(hours, 10);

    if (totalHours + newTaskHours > 24) {
      setError("Total hours cannot exceed 24 hours. Adjust your tasks.");
      return;
    }

    const newTask = `${task} - ${hours}hrs`;

    if (compulsion === "Must") {
      setMustTasks([...mustTasks, newTask]);
    } else {
      setOptionalTask([...optionalTask, newTask]);
    }
    setTask("");
    setHours("00");
    setCompulsion("");
    setError("");
  };

  const clearErrorIfFilled = (fieldValue, setter) => (event) => {
    setter(event.target.value);
    if (task && hours && compulsion) {
      setError("");
    }
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-5  col enter">
            <input
              type="text"
              value={task}
              onChange={clearErrorIfFilled(task, setTask)}
              placeholder="Enter task"
            ></input>
          </div>
          <div className="col-2 col ">
            <HourSelect
              value={hours}
              className="givehours"
              onChange={clearErrorIfFilled(hours, setHours)}
            ></HourSelect>
          </div>
          <div className="col-4 col">
            <Preference
              value={compulsion}
              onChange={(value) => {
                setCompulsion(value);
                if (task && hours && value) {
                  setError("");
                }
              }}
            ></Preference>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary "
              onClick={handleAddTask}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      {error && <div className="text-danger mt-2">{error}</div>}
    </>
  );
}

export default AddPlan;
