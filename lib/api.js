const API_KEY = "pub_709417eadc6947efa494990e1f7c553530502";
const BASE_URL = "https://newsdata.io/api/1/news";

export const fetchNews = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&country=se&language=sv`
    );
    if (!response.ok) {
      throw new Error("Något gick fel vid hämtning av nyheter");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
