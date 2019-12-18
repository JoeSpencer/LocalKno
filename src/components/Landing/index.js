import React from 'react';
import ImageUpload from '../ImageUpload';
import Card from '../Card';


const Landing = () => (
  
  <div className='container mx-auto p-2'>
  <h1 className='text-3xl py-8'>Landing</h1>
    <ImageUpload />
    <Card />
  </div>
);

export default Landing;