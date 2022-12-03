import { Chart } from "react-google-charts";
import "../css/piechart.css"


export const options = {
  title: "Budget vs Expense",
};

const Charts = (props) => {
    const {sum ,budget}=props
    const data = [
        ["Budget vs task", "Amount in Rupees"],
        ["Budget", budget],
        ["Expances", sum],
       
    ]
    
  return (
    <div class="chart">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"300px"}
      height={"300px"}
    />
    </div>
    
  )
}
export default Charts