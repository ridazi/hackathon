
'use client';

import Navbar from './components/Navbar';

const Page = () => {
  return (
    <div>
      <Navbar />
      <main className="flex items-center justify-between p-6">
        {/* Left side: Image */}
        <div className="flex-shrink-0 w-1/2">
          <img src="Frame (2).png" alt="Image" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        
        {/* Right side: Text and Button */}
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nike Air Force 1<br/>PLT>AF>ORM</h2>
          <p className="text-lg text-gray-600 mb-6">
          This is some description text on the right side of the image. It could be anything you want to explain about the image.
            This is some description text on the right side of the image. It could be anything you want to explain about the image.
          </p>
          <h3>$8638.00</h3>
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition">
            Add To Cart
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;

