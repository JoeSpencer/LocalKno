import React from 'react';
import ImageUpload from '../ImageUpload';
import Card from '../Card';


const Landing = () => (
  
  <div class="container mx-auto p-2">
  <h1 class="text-3xl py-8">Landing</h1>
    <ImageUpload />
    <Card />
  </div>
);

export default Landing;