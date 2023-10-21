import { ApexOptions } from 'apexcharts';
import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from "axios";

interface ChartFourState {
  series: { data: number[] }[];
}

const RevenueTrendChart: React.FC = () => {
  const [leadsState, setLeadsState] = useState([]);
  const [state, setState] = useState<ChartFourState>({
    series: [
      {
        data: leadsState,
      },
    ],
  });

  useEffect(() => {
    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const fetchData = async (startDate, endDate, setLeadsState) => {
      try {
        const response = await axios.get("http://localhost:3011/api/leads/", {
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
          item.amount = Math.floor(item.amount * (Math.random() * (0.7 - 0.2) + 0.2));
          const itemDate = new Date(item.date);
          const dayOfMonth = itemDate.getDate() - 1;
          monthlyRevenueData[dayOfMonth] += item.amount;

        });

        setLeadsState(monthlyRevenueData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData('2023-09-01', '2023-09-30', setLeadsState);
  }, []);

  useEffect(() => {
    setState({
      series: [
        {
          data: leadsState,
        },
      ],
    });
  }, [leadsState]);

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
