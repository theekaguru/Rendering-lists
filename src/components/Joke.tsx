import "./jokes.scss"
export const Joke = ({joke , rating } :{joke:string , rating:number}) => {
 const ratingfunction = (rating: number) => {
    if (rating === 1) {
        return <span>★☆☆☆☆</span>
    }else if (rating === 2){
        return <span>★★☆☆☆</span>
    }else if (rating === 3){
        return <span>★★★☆☆</span>
    }else if (rating === 4){
        return <span>★★★★☆</span>
    }else if (rating === 5){
        return <span>★★★★★</span>
    }
    return <span>☆☆☆☆☆</span>

        
    
 }
    return (
    <div className="joke">
        <h4 className="jokename">{joke}</h4>
        <p className="rating">{ratingfunction(rating)}</p>
    </div>
  )
}
