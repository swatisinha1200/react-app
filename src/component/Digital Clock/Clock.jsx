import { useState, useEffect } from 'react';
const Clock = () => {
    const [time, setTime] = useState();
    const showTime = () => {
        let date = new Date();
        let h = date.toLocaleTimeString();
        setTime(h);
    }
    useEffect(() => {
        let interval = setInterval(showTime, 1000); 
        return () => clearInterval(interval);
    }, []);
  return (
    <div className='container bg-dark text-center p-5 m-5 rounded'>
      <h1 className='text-white'>Digital Clock</h1>
          <div className='border border-5 border-success p-5 rounded'>
        <div className='bg-black text-success text-decoration-bold  p-5 rounded'>
        <div id="MyClockDisplay" className="clock" >
            <h2 className='text-center'>{time}</h2>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Clock
