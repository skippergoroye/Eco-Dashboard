import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import HeroImage from "../assets/hero-logo.svg";





ChartJS.register(ArcElement, Tooltip, Legend);


const centerTextPlugin = {
  id: 'centerText',
  afterDraw: (chart) => {
    if (chart.config.options.plugins?.centerText) {
      const { ctx } = chart;
      const { centerText } = chart.config.options.plugins;
      const { text, font, color } = centerText;

      const { top, bottom, left, right } = chart.chartArea;

      ctx.save();
      ctx.font = font || 'bold 20px Arial';
      ctx.fillStyle = color || 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const centerX = (left + right) / 2;
      const centerY = (top + bottom) / 2;
      ctx.fillText(text, centerX, centerY);
      ctx.restore();
    }
  }
};

// Custom plugin to arrange legend items in a row
const legendRowPlugin = {
  id: 'legendRow',
  beforeInit: (chart) => {
    const originalFit = chart.legend.fit;
    chart.legend.fit = function fit() {
      originalFit.bind(chart.legend)();
      this.height = this.height / 2;
    };
  },
  afterUpdate: (chart) => {
    if (chart.legend) {
      const legendItems = chart.legend.legendItems;
      const legendContainer = chart.legend.legendHitBoxes;

      legendItems.forEach((_item, index) => {
        legendContainer[index].y = 0; // Align all items to the first row
      });
    }
  }
};

ChartJS.register(centerTextPlugin, legendRowPlugin);

export default function Hero() {
  const data = {
    labels: ['Environment', 'Community', 'Organization'],
    datasets: [
      {
        data: [20, 33, 34],
        backgroundColor: ['#32D272', '#36A2EB', '#F67218'],
        hoverBackgroundColor: ['#32D272', '#2EA2CF', '']
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      centerText: {
        text: 'Community Ambassador',
        font: '8px',
        color: '#000'
      }
    },
    cutout: '70%' // Controls the size of the doughnut hole
  };

  return (
    <section className="px-8 lg:px-16 py-12 lg:py-24 mx-auto max-w-[1440px]">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img src={HeroImage} alt="hero-image" className="w-full md:w-auto" />
          <div className="flex flex-col items-start gap-4 mt-4 md:mt-0 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 w-full justify-between">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                  <h1 className="text-lg md:text-xl lg:text-2xl">Micheal John</h1>
                  <span className="text-xs font-thin text-[#1DB559]">~Leader</span>
                </div>
                <span className="text-sm font-light text-[#292D32]">Lagos, Nigeria</span>
              </div>
              <button className="px-4 py-2 bg-[#1DB559] text-white mt-2 md:mt-0 rounded-full">Edit profile</button>
            </div>
            <p className="text-base text-[#474747]">Passionate data enthusiast unraveling hidden truths, unlocking possibilities through analytics, visualization, and the art of data. Empowering informed decisions, driving business success. <span className='text-[#1DB559]'>#DataEnthusiast #AnalyticsNinja</span></p>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 w-full lg:w-1/4 bg-white rounded-lg p-4 shadow-2xl">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </section>
  );
}


