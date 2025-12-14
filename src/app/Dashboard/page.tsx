"use client";
import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { FaChartLine, FaHome, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const MarketAnalysis: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="bg-gradient-to-r from-blue-900 to-indigo-800 shadow-lg p-6 mb-8 rounded-lg text-white">
            <div className="flex items-center mb-2">
              <FaChartLine className="mr-4 text-3xl" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Mesquite, Nevada Real Estate Market Analysis
              </h1>
            </div>
            <p className="text-blue-100 text-lg mt-2">
              Comprehensive market insights and trends for Mesquite Estates and surrounding areas
            </p>
          </header>

          {/* Market Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center justify-between mb-3">
                <FaHome className="text-blue-600 text-2xl" />
                <span className="text-green-600 font-semibold">+12.5%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Median Home Price
              </h3>
              <p className="text-3xl font-bold text-blue-600">$485,000</p>
              <p className="text-sm text-gray-500 mt-1">Up from $431,000</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center justify-between mb-3">
                <FaMapMarkerAlt className="text-green-600 text-2xl" />
                <span className="text-green-600 font-semibold">+8.3%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Active Listings
              </h3>
              <p className="text-3xl font-bold text-green-600">142</p>
              <p className="text-sm text-gray-500 mt-1">Homes available</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
              <div className="flex items-center justify-between mb-3">
                <FaDollarSign className="text-yellow-600 text-2xl" />
                <span className="text-red-600 font-semibold">-5.2%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Days on Market
              </h3>
              <p className="text-3xl font-bold text-yellow-600">67</p>
              <p className="text-sm text-gray-500 mt-1">Average listing time</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center justify-between mb-3">
                <FaChartLine className="text-purple-600 text-2xl" />
                <span className="text-green-600 font-semibold">+15.7%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Price Per Sq Ft
              </h3>
              <p className="text-3xl font-bold text-purple-600">$248</p>
              <p className="text-sm text-gray-500 mt-1">Average per square foot</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Price Trends */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                12-Month Price Trends
              </h2>
              <div className="h-[350px]">
                <Line
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                      {
                        label: "Median Sale Price",
                        data: [425000, 435000, 440000, 450000, 460000, 470000, 475000, 480000, 478000, 482000, 483000, 485000],
                        borderColor: "#2563eb",
                        backgroundColor: "rgba(37, 99, 235, 0.1)",
                        fill: true,
                        tension: 0.4,
                      },
                      {
                        label: "Average Sale Price",
                        data: [445000, 455000, 460000, 470000, 480000, 490000, 495000, 500000, 498000, 502000, 505000, 508000],
                        borderColor: "#10b981",
                        backgroundColor: "rgba(16, 185, 129, 0.1)",
                        fill: true,
                        tension: 0.4,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                      tooltip: {
                        callbacks: {
                          label: function(context) {
                            return context.dataset.label + ": $" + context.parsed.y.toLocaleString();
                          }
                        }
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: false,
                        ticks: {
                          callback: function(value) {
                            return "$" + value.toLocaleString();
                          }
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>

            {/* Market Activity */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Market Activity by Quarter
              </h2>
              <div className="h-[350px]">
                <Bar
                  data={{
                    labels: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"],
                    datasets: [
                      {
                        label: "Homes Sold",
                        data: [28, 35, 42, 38],
                        backgroundColor: "#2563eb",
                      },
                      {
                        label: "New Listings",
                        data: [32, 40, 48, 45],
                        backgroundColor: "#10b981",
                      },
                      {
                        label: "Pending Sales",
                        data: [18, 22, 26, 24],
                        backgroundColor: "#f59e0b",
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>

          {/* Property Types & Recent Sales */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Property Type Distribution */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Property Types in Mesquite
              </h2>
              <div className="h-[350px]">
                <Doughnut
                  data={{
                    labels: ["Single Family", "Golf Course Homes", "Condos/Townhomes", "Luxury Estates"],
                    datasets: [
                      {
                        data: [52, 28, 15, 5],
                        backgroundColor: [
                          "#2563eb",
                          "#10b981",
                          "#f59e0b",
                          "#8b5cf6",
                        ],
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "right",
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Recent Sales */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Recent Market Activity
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Property Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Area</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Golf Course Home</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Conestoga Golf</td>
                      <td className="px-4 py-3 text-sm font-semibold text-blue-600">$625,000</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                          Sold
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Single Family</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Mesquite Estates</td>
                      <td className="px-4 py-3 text-sm font-semibold text-blue-600">$485,000</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Single Family</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Virgin River Valley</td>
                      <td className="px-4 py-3 text-sm font-semibold text-blue-600">$542,000</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                          Sold
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Luxury Estate</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Palms Golf Course</td>
                      <td className="px-4 py-3 text-sm font-semibold text-blue-600">$895,000</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Condo/Townhome</td>
                      <td className="px-4 py-3 text-sm text-gray-700">CasaBlanca Area</td>
                      <td className="px-4 py-3 text-sm font-semibold text-blue-600">$368,000</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                          Sold
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Golf Course Home</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Falcon Ridge</td>
                      <td className="px-4 py-3 text-sm font-semibold text-blue-600">$575,000</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-6">Mesquite Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Market Overview</h3>
                <p className="text-blue-100 leading-relaxed">
                  The Mesquite real estate market continues to show strong growth, with median home prices 
                  increasing by 12.5% year-over-year. The area&apos;s appeal as a golf destination and 
                  proximity to Las Vegas (about an hour north) has driven steady demand. Golf course homes 
                  and luxury estates are particularly sought after, representing 28% of the market.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Trends</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Golf course properties command premium prices ($50K-$100K above average)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Increased interest from retirees and second-home buyers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Strong rental demand during golf season (October-April)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Inventory remains competitive with 67 days average on market</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in Mesquite Real Estate?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Dr. Jan Duffy specializes in Mesquite Estates and golf course properties. Get expert 
              market analysis and personalized guidance for your real estate needs.
            </p>
            <a
              href="/Contact_us"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              Contact Dr. Jan Duffy
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketAnalysis;
