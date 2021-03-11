import React from 'react';
import { render, screen, cleanup, fireEvent, queryByTestId, act, queryByPlaceholderText } from '@testing-library/react';
import { query } from 'express';
import axios from 'axios';
import Reviews from '../client/src/components/reviews/Reviews';
import Characteristics from '../client/src/components/reviews/Characteristics';
import ReviewModal from '../client/src/components/reviews/ReviewModal';
import RatingBreakdown from '../client/src/components/reviews/RatingBreakdown';
import InteractiveStars from '../client/src/components/reviews/InteractiveStars';
import ReviewTemplate from '../client/src/components/reviews/ReviewTemplate';

const exampleReviews = [
  {
    review_id: 288195,
    rating: 4,
    summary: 'I am liking these glasses',
    recommend: false,
    response: null,
    body: 'They are very dark. But that\'s good because I\'m in very sunny spots',
    helpfulness: 2,
    reviewer_name: 'bigbrotherbenjamin',
    date: '2021-03-05T00:00:00.000Z',
    photos: [],
  },
  {
    review_id: 248270,
    rating: 4,
    summary: 'I am liking these glasses',
    recommend: true,
    response: 'glad you like it',
    body: 'Comfortable and practical.',
    helpfulness: 2,
    reviewer_name: 'shortandsweeet',
    date: '2019-04-14T00:00:00.000Z',
    photos: [
      {
        id: 417326,
        url: 'https://images.unsplash.com/photo-1560570803-7474c…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
      },
      {
        id: 417327,
        url: 'https://images.unsplash.com/photo-1561693532-9ff59…db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
      },
    ],
  },
];

const exampleMetaReviews = {
  product_id: '20101',
  ratings: {
    2: '1',
    3: '3',
    4: '2',
    5: '6',
  },
  recommended: {
    false: '5',
    true: '7',
  },
  characteristics: {
    Quality: {
      id: 67501,
      value: '3.5000000000000000',
    },
  },
};


describe('Reviews', () => {
  it('renders to the page correctly', () => {
    const { queryByText } = render(<Reviews />);
    expect(queryByText('sort-on-dropdown')).toBeTruthy;
  });
});

describe('Characteristics', () => {
  it('renders to the page correctly', () => {
    const { queryByText } = render(<Characteristics />);
    expect(queryByText('characteristic-map')).toBeTruthy;
  });
});

describe('Review Modal', () => {
  it('renders to the page correctly', () => {
    const { queryByText } = render(<ReviewModal />);
    expect(queryByText('review-modal')).toBeTruthy;
  });
});

describe('Rating Breakdown', () => {
  it('renders to the page correctly', () => {
    const { queryByText } = render(<RatingBreakdown
      reviews={exampleReviews}
      metaReviews={exampleMetaReviews}
      handleReviewAverage={() => console.log('review average')}
      charObject={{
        quality: { 1: '1' },
      }}
    />);
    expect(queryByText('breakdown-render')).toBeTruthy;
  });
});

describe('Interactive Stars', () => {
  it('renders to the page correctly', () => {
    const { getByText } = render(<InteractiveStars review={{ rating: 3 }} setReview={() => console.log('hi')} />);
    
    expect(getByText('hi')).toBeTruthy;
  });
});

describe('Review Template', () => {
  it('renders to the page correctly', () => {
    const { queryByText } = render(<ReviewTemplate review={exampleReviews[0]} />);
    expect(queryByText('review-template')).toBeTruthy;
  });
});
