import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllCourseShow = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const fetchCourses = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/allCourse?page=${page}&search=${search}&category=${category}&sort=${sort}`
      );
      setCourses(res.data.courses);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [page, search, category, sort]);

  const handleViewDetails = (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signIn");
    } else {
      navigate(`/courses/${id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4 bg-white p-4 rounded-lg shadow-md h-fit sticky top-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>

          <input
            type="text"
            placeholder="Search Course..."
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
          </select>

          <select
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price_asc">Price: Low → High</option>
            <option value="price_desc">Price: High → Low</option>
          </select>
        </div>

        {/* Courses Grid */}
        <div className="lg:w-3/4">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Available Courses</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses?.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer flex flex-col justify-between"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-40 w-full object-cover rounded-t-lg"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">{course.instructor}</p>
                  <p className="text-indigo-600 font-bold text-lg mb-4">${course.price}</p>

                  <button
                    onClick={() => handleViewDetails(course._id)}
                    className="mt-auto bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 rounded-lg bg-gray-200 disabled:bg-gray-300 hover:bg-gray-300 transition"
            >
              Prev
            </button>
            <span className="font-semibold">
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 rounded-lg bg-gray-200 disabled:bg-gray-300 hover:bg-gray-300 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseShow;
