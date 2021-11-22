/** @format */

import React from "react";

const Restaurants = () => {
  return (
    <div className='mx-8 my-8 p-2 text-center bg-gray-300 shadow-md hover:shadow-lg'>
      <img
        className='px-4 pt-4 w-full m-auto'
        src='./img/images (1).jpeg'
        alt='McDonald'
      />
      <div className='px-2 pt-2'>
        <h3 className='text-black font-bold'>Dominos Pizza</h3>
        <p className='text-gray-900'>Minna, Niger State Nigeria</p>
        <button className='font-md text-white w-full rounded-sm py-1 px-2 my-4 bg-red-600 hover:bg-yellow-500 '>
          View Our Menu
        </button>
      </div>
    </div>
  );
};

export default Restaurants;
