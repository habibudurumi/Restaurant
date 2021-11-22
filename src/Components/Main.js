/** @format */

import React from "react";
import Restaurants from "./Restaurants";

const Main = () => {
  return (
    <div className=' my-12 w-11/12  bg-gray-100 mx-auto py-2'>
      <h2 className='text-left ml-8 font-medium text-2xl mt-8'>Restaurants</h2>
      <div className='grid grid-cols-4'>
        <Restaurants />
        <Restaurants />
        <Restaurants />
        <Restaurants />
        <Restaurants />
        <Restaurants />
        <Restaurants />
        <Restaurants />
      </div>
    </div>
  );
};

export default Main;
