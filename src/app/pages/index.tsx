'use client'
import { useState } from 'react';
import useSWR from 'swr';
import { Review } from '@/app/interfaces/interface';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const ReviewsPage = () => {
  const [filter, setFilter] = useState<string>('');
  const { data: reviews, error } = useSWR<Review[]>(`/api/reviews?rating=${filter}`, fetcher);

  if (error) return <div>Помилка завантаження відгуків</div>;
  if (!reviews) return <div>Завантаження...</div>;

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleFilterChange('highest')}
        >
          Найвища оцінка
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleFilterChange('lowest')}
        >
          Найнижча оцінка
        </button>
      </div>
      <div>
        {reviews && reviews.map((review: Review) => (
          <div key={review.id} className="border p-4 my-2">
            <div className="font-bold">{review.author}</div>
            <div>{review.date}</div>
            <div>Оцінка: {review.rating}</div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;