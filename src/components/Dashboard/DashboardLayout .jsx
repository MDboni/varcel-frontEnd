import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  const role = localStorage.getItem("role"); // admin / student

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-600 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <ul className="space-y-3">
          <li>
            <Link to="/" className="hover:underline font-bold">Home</Link>
          </li>

          {/* Admin Menu */}
          {role === "admin" && (
            <>
              <li>
                <Link to="/dashboard/users" className="hover:underline">Manage Users</Link>
              </li>
              <li>
                <Link to="/dashboard/courses" className="hover:underline">Manage Courses</Link>
              </li>
              <li>
                <Link to="/dashboard/assignments" className="hover:underline">Review Assignments</Link>
              </li>
            </>
          )}

          {/* Student Menu */}
          {role === "student" && (
            <>
              <li>
                <Link to="/dashboard/my-courses" className="hover:underline">My Courses</Link>
              </li>
              <li>
                <Link to="/dashboard/submit-assignment" className="hover:underline">Submit Assignments</Link>
              </li>
              <li>
                <Link to="/dashboard/progress" className="hover:underline">Progress Tracker</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
