import React from 'react';

const Greenbtn = ({ title, onClick, className }) => {
  return (
    <button
      className={
        'border border-lightColor bg-lightColor text-darkColor hover:bg-transparent hover:text-lightColor rounded-md duration-300 ease-out ' +
        className
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Greenbtn;
