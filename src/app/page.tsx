'use client'
import { useState } from "react"
import ReviewList from "./components/ReviewList";
import { reviews } from "@/app/test/test"
import Select from "@/app/components/Select"
import { Review } from "./interfaces/interface";
import {AverageReviews} from "@/app/components/AverageReviews"

export default function Home() {
  const [filter, setFilter] = useState<string>('');
  const array: string[] = ['За рейтингом', 'За датою'];
    const Filter=():Review[] | undefined=>{
     if(filter==='За рейтингом'){
        return reviews.sort((a,b) => b.rating-a.rating);
      
     } else if(filter==='За датою')
     {
        
      return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());;
    } 
    };
    Filter();
  return (

    <div>
      
      <Select value={filter} setValue={setFilter} array={array}></Select>
      <ReviewList reviews={reviews}></ReviewList>
      <AverageReviews reviews={reviews} ></AverageReviews>
    </div>

  )
}