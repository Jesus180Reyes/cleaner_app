
export const CustomRowCard = ( {children}:any) => {
  return (
    <div className={`card-row-container  `}>
    <div className={`card-row isReversed`}>
    <img src={"https://via.placeholder.com/600/92c952"} height={400} width={500} alt="img" />
        {children}
    </div>
    </div>
  )
}
