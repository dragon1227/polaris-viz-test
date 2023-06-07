import {PolarisVizProvider} from '@shopify/polaris-viz';
import '@shopify/polaris-viz/build/esm/styles.css';
import ChartRoutes from '../../routes/chart';

export default () => {
    return (
        <PolarisVizProvider>
            <ChartRoutes />
        </PolarisVizProvider>
    );
}