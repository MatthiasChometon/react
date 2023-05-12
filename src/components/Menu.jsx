import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../store";
import { addMenuItemAsync } from "../store/actions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Menu = () => {
  const items = useSelector(state => state.menuItems);
  const location = useLocation();

  useEffect(() => {
    store.dispatch(
      addMenuItemAsync({
        label: "About",
        path: "/about",
        active: false,
      })
    );
  }, [])

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={
                item.path === location.pathname ? "App-link active" : "App-link"
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
