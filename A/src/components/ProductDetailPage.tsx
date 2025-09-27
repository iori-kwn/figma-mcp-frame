import React from 'react';

const imgFrame = "/assets/0707e6b2022462187b7b2dab43ed95bab6b24a66.png";
const imgFrame1 = "/assets/e10ce0bc9ebbb7cadeeff3ec3159f4f90dd8ed5a.png";

export default function ProductDetailPage() {
  return (
    <div className="bg-white flex flex-col items-start relative w-full min-h-screen" data-name="Examples/Product Detail Page" data-node-id="108:1457">
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

      {/* Main Content */}
      <main className="bg-white flex flex-col gap-6 items-start min-w-[240px] p-6 w-full" role="main">
        <div className="flex flex-col gap-16 items-start w-full">
          <div className="flex flex-col gap-16 items-start w-full">
            {/* Product Image */}
            <div className="h-[327px] relative w-full" role="img" aria-label="Product image">
              <div className="absolute inset-0">
                <div className="absolute bg-[#e3e3e3] inset-0" />
                <img 
                  alt="Product background" 
                  className="absolute max-w-none object-center object-contain opacity-20 w-full h-full" 
                  src={imgFrame} 
                />
                <img 
                  alt="Coffee cup with latte art" 
                  className="absolute max-w-none object-center object-cover w-full h-full" 
                  src={imgFrame1} 
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6 items-start justify-center w-full">
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex flex-col gap-4 items-start w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    <h1 className="text-heading font-inter">Text Heading</h1>
                    <div className="flex flex-col gap-1 items-start justify-center w-full">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Tag
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-semibold">$50</span>
                        <span className="text-sm text-gray-600">/ mo</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-body-base font-inter text-gray-700">
                    Text
                  </p>
                </div>
              </div>

              {/* Form Controls */}
              <div className="flex flex-col gap-4 items-start justify-center w-full">
                <div className="flex flex-col gap-2.5 items-start w-full">
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
                <div className="flex flex-col gap-2.5 items-start w-full">
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
              >
                Button
              </button>

              {/* Accordion */}
              <div className="flex flex-col gap-2.5 items-start w-full">
                <details className="w-full">
                  <summary className="flex items-center justify-between w-full py-3 px-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <span className="font-medium">Details</span>
                    <svg className="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 text-sm text-gray-600">
                    Product details and specifications would go here.
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Favorite Button */}
          <button 
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            aria-label="Add to favorites"
            type="button"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
      </main>

      {/* Reviews Section */}
      <section className="bg-white flex flex-col gap-6 items-start p-6 w-full max-w-[375px]" aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className="text-heading font-inter">Latest reviews</h2>
        <div className="flex flex-col gap-2.5 items-start w-full">
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Review Cards */}
            {[1, 2, 3].map((index) => (
              <article key={index} className="flex flex-col gap-2.5 items-start w-full" role="article">
                <div className="bg-white border border-gray-200 rounded-lg p-4 w-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white flex flex-col gap-6 items-center p-6 w-full" aria-labelledby="newsletter-heading">
        <div className="flex flex-col gap-6 items-start w-full">
          <div className="flex flex-col gap-2.5 items-start w-full">
            <div className="text-center w-full">
              <h2 id="newsletter-heading" className="text-heading font-inter mb-2">Heading</h2>
              <p className="text-subheading font-inter text-gray-600">Subheading</p>
            </div>
          </div>
          <form className="flex gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-50 border-t border-gray-200" role="contentinfo">
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h3 className="text-body-strong font-inter mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline">About</a></li>
                <li><a href="#" className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline">Careers</a></li>
                <li><a href="#" className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-body-strong font-inter mb-3">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline">Help</a></li>
                <li><a href="#" className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline">FAQ</a></li>
                <li><a href="#" className="text-body-base font-inter text-gray-600 hover:text-gray-900 focus:outline-none focus:underline">Returns</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}