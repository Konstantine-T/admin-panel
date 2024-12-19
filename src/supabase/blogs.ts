import supabase from "./index";

const fetchBlogs = async () => {
  const { data, error } = await supabase.from("blogs").select("*");

  if (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }

  return data;
};

export default fetchBlogs;
