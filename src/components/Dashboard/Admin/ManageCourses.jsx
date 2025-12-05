import React, { useState } from 'react';
import axios from 'axios';

const ManageCourses = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    instructor: '',
    category: '',
    price: '',
    level: '',
    language: '',
    courseDuration: '',
    thumbnail: '',
    requirements: '',
    whatYouWillLearn: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem('token');

      const response = await axios.post(
        'http://localhost:5000/api/v1/CoursePost',
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage(response.data.message || "Course Created Successfully!");
      setForm({
        title: '',
        description: '',
        instructor: '',
        category: '',
        price: '',
        level: '',
        language: '',
        courseDuration: '',
        thumbnail: '',
        requirements: '',
        whatYouWillLearn: ''
      });

    } catch (error) {
      setMessage(error.response?.data?.message || "Error creating course!");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">

      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Create New Course</h2>

      {message && (
        <p className="mb-4 text-center py-2 bg-red-100 text-red-600 rounded">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">

        {/* Title */}
        <div className="col-span-2">
          <label className="font-semibold mb-1 block">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Course Title"
            className="border w-full p-3 rounded"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="font-semibold mb-1 block">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Course Description"
            className="border w-full p-3 rounded"
            rows="4"
          ></textarea>
        </div>

        {/* Instructor */}
        <div>
          <label className="font-semibold">Instructor</label>
          <input
            name="instructor"
            value={form.instructor}
            onChange={handleChange}
            placeholder="Instructor Name"
            className="border w-full p-3 rounded"
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold">Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Programming / Web Dev etc."
            className="border w-full p-3 rounded"
          />
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold">Price</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Course Price"
            className="border w-full p-3 rounded"
          />
        </div>

        {/* Level */}
        <div>
          <label className="font-semibold">Course Level</label>
          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className="border w-full p-3 rounded"
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Language */}
        <div>
          <label className="font-semibold">Language</label>
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className="border w-full p-3 rounded"
          >
            <option value="">Select Language</option>
            <option value="Bangla">Bangla</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="font-semibold">Course Duration</label>
          <input
            name="courseDuration"
            value={form.courseDuration}
            onChange={handleChange}
            placeholder="10 hours / 30 days"
            className="border w-full p-3 rounded"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="font-semibold">Thumbnail Image URL</label>
          <input
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            placeholder="Image URL"
            className="border w-full p-3 rounded"
          />
        </div>

        {/* Requirements */}
        <div className="col-span-2">
          <label className="font-semibold">Requirements</label>
          <textarea
            name="requirements"
            value={form.requirements}
            onChange={handleChange}
            placeholder="What students need (Basic JS, Laptop...)"
            className="border w-full p-3 rounded"
          />
        </div>

        {/* What You Will Learn */}
        <div className="col-span-2">
          <label className="font-semibold">What You Will Learn</label>
          <textarea
            name="whatYouWillLearn"
            value={form.whatYouWillLearn}
            onChange={handleChange}
            placeholder="List of skills students will gain"
            className="border w-full p-3 rounded"
          />
        </div>

        <button
          className="col-span-2 bg-indigo-600 text-white p-4 rounded text-xl"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Course"}
        </button>

      </form>
    </div>
  );
};

export default ManageCourses;
