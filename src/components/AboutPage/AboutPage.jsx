import React from 'react';

function AboutPage() {
  return (
    <div className="container mx-auto max-w-lg my-8 flex items-center">
      <div className="w-1/2 pr-8">
        
        <img src="/images/IntelliuDHead.png" alt="Intelliu Logo" className="w-full mb-4" />
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Intelliu</h2>
        <p className="mb-4">
          Intelliu is a platform dedicated to providing valuable information and services. Our mission is to empower users with knowledge and tools to help them succeed.
        </p>
        <p className="mb-4">
          This about page is for anyone to read and learn more about our platform's purpose and goals.
        </p>
        <p>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;

