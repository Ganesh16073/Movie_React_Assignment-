import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Developed by <span className="font-bold">Ganesh Kulkarni</span>
        </p>
        <p className="text-sm">
          Gmail: <a href="mailto:ganeshkulkarni4237@gmail.com" className="text-blue-400">ganeshkulkarni4237@gmail.com</a>
        </p>
        <p className="text-sm">
          Tech Skills: <span className="font-medium">Spring Boot, React JS</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
