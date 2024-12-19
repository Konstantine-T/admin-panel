import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layouts/mainLayout";
import Users from "./pages/users";
import Blogs from "./pages/blogs";

const App = () => {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/" element={<div>Welcome to the Admin Panel</div>} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
};

export default App;
