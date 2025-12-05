import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SubmitAssignments = () => {
  const [assignmentLink, setAssignmentLink] = useState('');
  const [textAnswer, setTextAnswer] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!assignmentLink && !textAnswer) {
      toast.error('Please provide a link or answer!');
      return;
    }

    const newSubmission = {
      id: Date.now(),
      link: assignmentLink,
      answer: textAnswer,
      submittedAt: new Date().toLocaleString(),
    };

    setSubmissions([newSubmission, ...submissions]);
    setAssignmentLink('');
    setTextAnswer('');
    toast.success('Assignment Submitted Successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Submit Assignment</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4"
      >
        <label className="flex flex-col">
          <span className="font-semibold text-gray-700 mb-1">Google Drive Link (Optional)</span>
          <input
            type="url"
            placeholder="Enter your assignment link"
            value={assignmentLink}
            onChange={(e) => setAssignmentLink(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold text-gray-700 mb-1">Text Answer (Optional)</span>
          <textarea
            placeholder="Type your answer here..."
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-32"
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-2"
        >
          Submit Assignment
        </button>
      </form>

      {/* Previous Submissions */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Previous Submissions</h2>
        {submissions.length === 0 ? (
          <p className="text-gray-500">No submissions yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="bg-gray-50 p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:justify-between md:items-center gap-2"
              >
                <div>
                  {sub.link && (
                    <p>
                      <span className="font-semibold">Link:</span>{' '}
                      <a
                        href={sub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {sub.link}
                      </a>
                    </p>
                  )}
                  {sub.answer && (
                    <p>
                      <span className="font-semibold">Answer:</span> {sub.answer}
                    </p>
                  )}
                  <p className="text-gray-400 text-sm">Submitted at: {sub.submittedAt}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmitAssignments;
