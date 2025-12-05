import React from 'react';

const MyCourses = () => {
  // Dummy data for demonstration
  const enrolledCourses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      progress: 40,
    },
    {
      id: 2,
      title: "Node.js Advanced",
      instructor: "Jane Smith",
      progress: 70,
    },
    {
      id: 3,
      title: "MERN Stack Full Course",
      instructor: "David Lee",
      progress: 20,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">My Courses</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h2>
              <p className="text-gray-500 mb-4">Instructor: {course.instructor}</p>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-gray-600 text-sm">{course.progress}% Completed</p>
            </div>

            <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
