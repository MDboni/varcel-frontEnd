import React, { useState } from "react";

const ProgressTracker = () => {
  // Dummy data representing course progress
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      totalLessons: 20,
      completedLessons: 8,
    },
    {
      id: 2,
      title: "Node.js Advanced",
      instructor: "Jane Smith",
      totalLessons: 15,
      completedLessons: 12,
    },
    {
      id: 3,
      title: "MERN Stack Full Course",
      instructor: "David Lee",
      totalLessons: 30,
      completedLessons: 6,
    },
  ]);

  // Function to calculate progress %
  const calculateProgress = (completed, total) =>
    Math.round((completed / total) * 100);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Course Progress Tracker
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const progress = calculateProgress(
            course.completedLessons,
            course.totalLessons
          );

          return (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-500 mb-4">Instructor: {course.instructor}</p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div
                    className={`h-4 rounded-full ${
                      progress >= 80
                        ? "bg-green-500"
                        : progress >= 50
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 text-sm">
                  {progress}% Completed ({course.completedLessons}/{course.totalLessons} Lessons)
                </p>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Continue Course
                </button>
                <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  View Lessons
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Section */}
      <div className="mt-10 bg-gray-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Overall Progress Summary
        </h2>
        <ul className="space-y-2 text-gray-700">
          {courses.map((course) => {
            const progress = calculateProgress(
              course.completedLessons,
              course.totalLessons
            );
            return (
              <li key={course.id} className="flex justify-between">
                <span>{course.title}</span>
                <span className="font-semibold">{progress}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;
