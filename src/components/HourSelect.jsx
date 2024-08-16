const generateHours = () => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }
  return hours;
};

const HourSelect = ({ value, onChange }) => {
  const hours = generateHours();

  return (
    <select id="hours" name="hours" value={value} onChange={onChange}>
      {hours.map((hour) => (
        <option key={hour} value={hour}>
          {hour < 10 ? `0${hour}` : hour} hrs
        </option>
      ))}
    </select>
  );
};

export default HourSelect;
