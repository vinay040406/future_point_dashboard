import ApexCharts from "apexcharts";
const AttendanceData = () => {
  var options = {
    series: [44, 55, 41],
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  return (
    <div id="chart" className="bg">
      hi
    </div>
  );
};

export default AttendanceData;
