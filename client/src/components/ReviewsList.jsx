import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTemplate from './ReviewTemplate';

const ReviewsList = ({ reviews }) => (
  <div>
    <ReviewTemplate reviews={reviews} />
  </div>
);

export default ReviewsList;
