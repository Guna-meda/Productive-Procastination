import "../App.css";

function Card({ mustTasks, optionalTask, removeTask }) {
  return (
    <div className="boxes">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">MUST</div>
        <ul className="list-group list-group-flush">
          {mustTasks.map((task, index) => (
            <li key={index} className="list-group-item">
              {task}
              <button
                className="btn btn-danger btn-sm  float-end"
                style={{
                  backgroundColor: "#885c48",
                  color: "white",
                  border: "#885c48",
                }}
                onClick={() => removeTask("Must", index)}
              >
                &#8722;
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">OPTIONAL</div>
        <ul className="list-group list-group-flush">
          {optionalTask.map((task, index) => (
            <li key={index} className="list-group-item">
              {task}
              <button
                className="btn btn-danger btn-sm float-end"
                style={{
                  backgroundColor: "#885c48",
                  color: "white",
                  border: "#885c48",
                }}
                onClick={() => removeTask("Optional", index)}
              >
                &#8722;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
