import React from 'react';
import { notifications } from '../Utils/DummyData';



const NotificationTimeline = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4">NOTIFICATION</h2>
      <div className="">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-center mb-6 justify-between odd:bg-primary  even:bg-white rounded-xl border border-gray-300 shadow-xl p-5">
            
            <div>
              <h1 className='md:text-xl text-base'>
                {notification.user} has {notification.status}
              </h1>
              <h1 className='md:text-base text-sm text-gray-600'>
                {notification.description}
              </h1>
            </div>
            <div className="text-sm md:text-base  text-gray-600">{notification.time} ago</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationTimeline;
