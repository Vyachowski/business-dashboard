import { ApexOptions } from 'apexcharts';
import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from "axios";
import {baseUrl} from "../../App.tsx";

interface ChartFourState {
  series: { data: number[] }[];
}

const RevenueTrendChart: React.FC = () => {
  const [revenueState, setRevenueState] = useState([]);
  const [state, setState] = useState<ChartFourState>({
    series: [
      {
        data: revenueState,
      },
    ],
  });

  useEffect(() => {
    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const fetchData = async (startDate, endDate, setRevenueState) => {
      try {
        const response = await axios.get(`${baseUrl}/api/revenue/`, {
          params: {
            startDate,
            endDate,
            type: "daily",
          },
          withCredentials: true,
        });

        const daysInMonth = getDaysInMonth(
          new Date(startDate).getFullYear(),
          new Date(startDate).getMonth()
        );
        const monthlyRevenueData = new Array(daysInMonth).fill(0);

        response.data.result.forEach((item) => {
          const itemDate = new Date(item.date);
          const dayOfMonth = itemDate.getDate() - 1; // Subtract 1 to match array index
          monthlyRevenueData[dayOfMonth] += item.profit;
        });

        setRevenueState(monthlyRevenueData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData('2023-09-01', '2023-09-30', setRevenueState);
  }, []);

  useEffect(() => {
    setState({
      series: [
        {
          data: revenueState,
        },
      ],
    });
  }, [revenueState]);

  const options: ApexOptions = {
    colors: ['#3C50E0'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        // endingShape: "rounded",
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'inter',

      markers: {
        radius: 99,
      },
    },
    // yaxis: {
    //   title: false,
    // },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      x: {
        show: false,
      },
      // y: {
      //   formatter: function (val) {
      //     return val;
      //   },
      // },
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Last month
        </h3>
      </div>

      <div className="mb-2">
        <div id="chartFour" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default RevenueTrendChart;
