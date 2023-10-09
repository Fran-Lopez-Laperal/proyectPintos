import React from 'react';
import { Link } from 'react-router-dom';

const CustomHomeLink = ({ to, text }) => {
  return (
    <div>
      <Link
        className="flex justify-center items-center w-48 h-full hover:bg-corporative-color2 transition-all duration-500 no-underline uppercase"
        to={to}
      >
        <p style={{ backgroundColor: 'none' }}>{text}</p>
      </Link>
    </div>
  );
};

export default CustomHomeLink;
