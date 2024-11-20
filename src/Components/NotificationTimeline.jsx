import React from 'react';

const notifications = [
  {
    time: '2 hrs',
    status: 'updated',
    user: 'admin_branch',
    description: 'Harry Handoko - Contact | MYCRM',
    isPrimary: true,
  },
  {
    time: '2 hrs',
    status: 'updated',
    user: 'admin_branch',
    description: 'Harry Handoko - Application | MYCRM',
    isPrimary: false,
  },
  {
    time: '4 hrs',
    status: 'updated',
    user: 'admin_branch',
    description: 'Harry Handoko - Application | MYCRM',
    isPrimary: true,
  },
  {
    time: '4 hrs',
    status: 'updated',
    user: 'admin_branch',
    description: 'Harry Handoko - Contact | MYCRM',
    isPrimary: false,
  },
 
];

const NotificationTimeline = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4">NOTIFICATION</h2>
      <div className="relative">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-start mb-6">
            <div className="text-base md:text-xl text-gray-500 w-12 ">{notification.time}</div>
            <div className="flex items-center">
       
            <div className="h-full w-px bg-gray-300 absolute md:left-14 left-13 top-3 z-0"></div>
              <div
                className={`z-10 w-3 h-3 rounded-full ${
                  notification.isPrimary ? 'bg-primary' : 'bg-gray-400'
                }`}
              ></div>
            </div>
            <div className="ml-6">
              <div className="font-semibold text-base md:text-xl">
                {notification.user} has {notification.status}
              </div>
              <div className="text-base md:text-lg text-gray-500">{notification.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationTimeline;
