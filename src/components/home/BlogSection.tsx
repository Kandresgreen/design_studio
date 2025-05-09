import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import { blogPosts } from "@/components/data/blogPosts";
import type { BlogPost } from "@/components/data/blogPosts";

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="bg-white shadow-md rounded-[20px] w-[431px] overflow-hidden flex flex-col max-md:max-w-full"
    >
      {/* Fixed-height image container with padding */}
      <div className="h-[220px] w-full bg-white flex items-center justify-center p-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[200px] object-fit rounded-[10px] max-md:max-w-full"
          />
      </div>

      {/* Text content */}
      <div className="flex flex-col px-4 py-3">
        <h3 className="text-[21px] font-bold text-[#333] leading-[1.4]">
          {post.title}
        </h3>
        <p className="text-[11px] text-[#999] tracking-wide mt-2">{post.date}</p>
      </div>
    </Link>
  );
};

const BlogSection: React.FC = () => {
  const { t, language } = useLanguage();

  // Debug output to verify language and translations
  console.log("Current language in BlogSection:", language);
  console.log("Blog translation:", t.blog);
  
  return (
    <section className="bg-white w-full py-20 px-4 sm:px-6 md:px-8" key={`blog-section-${language}`}>
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="text-black font-semibold px-8 max-md:max-w-full max-md:px-5">
          <div className="flex w-full flex-col items-center max-md:max-w-full">
            <div className="flex w-[768px] max-w-full flex-col items-center">
              <div className="w-[34px] text-base text-[rgba(250,111,64,1)] whitespace-nowrap pb-px">
                {t.blog}
              </div>
              <h2 className="w-full text-4xl text-center tracking-[-0.72px] leading-none mt-[19px]">
                <div className="w-full pb-px max-md:max-w-full">{t.blogTrends}</div>
              </h2>
              <div className="w-full text-xl font-normal text-center mt-[19px]">
                <div className="w-full pb-px max-md:max-w-full">
                  {t.blogDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center overflow-hidden justify-center mt-[9px] py-10">
          <div className="self-stretch flex justify-around min-w-60 min-h-[488px] w-full items-stretch gap-6 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
