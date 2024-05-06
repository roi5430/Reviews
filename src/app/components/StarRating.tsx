const StarRating =  ({ reviews }:{reviews:number}) => {
  const fullStars = Math.floor(reviews);
  const partialStar = reviews % 1; // дробова частина рейтингу
  const emptyStars = 5 - fullStars - (partialStar > 0 ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-green-500">★</span>
      ))}
      {partialStar > 0 && (
        <div className="text-green-500" style={{ width: `${partialStar * 100}%`, overflow: 'hidden' }}>
          ★
        </div>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="text-gray-300">☆</span>
      ))}
    </div>
  );
};

export default StarRating;