import { Layout, Menu } from "antd";
import { UserOutlined, FileTextOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div
          className="logo"
          style={{
            height: "32px",
            margin: "16px",
            color: "white",
            textAlign: "center",
          }}
        >
          Admin Panel
        </div>
        <Menu theme="dark" mode="inline" onClick={handleMenuClick}>
          <Menu.Item key="/users" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="/blogs" icon={<FileTextOutlined />}>
            Blogs
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "#fff", padding: 0, textAlign: "center" }}>
          <h1 style={{ margin: 0 }}>Admin Panel</h1>
        </Header>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
