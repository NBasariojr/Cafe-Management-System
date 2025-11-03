import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import { ArrowRight, Coffee, Clock, Award } from "lucide-react";
import { cafeInfo } from "@/shared/data/mockData";

const Home = () => {
  const features = [
    {
      icon: Coffee,
      title: "Premium Quality",
      description: "Sourced from the finest coffee beans around the world",
    },
    {
      icon: Clock,
      title: "Always Fresh",
      description: "Every cup is crafted with precision and care",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized globally for our exceptional brews",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {cafeInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {cafeInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default" className="group">
                <Link to="/menu">
                  View Menu
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild size="lg" variant='outline'>
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
