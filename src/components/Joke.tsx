import "./jokes.scss"
export const Joke = ({joke , rating } :{joke:string , rating:number}) => {
  return (
    <div className="joke">
        <h4 className="jokename">{joke}</h4>
        <p className="rating">{rating}</p>
    </div>
  )
}
