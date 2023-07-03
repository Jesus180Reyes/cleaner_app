import {  useEffect, useState } from 'react';

export const FloatingActionButton = () => {
  
  const [isWhatsapp, setIsWhatsapp] = useState<boolean>(true);

  const onIconChange = () => {
    setIsWhatsapp(!isWhatsapp );
    console.log(isWhatsapp);
  }
  useEffect(() => {
    setTimeout(() => {
      onIconChange()
    }, 10000);
  
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWhatsapp]);
  return (
    <>
    <div className="floating-action-btn">
    <i   className={`fa-brands fa-${isWhatsapp ? "whatsapp": "facebook"}`}></i>
    </div>
    </>
  )
}
