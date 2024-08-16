function HourCounter({ totalHours }) {
  const maxHours = 24;

  const remainingHours = maxHours - totalHours;

  return (
    <div className="left">
      <div className="card hrleft">
        <div className="card-body">No. of hours left: {remainingHours} hrs</div>
      </div>
    </div>
  );
}
export default HourCounter;
