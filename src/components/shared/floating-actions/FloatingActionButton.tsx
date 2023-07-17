import {  useEffect, useState } from 'react';

export const FloatingActionButton = () => {
  
  const [isWhatsapp, setIsWhatsapp] = useState<boolean>(true);

  const onIconChange = () => {
    setIsWhatsapp(!isWhatsapp );
  }
  useEffect(() => {
    setTimeout(() => {
      onIconChange()
    }, 10000);
  
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWhatsapp]);
  return (
    <>
    <div className="floating-action-btn" onClick={()=> location.href = "https://www.facebook.com/"}>
     {
      isWhatsapp ?  <i className="fa-brands fa-whatsapp"></i>
     : <i className={`fa-brands fa-facebook`} style={{color: "#3b5998"}}></i>
    
  } 
    </div>
    </>
  )
}
