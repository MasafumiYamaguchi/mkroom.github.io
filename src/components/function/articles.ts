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

export type ZennArticle = {
  id: string;
  title: string;
  publishedAt: string;
  link: string;
  imageUrl: string;
};

export const fetchZennArticles = async (): Promise<ZennArticle[]> => {
  return [
    {
      id: "5668bfb9343530",
      title: "Docker+Tailscaleでマイクラサーバーを立てたメモ",
      publishedAt: "Sat, 02 May 2026 16:50:15 GMT",
      link: "https://zenn.dev/markun4649/articles/5668bfb9343530",
      imageUrl:
        "https://res.cloudinary.com/zenn/image/upload/s--LClhYuC5--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:Docker%252BTailscale%25E3%2581%25A7%25E3%2583%259E%25E3%2582%25A4%25E3%2582%25AF%25E3%2583%25A9%25E3%2582%25B5%25E3%2583%25BC%25E3%2583%2590%25E3%2583%25BC%25E3%2582%2592%25E7%25AB%258B%25E3%2581%25A6%25E3%2581%259F%25E3%2583%25A1%25E3%2583%25A2%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E3%2581%25B5%25E3%2581%25BF%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdGF0aWMuemVubi5zdHVkaW8vdXNlci11cGxvYWQvYXZhdGFyLzlhOTVmYjc1NzEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
    },
    {
      id: "9b36257508fca3",
      title: "DBの種類と特徴を整理する",
      publishedAt: "Sun, 26 Apr 2026 08:13:30 GMT",
      link: "https://zenn.dev/markun4649/articles/9b36257508fca3",
      imageUrl:
        "https://res.cloudinary.com/zenn/image/upload/s--dyUpj6HI--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:DB%25E3%2581%25AE%25E7%25A8%25AE%25E9%25A1%259E%25E3%2581%25A8%25E7%2589%25B9%25E5%25BE%25B4%25E3%2582%2592%25E6%2595%25B4%25E7%2590%2586%25E3%2581%2599%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E3%2581%25B5%25E3%2581%25BF%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdGF0aWMuemVubi5zdHVkaW8vdXNlci11cGxvYWQvYXZhdGFyLzlhOTVmYjc1NzEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
    },
    {
      id: "71cc289971c47d",
      title:
        "Hono + Durable Objects で作る！知らない人とマッチングして戦うリアルタイムじゃんけんシステム",
      publishedAt: "Sat, 28 Mar 2026 01:04:21 GMT",
      link: "https://zenn.dev/markun4649/articles/71cc289971c47d",
      imageUrl:
        "https://res.cloudinary.com/zenn/image/upload/s--UNlNzhPm--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:Hono%2520%252B%2520Durable%2520Objects%2520%25E3%2581%25A7%25E4%25BD%259C%25E3%2582%258B%25EF%25BC%2581%25E7%259F%25A5%25E3%2582%2589%25E3%2581%25AA%25E3%2581%2584%25E4%25BA%25BA%25E3%2581%25A8%25E3%2583%259E%25E3%2583%2583%25E3%2583%2581%25E3%2583%25B3%25E3%2582%25B0%25E3%2581%2597%25E3%2581%25A6%25E6%2588%25A6%25E3%2581%2586%25E3%2583%25AA%25E3%2582%25A2%25E3%2583%25AB%25E3%2582%25BF%25E3%2582%25A4%25E3%2583%25A0%25E3%2581%2598%25E3%2582%2583%25E3%2582%2593%25E3%2581%2591%25E3%2582%2593%25E3%2582%25B7%25E3%2582%25B9%25E3%2583%2586%25E3%2583%25A0%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E3%2581%25B5%25E3%2581%25BF%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdGF0aWMuemVubi5zdHVkaW8vdXNlci11cGxvYWQvYXZhdGFyLzlhOTVmYjc1NzEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
    },
  ];
};
