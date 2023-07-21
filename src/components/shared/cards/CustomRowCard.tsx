
export const CustomRowCard = ( {children}:any) => {
  return (
    <div className={`card-row-container  `}>
    <div className={`card-row isReversed`}>
    <img src={"src/assets/3.png"} height={400} width={500} alt="img" />
        {children}
    </div>
    </div>
  )
}
