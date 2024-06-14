import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/search-icon.svg";
import { Companies, CategoryCardItems } from "../../constants";
import { CategoryCard, Paginate} from "../../components/LandingPageOne"




export default function Category() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  useEffect(() => {
    setPosts(CategoryCardItems);
  }, []);



  // Get Current Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-lg -z-10">
            <input
              type="text"
              placeholder="search"
              className="border-neutral-300 focus:outline-none focus-visible:ring-0 bg-[#effff5] p-2 sm:p-4 w-full"
            />
            <img
              src={searchIcon}
              alt="Search icon"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
          </div>
          <div className="mt-10">
            <ul className="flex items-center justify-center gap-4 sm:gap-10 flex-wrap w-full sm:w-[800px] cursor-pointer">
              {Companies.map((item, index) => (
                <li
                  key={index}
                  className={`w-1/2 sm:w-auto text-center p-2 rounded ${
                    index === 0 ? "bg-green-500 px-6" : ""
                  }`}
                >
                  {item.company}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center">
          <CategoryCard posts={currentPosts} loading={loading} />
          <Paginate postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
      </div>
    </section>
  );
}
