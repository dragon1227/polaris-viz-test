import { LineChart } from "@shopify/polaris-viz";
// import mockupData from '../../data/series.json'
import mockupData2 from '../../data/data_by_month.json'
// import annotationData from '../../data/annotations.json'

const ShowPage = () => {

    console.log ('hh')

    return (
        <>
            <div className="chart-container">
                <LineChart
                    // annotations={annotationData}
                    data={mockupData2}
                    isAnimated={true}
                    emptyStateText="No data available"
                    // renderLegendContent={() => <div>Legend</div>}
                    // renterTooltipContent={() => <div>Tooltip</div>}
                    showLegend={true}
                    skipLinkText="Skip to content"
                    state="Success"
                    // theme="default"
                    xAxisOptions={{
                        // axisTitle: "X Axis",
                        // axisTitleHidden: false,
                        // axisTitleShift: 0,
                        // axisTitleVerticalShift: 0,
                        // axisTitleWrapLabel: false,
                        // axisTitleWrapLabelOffset: 0,
                        // axisTitleWrapLabelPadding: 0,
                        // axisTitleWrapLabelShift: 0,
                        // axisTitleWrapLabelWrapText: false,
                        // axisTitleWrapLabelWrapTextLimit: 0,
                        // axisTitleWrapLabelWrapTextOverflow: false,
                        // axisTitleWrapLabelWrapTextShift: 0, 
                        // labelFormatter: function formatXAxisLabel(value){
                        //     return new Intl.NumberFormat("en",{style:"currency",currency:"CAD",currencyDisplay:"symbol"}).format(value)
                        // },
                        // hide: true,
                    }}
                    yAxisOptions={{
                        // labelFormatter: function formatYAxisLabel(value){
                        //     return new Intl.NumberFormat("en",{style:"currency",currency:"CAD",currencyDisplay:"symbol"}).format(value)
                        // },
                    }}
                    style={{
                        height: '1000px'
                    }}
                />
            </div>
        </>
    )
}

export default ShowPage