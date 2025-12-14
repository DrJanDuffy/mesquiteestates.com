"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { FaCheckCircle, FaUserTie, FaCog, FaChartLine } from 'react-icons/fa';

export default function Services() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">Real Estate Services in Mesquite, Nevada</h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-4">
          Dr. Jan Duffy and BHHS Nevada Properties offer comprehensive real estate services tailored to help you find your 
          dream home in beautiful Mesquite, Nevada. From custom lots to move-in-ready homes, we&apos;re here to guide you every step of the way.
        </p>
        <p className="text-base text-gray-700 max-w-3xl mx-auto">
          As your trusted Mesquite realtor, Dr. Jan Duffy provides professional realtor services that encompass all aspects of 
          buying and selling real estate in Mesquite. Our expertise in Mesquite homes, golf course properties, and custom lots 
          ensures that clients receive expert guidance throughout their real estate journey. Whether you&apos;re seeking golf homes 
          on championship courses, family residences, or investment properties, our comprehensive realtor services make the process 
          of finding and purchasing Mesquite real estate smooth and successful.
        </p>
      </section>

      {/* H2 Section 1 */}
      <section className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">
          Comprehensive Real Estate Services in Mesquite
        </h2>
        <p className="text-base text-gray-700 mb-6">
          Our comprehensive real estate services in Mesquite are designed to meet the diverse needs of home buyers, sellers, 
          and investors. Dr. Jan Duffy's expertise as a Mesquite realtor ensures that clients receive professional services 
          tailored to the unique characteristics of the Mesquite real estate market. From golf homes and luxury properties to 
          custom lots and family residences, our realtor services encompass all aspects of Mesquite real estate transactions.
        </p>
        <p className="text-base text-gray-700 mb-6">
          Whether you&apos;re buying your first home in Mesquite, investing in golf course properties, or selling a residence, 
          our professional realtor services provide the expertise and support needed for successful transactions. The comprehensive 
          nature of our services ensures that clients have access to market knowledge, property evaluation, negotiation expertise, 
          and transaction coordination that simplifies the real estate process in Mesquite.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {[
          {
            title: "Custom Lot Sales",
            description: "Build your dream home on a custom lot. Choose from available lots starting at $70K in prime Mesquite locations with stunning views of the Virgin River Valley.",
            link: "/Property/Property_type"
          },
          {
            title: "Home Sales",
            description: "Browse our selection of beautiful homes ranging from $360K to $700K. From cozy starter homes to luxury estates, find the perfect property for your lifestyle.",
            link: "/Property/Property_type"
          },
          {
            title: "Real Estate Consultation",
            description: "Expert guidance on investing in Mesquite real estate. Learn about the market, neighborhood insights, and investment potential in this growing area.",
            link: "/Contact_us"
          },
          {
            title: "Property Investment",
            description: "Strategic investment advice for buyers looking to invest in Mesquite. Understand the growth potential and long-term value of properties in this desirable location.",
            link: "/Contact_us"
          },
          {
            title: "Area Expertise",
            description: "Deep knowledge of Mesquite, Nevada - from golf courses and resorts to schools and community amenities. Get insider information to make informed decisions.",
            link: "/About_Mesquite"
          },
          {
            title: "Full-Service Support",
            description: "Comprehensive support throughout your real estate journey - from initial consultation to closing and beyond. We&apos;re here to ensure a smooth experience.",
            link: "/Contact_us"
          }
        ].map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image src="/Image/services.webp" alt={service.title} width={500} height={300} className="rounded-lg mb-4 object-cover" />
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">{service.title}</h3>
            <p className="text-lg text-gray-600 mb-4">
              {service.description}
            </p>
            <Link href={service.link} className="text-xl font-bold border rounded-md py-2 px-4 text-white bg-indigo-900 hover:bg-indigo-800 transition duration-300 inline-block">
              Learn More
            </Link>
          </div>
        ))}
      </section>

      {/* H2 Section 2 */}
      <section className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Why Choose Mesquite Estates?</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
          Dr. Jan Duffy brings expertise, integrity, and personalized service to every real estate transaction. Our deep 
          knowledge of Mesquite and commitment to client satisfaction sets us apart in helping you find your perfect home.
        </p>
        <p className="text-base text-gray-700 mb-16 max-w-3xl mx-auto">
          As an experienced Mesquite realtor, Dr. Jan Duffy understands the unique characteristics of the Mesquite real estate 
          market, including golf homes, custom lots, and luxury properties. Her professional realtor services provide clients with 
          comprehensive support that makes finding and purchasing Mesquite homes efficient and enjoyable. Our commitment to 
          excellence ensures that every client receives personalized attention and expert guidance throughout their real estate journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FaUserTie, title: "Expert Agent", description: "Dr. Jan Duffy is an experienced real estate professional with BHHS Nevada Properties, specializing in Mesquite real estate." },
            { icon: FaCog, title: "Custom Options", description: "From custom lots to move-in-ready homes, we offer options tailored to your specific needs and budget ($70K-$700K)." },
            { icon: FaCheckCircle, title: "Client-Focused", description: "We prioritize your satisfaction and work tirelessly to help you find the perfect property that matches your lifestyle and goals." },
            { icon: FaChartLine, title: "Market Expertise", description: "Deep knowledge of the Mesquite market, area amenities, and investment potential to help you make informed decisions." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl">
              <item.icon className="text-4xl text-indigo-900 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-indigo-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* H2 Section 3 */}
      <section className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Our Real Estate Process in Mesquite</h2>
        <p className="text-base text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Our proven process for buying and selling Mesquite homes ensures that clients receive comprehensive support at every step. 
          Dr. Jan Duffy's expertise as a Mesquite realtor guides clients through consultation, property search, evaluation, negotiation, 
          and closing. This structured approach to realtor services ensures successful outcomes for buyers and sellers in the Mesquite 
          real estate market.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {[
            { step: "Consultation", desc: "Discuss your needs, budget, and preferences for your Mesquite home." },
            { step: "Property Search", desc: "Browse available custom lots and homes that match your criteria." },
            { step: "Viewing & Selection", desc: "Tour properties and get expert guidance on the best choice for you." },
            { step: "Closing & Beyond", desc: "Complete the transaction smoothly and provide ongoing support." }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">{item.step}</h3>
              <p className="text-center text-gray-600 max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Ready to Find Your Dream Home?</h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Contact Dr. Jan Duffy today to begin your journey to owning a home in beautiful Mesquite, Nevada. 
          We&apos;re here to help you discover the perfect property that fits your lifestyle and budget.
        </p>
        <div className="text-center">
          <Link href="/Contact_us" className="text-xl font-bold border rounded-md py-3 px-6 text-white bg-indigo-900 hover:bg-indigo-800 transition duration-300 inline-block">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}