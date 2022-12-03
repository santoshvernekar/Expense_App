import { Chart } from "react-google-charts";
import "../css/piechart.css"

export const options = {
  title: "Expense",
};

const Charts1 = (props) => {
    const {expanseall}=props
    const data = expanseall
  
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
export default Charts1