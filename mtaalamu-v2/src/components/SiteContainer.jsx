  import React, { useState, useEffect } from 'react';
  import BlogCard from './BlogCard';

  const SiteContainer = () => {
    const examplePosts = [
      {
        title: 'The Future of AI in Healthcare',
        description: 'Exploring how AI is revolutionizing the healthcare industry, improving diagnosis and patient care.',
        imageUrl: 'https://via.placeholder.com/400x300',
        author: 'John Doe',
        date: 'Oct 20, 2024',
      },
      {
        title: 'Climate Change and Its Global Impact',
        description: 'An in-depth look at how climate change is affecting different regions around the world.',
        imageUrl: 'https://via.placeholder.com/400x300',
        author: 'Jane Smith',
        date: 'Oct 18, 2024',
      },
      // Add more static posts as necessary
    ];

    // State to hold fetched posts from the API
    const [apiPosts, setApiPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    // Fetch posts from the API
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/posts/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          const data = await response.json();
          setApiPosts(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    
      fetchPosts();
    }, []);useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/posts/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          const data = await response.json();
          setApiPosts(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    
      fetchPosts();
    }, []);

    // Calculate the index of the last post on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    // Calculate the index of the first post on the current page
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // Get the current posts (from both API and example)
    const currentPosts = apiPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Calculate total pages
    const totalPages = Math.ceil(apiPosts.length / postsPerPage);

    // Function to handle page change
    const handlePageChange = (page) => {
      setCurrentPage(page);
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              author={post.author}
              date={post.date}
            />
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };

  export default SiteContainer;
