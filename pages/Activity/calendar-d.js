import Calendar from 'rsuite/Calendar';
// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/Calendar/styles/index.css';

export default function CalendarD() {
  return (
    <>
      <div className="music-container">
        <Calendar
          className="outline"
          bordered={false} />
      </div>
      <style jsx>{`
        .outline {
          border-radius: 0px;
          border: 1px solid #DBD7FF;
        }
      `}
      </style>
    </>
  )
}

