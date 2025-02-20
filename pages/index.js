import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../redux/newsSlice";
import { addBookmark, removeBookmark } from "../redux/bookmarkSlice";
import { fetchNews } from "../lib/api";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news.articles);
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      dispatch(setNews(data));
    };
    getNews();
  }, [dispatch]);

  const handleBookmark = (articleId) => {
    if (bookmarks.includes(articleId)) {
      dispatch(removeBookmark(articleId));
    } else {
      dispatch(addBookmark(articleId));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center my-6 p-3 bg-blue-600 text-white rounded-lg shadow-lg max-w-xs mx-auto">
        Chas Huvudnyheter
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <div
            key={article.article_id}
            className="card bg-base-100 shadow-xl rounded-xl overflow-hidden"
          >
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold text-gray-800 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-gray-600">{article.description}</p>
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => handleBookmark(article.article_id)}
                  className={`btn ${
                    bookmarks.includes(article.article_id)
                      ? "bg-yellow-500 text-white"
                      : "bg-blue-600 text-white"
                  } hover:bg-blue-700 hover:scale-105 transition-all rounded-full py-2 px-6`}
                >
                  {bookmarks.includes(article.article_id)
                    ? "Ta bort bokmärke"
                    : "Bokmärk"}
                </button>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-green-600 text-white hover:bg-green-700 rounded-full py-2 px-6 mt-2"
                >
                  Läs mer
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          href="/bookmarks"
          className="btn btn-outline rounded-full py-2 px-6 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
        >
          Visa bokmärkta artiklar
        </Link>
      </div>
    </div>
  );
}
