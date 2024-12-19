import React, { useEffect, useState } from "react";
import { Table } from "antd";
import supabase from "../../supabase";

interface User {
  id: string;
  email: string;
  created_at: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("users")
      .select("id, email, created_at");
    if (error) {
      console.error("Error fetching users:", error);
    } else {
      setUsers(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (text: string) => new Date(text).toLocaleString(),
    },
  ];
  return (
    <div>
      <h1>Users</h1>
      <Table
        dataSource={users.map((user) => ({ ...user, key: user.id }))}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

export default Users;
