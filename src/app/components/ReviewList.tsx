import React from 'react';
import { Review } from '@/app/interfaces/interface';

interface Props {
  reviews: Review[];
}

const ReviewList: React.FC<Props> = ({ reviews }) => {
  return (
    <div>
      {reviews.map(review => (
        <div key={review.id} className="border p-4 my-2">
          <div className="font-bold">{review.author}</div>
          <div>{review.date}</div>
          <div>Оцінка: {review.rating}</div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;