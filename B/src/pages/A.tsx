import React from 'react';

const imgImage = '/src/assets/0707e6b2022462187b7b2dab43ed95bab6b24a66.png';
const imgImage1 = '/src/assets/e10ce0bc9ebbb7cadeeff3ec3159f4f90dd8ed5a.png';

export default function ProductDetailPage() {
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
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
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

            {/* Accordion */}
            <div className="flex flex-col gap-2.5 items-start w-full" data-name="Accordion" data-node-id="108:1902">
              <details className="w-full" open>
                <summary className="flex items-center justify-between w-full py-3 px-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <span className="font-medium">Title</span>
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
                  Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
                </div>
              </details>
            </div>
          </div>

          {/* Favorite Button with annotation */}
          <button
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            aria-label="お気に入りに登録する"
            type="button"
            data-name="Icon Button"
            data-node-id="108:1903"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
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
          {/* Review Cards - implementing annotation: 最新かつ評価が高いレビューを3件表示する */}
          {[1, 2, 3].map((index) => (
            <article
              key={index}
              className="flex flex-col gap-2.5 items-start w-full"
              role="article"
              data-name="Review Card"
              data-node-id={index === 1 ? '108:1907' : index === 2 ? '108:1908' : '108:1909'}
            >
              <div className="bg-white border border-gray-200 rounded-lg p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-300 rounded-full" role="img" aria-label="Reviewer avatar"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <time className="text-sm text-gray-500">Date</time>
                    </div>
                    <h3 className="text-body-strong font-inter mb-1">Review title</h3>
                    <p className="text-body-base font-inter text-gray-700 mb-2">Review body</p>
                    <p className="text-sm text-gray-600">Reviewer name</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
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
        <form
          className="flex gap-2 w-full"
          onSubmit={(e) => e.preventDefault()}
          data-name="Form Newsletter"
          data-node-id="108:1912"
        >
          <input
            type="email"
            placeholder="Enter text..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit
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
