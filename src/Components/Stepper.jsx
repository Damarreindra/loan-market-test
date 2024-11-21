import React from 'react';

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="p-2 md:p-4 w-full overflow-x-auto">
      <div className="flex justify-start md:justify-center items-center relative ">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`flex-1 flex items-center justify-center circleWrapper 
              ${index + 1 < currentStep && 'passed'}`}
          >
            <div className="flex flex-col items-center min-h-[4.5rem] xl:min-h-[6rem] w-full px-2">
              <div 
                className={`
                  w-4 h-4 md:w-5 md:h-5 
                  rounded-full 
                  flex items-center justify-center
                  z-10
                  ${index + 1 === currentStep 
                    ? 'bg-primary' 
                    : index + 1 < currentStep
                      ? 'bg-[#005274]'
                      : 'bg-gray-500'
                  }
                `}
              >
              </div>
              <span 
                className={`
                  mt-2 text-xs md:text-sm text-center font-semibold 
               
                  ${index + 1 === currentStep 
                    ? "text-primary" 
                    : index + 1 < currentStep 
                      ? "text-[#005274]"
                      : "text-gray-500"
                  }`}
              >
                {step}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;