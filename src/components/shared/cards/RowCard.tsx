import { FC } from "react"
interface Props {
    title: string,
    subtitle: string
    isReversed?: boolean,
    imgUrl?: string,
}
export const RowCard:FC<Props> = ({title,subtitle, isReversed = false,imgUrl = "https://via.placeholder.com/600/92c952"}) => {
  return (
    <div className={`card-row-container  `}>
    <div className={`card-row ${isReversed ?  "isReversed" : ""}`}>
        <img src={imgUrl} height={350} width={500} alt="img" />
        <div className="row-title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        </div>
    </div>
    </div>
  )
}
