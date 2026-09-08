import React, { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../../services/api';
import { BookOpen, ArrowRight, X } from 'lucide-react';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      if (data && data.length > 0) {
        setBlogs(data);
      }
    });
  }, []);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-block text-xs font-semibold tracking-wider uppercase text-[#0B5136] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              Royal Farms Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-sans">
              What’s New at Royal Farms
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl">
              Stay informed with industry insights, breeding advice, and modern goat &amp; livestock management guides.
            </p>
          </div>

          <a
            href="#blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 hover:border-[#0B5136] hover:bg-[#0B5136] hover:text-white transition-all text-sm font-semibold text-gray-700 self-start md:self-auto"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-1"
            >
              {/* Thumbnail with Badge */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={blog.thumbnailUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/Goat-Farm-Management-300x200.webp';
                  }}
                />
                {blog.badge && (
                  <span className="absolute top-4 left-4 bg-[#0B5136] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                    {blog.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#0B5136] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9046] text-[#0B5136] hover:bg-[#0B5136] hover:text-white transition-all duration-300 font-bold text-xs self-start"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Reading Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block bg-[#0B5136] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {selectedBlog.badge || "Livestock Guide"}
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              {selectedBlog.title}
            </h2>

            <div className="rounded-2xl overflow-hidden h-60 w-full">
              <img
                src={selectedBlog.thumbnailUrl}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p>{selectedBlog.excerpt}</p>
              <p>{selectedBlog.content || selectedBlog.excerpt}</p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
