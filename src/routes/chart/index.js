import { Route, Routes } from "react-router-dom";
import ShowChartPage from "../../pages/chart/show"

export default () => {
    return (
        <Routes>
            <Route exact path="/" Component={ShowChartPage} />
        </Routes>
    );
}