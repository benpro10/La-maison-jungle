import { plantList } from "../Data/plantist";
import "../styles/ShoppingList.css"

// const plantList = [
//   "monstera",
//   "ficus lyrata",
//   "pothos agenté",
//   "yucca",
//   "palmier",
// ];

// const ListItems = plantList.map(plant => <li>{plant}</li>)

function ShoppingList() {
  const categories = [...new Set(plantList.map((plant) => plant.category))];
  return (
    <>
      <h2>Catégories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <h2>Plantes</h2>
      <ul className="lmjPlantList">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmjPlantItem">{plant.name} {plant.isSpecialOffer && <div className="lmjSales">Soldes</div>}</li>
        ))}
      </ul>
    </>

    // <ul>
    //   {plantList.map((plant, index) => (
    //     <li key={`${plant}-${index}`}>{plant}</li>
    //   ))}
    // </ul>

    // <ul>{ListItems}</ul>
  );
}

export default ShoppingList;
