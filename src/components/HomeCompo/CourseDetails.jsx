import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate(); // ✅ useNavigate import

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `http://localhost:5000/api/v1/courses/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setCourse(res.data.course);
      } catch (error) {
        console.log(error.response?.data?.message || error.message);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) return <p className="text-center text-xl">Loading...</p>;

  // ✅ Payment page রিডাইরেক্ট function
  const handleEnroll = () => {
    navigate(`/payment/${id}`, { state: { coursePrice: course.price } });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* HEADER SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-gray-600 mt-3 text-lg">{course.description}</p>
          <p className="mt-3 text-gray-700">
            <span className="font-semibold">Instructor:</span> {course.instructor}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Category:</span> {course.category}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Level:</span> {course.courseLevel}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Language:</span> {course.language}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Duration:</span> {course.duration}
          </p>

          <h2 className="text-3xl font-bold mt-4 text-indigo-600">
            ${course.price}
          </h2>

          {/* ✅ Enroll Now Button */}
          <button
            className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg text-lg font-semibold transition"
            onClick={handleEnroll}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">What You Will Learn</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {course.whatYouWillLearn?.map((item, index) => (
            <li
              key={index}
              className="p-3 bg-indigo-50 rounded border-l-4 border-indigo-600"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* REQUIREMENTS */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Requirements</h2>
        <ul className="list-disc pl-6 space-y-2">
          {course.requirements?.map((req, index) => (
            <li key={index} className="text-gray-700">
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* SYLLABUS */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Course Syllabus</h2>
        <ul className="space-y-3">
          {course.syllabus?.map((lesson, index) => (
            <li
              key={index}
              className="p-3 bg-gray-100 rounded border-l-4 border-gray-400"
            >
              <span className="font-semibold">
                {index + 1}. {lesson.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
