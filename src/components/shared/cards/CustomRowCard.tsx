
export const CustomRowCard = ( {children}:any) => {
  return (
    <div className={`card-row-container  `}>
    <div className={`card-row isReversed`}>
    <img src={"https://thehubbackend.com/media/15663-core-values.jpg"} height={400} width={500} alt="img" />
        {children}
    </div>
    </div>
  )
}
