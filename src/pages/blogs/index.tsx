import { useEffect, useState } from "react";
import supabase from "../../supabase";
import { Table } from "antd";

interface Blog {
  id: string;
  title_en: string;
  description_en: string;
  user_id: string;
  image_url: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blogs")
      .select("id, title_en, description_en, user_id, image_url");

    console.log(data);
    if (error) {
      console.error("Error fetching blogs:", error);
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title_en",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description_en",
      key: "description",
    },
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "Image URL",
      dataIndex: "image_url",
      key: "image_url",
      render: (text: string) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
  ];

  return (
    <div>
      <h1>Blogs</h1>
      <Table
        dataSource={blogs.map((blog) => ({ ...blog, key: blog.id }))}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

export default Blogs;
