import { FC } from "react";

interface Props {
    title: string;
    subtitle:string;
    imgUrl: string
    btnTitle?: string;
}
export const Banner:FC<Props> = ({title,subtitle,imgUrl,btnTitle}) => {
  const styles = {
    "backgroundImage": `linear-gradient(rgba(69, 69, 69, 0.6), rgba(76, 75, 75, 0.75)), url('${imgUrl}')`
  }
  return (
<div className="banner-container" style={styles} >
    <div className="title-container">
    <h1>{title}</h1>
    <p>{subtitle}</p>
    {
      btnTitle && <button className="btn">{btnTitle}</button>
    }
    
    </div>
 </div>
  )
}
