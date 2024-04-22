'use client'
import ReviewList from "./components/ReviewList" ;
import FilterButtons from "./components/FilterButtons";

export default async function Home() {
  
  return (
    <>
    <div>
      <ReviewList reviews={[]}></ReviewList>
      <FilterButtons onFilterChange={function (filter: string): void {
          throw new Error("Function not implemented.");
        } }></FilterButtons>
      </div>
    </>
  )
}