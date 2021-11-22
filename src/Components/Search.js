/** @format */

import React from "react";

const Search = () => {
  return (
    <>
      <h1 className='text-center font-2 py-8 text-4xl font-bold text-red-500'>
        RestaurantHub
      </h1>
      <div className='flex items-center justify-center'>
        <input
          className='w-1/3 h-8 mx-2 px-2 text-md border-0 focus:outline-none rounded-sm placeholder-red-500 placeholder-opacity-50'
          type='text'
          placeholder='Search Restaurants Here...'
        />
        <input
          className=' hover:bg-yellow-500 h-8 w-32 rounded-sm text-xl bg-red-600 text-white cursor-pointer'
          type='submit'
          value='Search'
        />
      </div>
    </>
  );
};

export default Search;
