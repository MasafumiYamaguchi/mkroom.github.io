export const fetchArticles = async () => {
  try {
    const res = await fetch("https://qy1xbd702u.microcms.io/api/v1/blogs", {
      headers: {
        "X-API-KEY": "0ODwuxIMvPx84Gh8g9sIcjlCJBViDJZ7hUke",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Fetched articles:", data);
    return data.contents;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};
