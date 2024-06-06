import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendaryIA = () => {
  const [date, setDate] = useState(new Date());
  const [dateTexts, setDateTexts] = useState({});

  const handleConcatenate = () => {
    const concatenatedText = `${input1}\n${input2}\n${input3}`;
    const dateKey = date.toISOString().split('T')[0];
    setDateTexts({ ...dateTexts, [dateKey]: concatenatedText });
  };

  return (
    <div className="flex">
      {/* Calendário */}
      <div className="w-2/3 p-4">
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* Caixa de texto */}
      <div className="w-1/3 p-4 bg-gray-100 rounded-lg shadow">
        <p className="text-lg font-semibold mb-2">Conteúdo do Dia:</p>
        <textarea
          className="w-full h-40 p-2 border rounded"
          value={dateTexts[date.toISOString().split('T')[0]] || 'Nenhum texto para esta data'}
          readOnly
        />
      </div>
    </div>
  );
};

export default CalendaryIA;
