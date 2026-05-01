export const fetchSkills = async () => {
  try {
    const res = await fetch("https://r117qtuob3.microcms.io/api/v1/skills", {
      headers: {
        "X-API-KEY": "gDD1Wm4ABjtxU26Z0POBPhQaE7tjGk4Nh0gn",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Fetched skills:", data);
    return data.contents;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};
