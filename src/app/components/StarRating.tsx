const StarRating = ({ rating }:{rating:number}) => {
    // Створюємо масив з п'яти елементів для п'яти зірок
    const stars = Array(5).fill(0);
  
    return (
      <div className="flex">
        {stars.map((_, index) => (
          <span key={index} className={index < rating ? "text-green-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };
  export default StarRating;