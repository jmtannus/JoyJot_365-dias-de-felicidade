import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa os estilos padrão do react-calendar

const Calendario = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow">
      <Calendar
        onChange={setDate}
        value={date}
        className="border-t border-gray-300"
        tileClassName="hover:bg-gray-200"
        navigationLabel={({ label }) => (
          <p className="text-lg font-semibold text-gray-700">{label}</p>
        )}
        prev2Label={null}
        next2Label={null}
        prevLabel={<span className="text-gray-600">{'<'}</span>}
        nextLabel={<span className="text-gray-600">{'>'}</span>}
        tileContent={({ date, view }) => (
          view === 'month' && date.getDate() === new Date().getDate() ?
          <p className="text-sm bg-blue-500 text-white p-1 rounded-full">{date.getDate()}</p> :
          null
        )}
      />
    </div>
  );
};

export default Calendario;
