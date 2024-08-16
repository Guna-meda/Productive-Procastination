import { useState, useEffect } from "react";

const Preference = ({ value, onChange }) => {
  const [selectedPreference, setSelectedPreference] = useState("");
  const listPreference = [`Must`, `Optional`];

  useEffect(() => {
    setSelectedPreference(value);
  }, [value]);

  const handlePreferenceChange = (event) => {
    const newValue = event.target.value;
    setSelectedPreference(newValue);
    onChange(newValue);
  };

  return (
    <select
      id="Prefer"
      name="Prefer"
      value={selectedPreference}
      onChange={handlePreferenceChange}
    >
      <option value="" disabled hidden>
        Choose Compulsion
      </option>
      {listPreference.map((list) => (
        <option key={list} value={list}>
          {list}
        </option>
      ))}
      ;
    </select>
  );
};

export default Preference;
