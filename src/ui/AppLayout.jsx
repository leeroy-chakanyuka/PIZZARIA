import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import LoaderComponent from "./LoaderComponent";
import SearchOrder from "../features/order/SearchOrder";

function AppLayout() {
  const navi = useNavigation();
  // log this to the console to see
  const loading = navi.state === "loading";

  return (
    <div className="layout">
      {/* this is unlike we normally do, all the components are under the loader, when loading is false
          only the components go away */}
      {loading && <LoaderComponent />}
      <Header />

      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
