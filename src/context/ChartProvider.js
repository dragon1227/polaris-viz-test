import { createContext, useContext, useState } from "react";

const ChartContext = createContext();

export default ChartContext;

export const useChart = () => useContext(ChartContext);

export const ChartProvider = ({ children }) => {

    const [chartData, setChartData] = useState()
    const [status, setStatus] = useState("Loading") // Loading, Success, Error
    const [errorMessage, setErrorMessage] = useState()
    const [chartOptions, setChartOptions] = useState({})
    const [displayOptions, setDisplayOptions] = useState({})
    const [title, setTitle] = useState("")

    return (
        <ChartContext.Provider value={{
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
        }}>
            {children}
        </ChartContext.Provider>
    );
}
