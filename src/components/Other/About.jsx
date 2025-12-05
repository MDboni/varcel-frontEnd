import React from "react";

const InfoSection = ({ title, text, image, reverse }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-6 my-12`}
    >
      <div className="lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        About CourseMaster
      </h1>

      <InfoSection
        title="Our Mission"
        text="At CourseMaster, we aim to provide high-quality online education to students worldwide. Our platform ensures easy access to top instructors and courses, helping learners achieve their goals efficiently."
        image="https://images.unsplash.com/photo-1596495577886-d920f1fb511b?auto=format&fit=crop&w=800&q=80"
      />

      <InfoSection
        title="Our Vision"
        text="We envision a world where anyone, anywhere can learn anything. With our modern EdTech platform, students can upskill themselves and become future-ready professionals."
        image="https://images.unsplash.com/photo-1554774853-d11a37b6f6fc?auto=format&fit=crop&w=800&q=80"
        reverse
      />

      <InfoSection
        title="Our Values"
        text="Integrity, innovation, and inclusivity are at the heart of CourseMaster. We constantly strive to improve our platform and ensure every student has an enriching learning experience."
        image="https://images.unsplash.com/photo-1581091215368-0d8bb918f9a5?auto=format&fit=crop&w=800&q=80"
      />
    </div>
  );
};

export default About;
