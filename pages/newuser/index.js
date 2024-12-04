import { useState } from 'react';

const DateTimeInput = ({ initialDate = '', initialTime = '', initialPeriod = 'AM' }) => {
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);
  const [period, setPeriod] = useState(initialPeriod);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
      {/* Date Input */}
      <label>
        <span style={{ marginRight: '10px' }}>Date of Birth</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            padding: '8px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </label>

      {/* Time Input */}
      <label>
        <span style={{ marginRight: '10px' }}>Time of Birth</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '70%',
            }}
          />

          {/* AM/PM Toggle */}
          <div
            style={{
              display: 'flex',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #ccc',
            }}
          >
            <button
              type="button"
              onClick={() => handlePeriodChange('AM')}
              style={{
                backgroundColor: period === 'AM' ? 'purple' : '#f5f5f5',
                color: period === 'AM' ? '#fff' : '#000',
                padding: '8px 16px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              AM
            </button>
            <button
              type="button"
              onClick={() => handlePeriodChange('PM')}
              style={{
                backgroundColor: period === 'PM' ? 'purple' : '#f5f5f5',
                color: period === 'PM' ? '#fff' : '#000',
                padding: '8px 16px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              PM
            </button>
          </div>
        </div>
      </label>
    </div>
  );
};

export default DateTimeInput;
