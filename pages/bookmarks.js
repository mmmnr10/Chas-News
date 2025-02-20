import { useSelector } from "react-redux";

export default function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
  const news = useSelector((state) => state.news.articles);

  const bookmarkedArticles = news.filter((article) =>
    bookmarks.includes(article.article_id)
  );

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-gray-800 my-8">
        Bokmärkta Artiklar
      </h1>
      {bookmarkedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookmarkedArticles.map((article) => (
            <div
              key={article.article_id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all"
            >
              <img
                src={article.image_url || "https://via.placeholder.com/400"}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-700">
                  {article.title}
                </h2>
                <p className="mt-2 text-gray-600">{article.description}</p>
                <div className="card-actions justify-end mt-4">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    Läs mer
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Du har inga bokmärkta artiklar än.
        </p>
      )}
      <div className="text-center mt-8">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Tillbaka till huvudsidan
        </a>
      </div>
    </div>
  );
}
