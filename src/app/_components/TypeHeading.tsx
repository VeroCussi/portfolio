import React from 'react';

interface TypeHeadingProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypeHeading: React.FC<TypeHeadingProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="whitespace-nowrap animate-[type_3s_steps(30,end)_1_normal_both]"
        style={{ animationDelay: `${delay}s` }}
      >
        {text}
        <span
          className="inline-block w-0.5 h-6 ml-1 animate-[cursor_1s_step-end_infinite]"
          style={{ 
            backgroundColor: 'rgb(6, 182, 212)',
            animationDelay: `${delay + 3}s` 
          }}
        />
      </div>
    </div>
  );
};

export default TypeHeading;
