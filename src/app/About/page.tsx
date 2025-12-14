"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Team from "@/components/ui/About/Team";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            About Mesquite Estates
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Mesquite Estates offers beautiful homes and custom lots in Mesquite, Nevada, a friendly small-town 
            destination nestled in the scenic Virgin River Valley, just an hour north of Las Vegas. We are committed 
            to excellence and dedicated to helping you find your dream home in this desert paradise.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                Our Story
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Mesquite Estates represents the vision of bringing exceptional living experiences to the beautiful 
                Virgin River Valley. Under the leadership of Dr. Jan Duffy with BHHS Nevada Properties, we specialize 
                in helping clients discover their perfect home in Mesquite, Nevada.
              </p>
              <p className="text-base text-gray-600">
                Our journey is rooted in understanding the unique appeal of Mesquite - from its stunning desert landscapes 
                and world-class golf courses to its welcoming small-town community. We believe in fostering strong relationships 
                with our clients and delivering exceptional real estate services that help them achieve their dreams of living 
                in this desert paradise.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="/Image/story.png"
                alt="Our Story"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1">
              <Image
                src="/Image/mission.webp"
                alt="Our Mission"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                Our Mission
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Our mission is to help individuals and families discover their perfect home in Mesquite, Nevada. 
                We provide expert guidance in finding custom lots and homes that fit your lifestyle and budget, 
                from custom lots starting at $70K to beautiful homes ranging from $360K to $700K.
              </p>
              <p className="text-base text-gray-600">
                We are committed to excellence, integrity, and personalized service. Our goal is to create lasting value 
                for our clients by helping them invest in not just a property, but in a lifestyle enriched by Mesquite's 
                natural beauty, recreational opportunities, and welcoming community.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-8">
            Meet Our Team
          </h2>

          <div className="py-10 px-4 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto mb-4">
                    <Image
                      src="/Image/person1.jpeg"
                      alt="John Doe"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900">
                    John Doe
                  </h3>
                  <p className="text-gray-600">CEO & Founder</p>
                </div>
                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto mb-4">
                    <Image
                      src="/Image/person_2-min.jpg"
                      alt="Jane Smith"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">Chief Marketing Officer</p>
                </div>
                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto mb-4">
                    <Image
                      src="/Image/person_3-min.jpg"
                      alt="Michael Johnson"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900">
                    Michael Johnson
                  </h3>
                  <p className="text-gray-600">Head of Development</p>
                </div>
                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto mb-4">
                    <Image
                      src="/Image/agent1.jpg"
                      alt="Emily Davis"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900">
                    Emily Davis
                  </h3>
                  <p className="text-gray-600">Chief Financial Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Team />
      </div>
      <Footer />
    </>
  );
}
