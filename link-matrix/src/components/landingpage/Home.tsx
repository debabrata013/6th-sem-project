import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaThumbsUp, FaCommentDots } from 'react-icons/fa';
import BlogPostForm from './BlogPostForm';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  likes: number;
  comments: string[];
}

const Home: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch blog data from API
    fetch('/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error('Error fetching blog data:', error));
  }, []);

  const handleFormSubmit = (post: { title: string; content: string }) => {
    const newPost: BlogPost = {
      id: blogPosts.length + 1,
      title: post.title,
      date: new Date().toLocaleDateString(),
      excerpt: post.content,
      category: 'General',
      likes: 0,
      comments: [],
    };
    setBlogPosts([newPost, ...blogPosts]);
    // Update the blog data on the server
    fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    }).catch((error) => console.error('Error posting new blog:', error));
  };

  const handleLike = (id: number) => {
    const updatedPosts = blogPosts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setBlogPosts(updatedPosts);
    // Update the like count on the server
    fetch(`/api/blogs/${id}/like`, {
      method: 'POST',
    }).catch((error) => console.error('Error liking blog post:', error));
  };

  const handleAddComment = (id: number) => {
    const updatedPosts = blogPosts.map((post) =>
      post.id === id ? { ...post, comments: [...post.comments, newComment] } : post
    );
    setBlogPosts(updatedPosts);
    setNewComment('');
    // Update the comments on the server
    fetch(`/api/blogs/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment: newComment }),
    }).catch((error) => console.error('Error adding comment:', error));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Linked Matrix</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            Create Blog Post
          </button>
          <FaCommentDots className="text-2xl cursor-pointer" />
        </div>
      </nav>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-12 space-y-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaThumbsUp />
                <span>{post.likes}</span>
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Comments</h3>
              {post.comments.map((comment, index) => (
                <p key={index} className="text-gray-600 mb-2">
                  {comment}
                </p>
              ))}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Add a comment..."
                />
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Comment
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      {isFormOpen && (
        <BlogPostForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default Home;