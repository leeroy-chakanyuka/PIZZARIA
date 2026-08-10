import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const someData = useLoaderData();
  console.log(someData);
  return (
    <li>
      {someData.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </li>
  );
}

export async function loader() {
  const menu = getMenu();
  return menu;
}

export default Menu;
