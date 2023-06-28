import { FC } from "react";

interface Props {
    title: string;
    subtitle:string;
    btnTitle: string;
}
export const Banner:FC<Props> = ({title,subtitle,btnTitle}) => {
  return (
<div className="banner-container">
    <div className="title-container">
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <button>{btnTitle}</button>
    </div>
 </div>
  )
}
