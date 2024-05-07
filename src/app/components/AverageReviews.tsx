import React, { useState, useEffect } from "react";
import StarRating from "@/app/components/StarRating";
import { Review } from "@/app/interfaces/interface";

interface AverageReviewsProps {
  reviews: Review[];
}

const AverageReviews: React.FC<AverageReviewsProps> = ({ reviews }) => {
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const totalRating = reviews.reduce(
      (sum: number, review: Review) => sum + review.rating,
      0
    );
    setAverageRating(parseFloat((totalRating / reviews.length).toFixed(1)));
  }, [reviews]);

  return (
    <div>
      <p>
        Середній рейтинг: <strong>{averageRating}</strong>
      </p>
      <div className="flex items-center mt-2">
        <StarRating reviews={averageRating} />
      </div>
      <p>
        на основі <strong>{reviews.length}</strong> відгуків
      </p>
    </div>
  );
};

export default AverageReviews;
