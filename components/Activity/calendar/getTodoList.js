import React from 'react';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';

// getTodoList 函數
export default function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: '10:30', title: 'Meeting' },
        { time: '12:00', title: 'Lunch' }
      ];
    case 15:
      return [
        { time: '09:30', title: 'Products' },
        { time: '12:30', title: 'Client' },
        { time: '02:00 pm', title: 'Product' },
        { time: '05:00 pm', title: 'teptance' },
        { time: '06:30 pm', title: 'Reporting' },
        { time: '10:00 pm', title: 'Goin walk the dog' }
      ];
    default:
      return [];
  }
}