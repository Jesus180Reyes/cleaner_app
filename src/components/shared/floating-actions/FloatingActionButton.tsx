import { FC } from 'react';
interface Props {
    icon?: string,
    
}
export const FloatingActionButton:FC<Props> = ({icon = "whatsapp"}) => {
  return (
    <>
    <div className="floating-action-btn">
    <i  className={`fa-brands fa-${icon}`}></i>
    </div>
    </>
  )
}
