import React from "react";
import { Review } from "@/app/interfaces/interface";
import StarRating from "@/app/components/StarRating";

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 my-2">
          <h3 className="font-bold text-lg">
            {review.author}{" "}
            <span className="text-gray-500"> {review.date}</span>
          </h3>
          <div className="flex items-center mt-2">
            <StarRating reviews={review.rating} />
          </div>
          <p className="mt-2 text-gray-700">{review.content}</p>
        </div>
      ))}
    </div>
  );
};
export default ReviewList;
