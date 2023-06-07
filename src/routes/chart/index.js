import { Route, Routes } from "react-router-dom";
import ShowChartPage from "../../pages/chart/show"

const ChartRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" Component={ShowChartPage} />
        </Routes>
    );
}

export default ChartRoutes;
