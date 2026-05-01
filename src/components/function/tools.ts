export const fetchTools = async () => {
  try {
    const res = await fetch("https://4qlzvqf5fi.microcms.io/api/v1/tools", {
      headers: {
        "X-API-KEY": "WgSoUH27zwjEWY3m332Vy05wCIi8zRqMWkqe",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Fetched tools:", data);
    return data.contents;
  } catch (error) {
    console.error("Error fetching tools:", error);
    return [];
  }
};
