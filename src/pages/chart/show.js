import { LineChart } from "@shopify/polaris-viz";
import mockupData from '../../data/series.json'
import mockupData1 from '../../data/data_by_week.json'
import mockupData2 from '../../data/data_by_month.json'
import moment from 'moment'
// import annotationData from '../../data/annotations.json'
import { useChart } from "../../context/ChartProvider";
import { useCallback, useEffect } from "react";

const ShowPage = () => {

    const {
        chartData,
        setChartData,
        status,
        setStatus,
        errorMessage,
        setErrorMessage,
        chartOptions,
        setChartOptions,
        displayOptions,
        setDisplayOptions,
        title,
        setTitle,
    } = useChart()

    useEffect(() => {
        setStatus("Loading")
        setTimeout(() => {
            setChartData (mockupData2)
            setStatus("Success")
        }, 2000)
    },[])

    const onFieldChange = (e) => {
        const {name, value} = e.target;
        setDisplayOptions({
            ...displayOptions,
            [name]: value
        })
    }

    const onStatusChange = (e) => {
        const {name, value} = e.target;
        setStatus(value)
    }

    const formatXAxisLabel = useCallback((value) => {
        if (displayOptions?.unit === "day") {
            let date = new Date(value)
            return moment(date).format("DD MMM")
        } else if (displayOptions?.unit === "week") {
            return value?.substring(0, 7) || ''
        } else if (displayOptions?.unit === "month") {
            return value
        } else {
            return value
        }
    },[displayOptions])

    useEffect(() => {
        setStatus("Loading")
        setTimeout(() => {
            switch (displayOptions?.unit) {
                case "day":
                    setChartData(mockupData)
                    break;
                case "week":
                    setChartData(mockupData1)
                    break;
                case "month":
                    setChartData(mockupData2)
                    break;
                default:
                    break;
            }
            setStatus("Success")
        },1000)
    }, [displayOptions])

    return (
        <>
            <div className="filter-container">
                <select className="form-control filter-control filter-select filter-unit" name="unit" value={displayOptions?.unit || "month"} onChange={onFieldChange}>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                </select>
                <select className="form-control filter-control filter-select filter-unit" name="status" value={status || "Success"} onChange={onStatusChange}>
                    <option value="Success">Success</option>
                    <option value="Loading">Loading</option>
                    <option value="Error">Error</option>
                </select>
            </div>
            <div className="chart-container">
                <LineChart
                    // annotations={annotationData}
                    data={chartData || []}
                    isAnimated={true}
                    emptyStateText={errorMessage || "No data available"}
                    // renderLegendContent={() => <div>Legend</div>}
                    // renterTooltipContent={() => <div>Tooltip</div>}
                    showLegend={true}
                    skipLinkText="Skip to content"
                    state={status}
                    // theme="default"
                    xAxisOptions={{
                        labelFormatter: formatXAxisLabel,
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