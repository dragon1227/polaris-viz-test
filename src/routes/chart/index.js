import { Route, Routes } from "react-router-dom";
import OrderPage from "../../pages/chart/order"
import SalesPage from "../../pages/chart/sale"

const ChartRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" Component={OrderPage} />
            <Route exact path="/order" Component={OrderPage} />
            <Route exact path="/sale" Component={SalesPage} />
        </Routes>
    );
}

export default ChartRoutes;
