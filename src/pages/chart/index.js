import {PolarisVizProvider} from '@shopify/polaris-viz';
import '@shopify/polaris-viz/build/esm/styles.css';
import ChartRoutes from '../../routes/chart';
import { ChartProvider } from '../../context/ChartProvider';

const ChartPage = () => {
    return (
        <ChartProvider>
            <PolarisVizProvider>
                <ChartRoutes />
            </PolarisVizProvider>
        </ChartProvider>
    );
}

export default ChartPage
