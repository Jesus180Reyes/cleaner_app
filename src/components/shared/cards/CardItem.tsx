import { card_itemData } from "../../../data/card_item"

export const CardItem = () => {
  return (
    <div className="cleaner-item-container">
      {
        card_itemData.map(({title,icon},i) => {
          return <div key={i} className="item">
          <i className={icon}></i>
          <p>{title}</p>
          </div>
        })
      }
    </div>
      
  )
}
