import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChartPage from "../pages/chart"
import { Link } from "react-router-dom";

const IndexRoutes = () => {
    return (
        <Router>
            <div className="layout-container">
                <div className="nav">
                    <div className="navbar-container">
                        <Link to='/' >Polaris viz Chart</Link>
                        <div className="navbar-links">
                            <Link to='/chart/order' >Orders Statistics</Link>
                            <Link to='/chart/sale' >Sales Statistics</Link>
                        </div>
                    </div>
                </div>
                <div className="page-container">
                    <Routes>
                        <Route exact path="/chart/*" Component={ChartPage} />
                    </Routes>
                </div>
                <div className="footer">
                    <p>Followed Shopify Polaris Styling Guideline</p>
                </div>
            </div>
        </Router>
    );
}

export default IndexRoutes;
