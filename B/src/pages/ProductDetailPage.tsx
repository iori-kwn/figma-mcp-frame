import React, { useState } from 'react';

const imgImage = '/src/assets/0707e6b2022462187b7b2dab43ed95bab6b24a66.png';
const imgImage1 = '/src/assets/e10ce0bc9ebbb7cadeeff3ec3159f4f90dd8ed5a.png';

export default function ProductDetailPage() {
  // State for annotations
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFAQ, setShowFAQ] = useState(true); // Control FAQ visibility based on content
  const [reviews, setReviews] = useState([
    { id: 1, stars: 5, title: "Excellent coffee!", body: "Best coffee I've ever had. Perfect brewing temperature.", date: "Dec 15, 2024", name: "Sarah Johnson" },
    { id: 2, stars: 5, title: "Amazing quality", body: "Rich flavor and aromatic. Will definitely order again.", date: "Dec 12, 2024", name: "Mike Chen" },
    { id: 3, stars: 4, title: "Great value", body: "Good coffee for the price point. Fast delivery too.", date: "Dec 10, 2024", name: "Emily Davis" }
  ]);

  // Handlers for annotation interactions
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    // アノテーション: クリックするとハンバーガーメニューが開く
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    // アノテーション: お気に入りに登録する
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // アノテーション: 送信したらAlertを表示する
    alert('Newsletter subscription successful! 🎉');
  };

  // アノテーション: 最新かつ評価が高いレビューを3件表示する
  const displayedReviews = reviews
    .sort((a, b) => b.stars - a.stars || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div
      className="bg-white flex flex-col items-start relative w-full min-h-screen"
      data-name="Examples/Product Detail Page"
      data-node-id="108:1885"
    >
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200" role="banner">
        <div className="flex items-center justify-between p-4">
          <button
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Menu"
            onClick={handleMenuClick}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* アノテーション実装: クリックするとハンバーガーメニューが開く */}
          {isMenuOpen && (
            <div className="absolute top-16 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Products</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content - Page Product */}
      <main
        className="bg-white flex flex-col gap-6 items-start min-w-[240px] p-6 w-full"
        role="main"
        data-name="Page Product"
        data-node-id="108:1887"
      >
        <section className="flex flex-col gap-16 items-start w-full" data-name="Section" data-node-id="108:1888">
          {/* Product Image */}
          <div
            className="h-[327px] relative w-full"
            role="img"
            aria-label="Product image"
            data-name="Image"
            data-node-id="108:1889"
          >
            <div className="absolute inset-0">
              <div className="absolute bg-[#e3e3e3] inset-0" />
              <img
                alt="Coffee beans and brewing equipment"
                className="absolute max-w-none object-center object-contain opacity-20 w-full h-full"
                src={imgImage}
              />
              <img
                alt="Coffee cup with latte art on wooden table"
                className="absolute max-w-none object-center object-cover w-full h-full"
                src={imgImage1}
              />
            </div>
          </div>

          {/* Product Info Column */}
          <div
            className="flex flex-col gap-6 items-start justify-center w-full"
            data-name="Column"
            data-node-id="108:1890"
          >
            {/* Body Section */}
            <div className="flex flex-col gap-4 items-start w-full" data-name="Body" data-node-id="108:1891">
              {/* Title Section */}
              <div className="flex flex-col gap-4 items-start w-full" data-name="Title" data-node-id="108:1892">
                <h1 className="text-heading font-inter" data-name="Title" data-node-id="108:1893">
                  Text Heading
                </h1>
                {/* Price Section */}
                <div
                  className="flex flex-col gap-1 items-start justify-center w-full"
                  data-name="Price"
                  data-node-id="108:1894"
                >
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    data-name="Tag"
                    data-node-id="108:1895"
                  >
                    Tag
                  </span>
                  <div className="flex items-baseline gap-1" data-name="Text Price" data-node-id="108:1896">
                    <span className="text-2xl font-semibold">$50</span>
                    <span className="text-sm text-gray-600">/ mo</span>
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className="text-body-base font-inter text-gray-700" data-name="Description" data-node-id="108:1897">
                Text
              </p>
            </div>

            {/* Fields Section */}
            <div
              className="flex flex-col gap-4 items-start justify-center w-full"
              data-name="Fields"
              data-node-id="108:1898"
            >
              <div
                className="flex flex-col gap-2.5 items-start w-full"
                data-name="Select Field"
                data-node-id="108:1899"
              >
                <label htmlFor="select1" className="text-sm font-medium text-gray-700">
                  Label
                </label>
                <select
                  id="select1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Value"
                >
                  <option value="Value">Value</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 4">Option 4</option>
                  <option value="Option 5">Option 5</option>
                </select>
              </div>
              <div
                className="flex flex-col gap-2.5 items-start w-full"
                data-name="Select Field"
                data-node-id="108:1900"
              >
                <label htmlFor="select2" className="text-sm font-medium text-gray-700">
                  Label
                </label>
                <select
                  id="select2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Value"
                >
                  <option value="Value">Value</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 4">Option 4</option>
                  <option value="Option 5">Option 5</option>
                </select>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              type="button"
              data-name="Button"
              data-node-id="108:1901"
            >
              Button
            </button>

            {/* Accordion - アノテーション: FAQがなかったら非表示にする */}
            {showFAQ && (
              <div className="flex flex-col gap-2.5 items-start w-full" data-name="Accordion" data-node-id="108:1902">
                <details className="w-full" open>
                  <summary className="flex items-center justify-between w-full py-3 px-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <span className="font-medium">よくある質問</span>
                    <svg
                      className="w-5 h-5 transform transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 text-sm text-gray-600">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-1">配送にはどのくらいかかりますか？</h4>
                        <p>通常2-3営業日でお届けします。</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">返品は可能ですか？</h4>
                        <p>商品到着から7日以内であれば返品可能です。</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">保存方法を教えてください</h4>
                        <p>直射日光を避け、冷暗所で保存してください。</p>
                      </div>
                    </div>
                  </div>
                </details>
                <button 
                  onClick={() => setShowFAQ(false)}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  FAQを非表示にする
                </button>
              </div>
            )}
          </div>

          {/* Favorite Button with annotation - アノテーション: お気に入りに登録する */}
          <button
            className={`p-2 ${isFavorite ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
            aria-label={isFavorite ? "お気に入りから削除する" : "お気に入りに登録する"}
            type="button"
            onClick={handleFavoriteClick}
            data-name="Icon Button"
            data-node-id="108:1903"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
          {isFavorite && (
            <div className="text-sm text-green-600 mt-2">✓ お気に入りに追加されました</div>
          )}
        </section>
      </main>

      {/* Reviews Section with annotation */}
      <section
        className="bg-white flex flex-col gap-6 items-start p-6 w-full max-w-[375px]"
        aria-labelledby="reviews-heading"
        data-name="Card Grid Reviews"
        data-node-id="108:1904"
      >
        <h2 id="reviews-heading" className="text-heading font-inter" data-name="Text Heading" data-node-id="108:1905">
          Latest reviews
        </h2>
        {/* Card Grid with flex-wrap for responsive layout */}
        <div className="flex flex-wrap gap-6 items-start w-full" data-name="Card Grid" data-node-id="108:1906">
          {/* アノテーション実装: 最新かつ評価が高いレビューを3件表示する */}
          {displayedReviews.map((review, index) => (
            <article
              key={review.id}
              className="flex flex-col gap-2.5 items-start w-full"
              role="article"
              data-name="Review Card"
              data-node-id={index === 0 ? '108:1907' : index === 1 ? '108:1908' : '108:1909'}
            >
              <div className="bg-white border border-gray-200 rounded-lg p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm" role="img" aria-label="Reviewer avatar">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1" role="img" aria-label={`${review.stars} out of 5 stars`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            className={`w-4 h-4 ${star <= review.stars ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <time className="text-sm text-gray-500">{review.date}</time>
                    </div>
                    <h3 className="text-body-strong font-inter mb-1">{review.title}</h3>
                    <p className="text-body-base font-inter text-gray-700 mb-2">{review.body}</p>
                    <p className="text-sm text-gray-600">{review.name}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-xs text-gray-500 mt-2">
          評価順・新着順で上位3件を表示しています
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="bg-white flex flex-col gap-6 items-center p-6 w-full"
        aria-labelledby="newsletter-heading"
        data-name="Page Newsletter"
        data-node-id="108:1910"
      >
        <div className="text-center w-full" data-name="Text Content Heading" data-node-id="108:1911">
          <h2 id="newsletter-heading" className="text-heading font-inter mb-2">
            Follow the latest trends
          </h2>
          <p className="text-subheading font-inter text-gray-600">With our daily newsletter</p>
        </div>
        {/* アノテーション実装: 送信したらAlertを表示する */}
        <form
          className="flex gap-2 w-full"
          onSubmit={handleNewsletterSubmit}
          data-name="Form Newsletter"
          data-node-id="108:1912"
        >
          <input
            type="email"
            placeholder="メールアドレスを入力..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            購読する
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer
        className="w-full bg-gray-50 border-t border-gray-200"
        role="contentinfo"
        data-name="Footer"
        data-node-id="108:1913"
      >
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h3 className="text-body-strong font-inter mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-body-strong font-inter mb-3">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
