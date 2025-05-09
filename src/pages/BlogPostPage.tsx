import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { blogPosts } from "@/components/data/blogPosts";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the blog post by slug
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10">
        <h1 className="text-xl text-center text-gray-800 font-semibold mb-4 mt-10">
          {post.title}
        </h1>
        <p className="text-xl text-center text-gray-800 mb-5">
          {post.date}
        </p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] rounded-3xl mb-4 block rounded-inherit object-center object-cover p-4"
        />
        <post.Component />
      </div>
    </div>
  );
};

export default BlogPostPage;
