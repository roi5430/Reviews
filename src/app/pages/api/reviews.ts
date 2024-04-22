import type { NextApiRequest, NextApiResponse } from 'next';
import { Review } from '@/app/interfaces/interface';
const reviews: Review[] = [
    // ... ваші відгуки тут ...
  ];
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Review[]>
  ){
    // Фільтрація відгуків за запитом
    const { query } = req;
    const filteredReviews = reviews.filter(review => {
      if (query.rating === 'highest') {
        return review.rating === 5;
      } else if (query.rating === 'lowest') {
        return review.rating === 1;
      }
      return true;
    });
  
    res.status(200).json(filteredReviews);
  }