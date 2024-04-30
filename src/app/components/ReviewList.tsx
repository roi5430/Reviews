import React from 'react';
import { Review } from '@/app/interfaces/interface';

interface Props {
  reviews: Review[];
}

const ReviewList: React.FC<Props> = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <div
          key={review.id}
          className='border p-4 my-2'
        >
          <h3 className='font-bold'>
            {review.author} <span> {review.date}</span>
          </h3>
          <div>
            {" "}
            Оцінка:
            {review.rating}
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};
export default ReviewList;