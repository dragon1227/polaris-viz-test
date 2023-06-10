import { LineChart } from "@shopify/polaris-viz";
import mockupData from '../../data/series.json'
import mockupData1 from '../../data/data_by_week.json'
import mockupData2 from '../../data/data_by_month.json'
import moment from 'moment'
// import annotationData from '../../data/annotations.json'
import { useChart } from "../../context/ChartProvider";
import { useCallback, useEffect } from "react";

import { getOrders } from "../../model/order";

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
            let orders = getOrders({
                unit: displayOptions?.unit,
                from: displayOptions?.from,
                to: displayOptions?.to,
                period: displayOptions?.period,
                size: displayOptions?.size,
            })
            // console.log (orders)
            setTitle (orders?.url)
            setChartData(orders?.data)
            setStatus("Success")
        },1000)
    }, [displayOptions])

    return (
        <>
            <h1 className='text-center'>Orders over dates</h1>
            <div className="filter-container">
                <input className="form-control filter-control filter-select filter-unit" name="from" type="date" value={displayOptions?.from || ""} onChange={onFieldChange} />
                ~
                <input className="form-control filter-control filter-select filter-unit" name="to" type="date" value={displayOptions?.to || ""} onChange={onFieldChange} />
                By
                <select className="form-control filter-control filter-select filter-unit" name="period" value={displayOptions?.period || "week"} onChange={onFieldChange}>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                </select>
                Status:
                <select className="form-control filter-control filter-select filter-unit" name="status" value={status || "Success"} onChange={onStatusChange}>
                    <option value="Success">Success</option>
                    <option value="Loading">Loading</option>
                    <option value="Error">Error</option>
                </select>
            </div>
            <h6 className='text-center'>{status=="Success"?title:'...'}</h6>
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