import React, { Fragment, useEffect } from "react";
import Blog from "./Blog/Blog";
import "./Blogs.css";
import WRITE from "../../media/createBlog.svg";
import { getBlogs } from "../../actions/blogs";
import { useSelector, useDispatch } from "react-redux";
import BlogsSideBar from "./BlogSiderbar/BlogsSideBar";

function Blogs() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBlogs());
	}, [dispatch]);
	const Blogs = useSelector((state) => state.blogs);

	const sideBarElement = [
		{ Element: { name: "Home", address: "/" } },
		{ Element: { name: "Event", address: "/events" } },
		{ Element: { name: "Domains", address: "/domains" } },
		{ Element: { name: "Bookmarked", address: "/" } },
	];

	return (
    <>
      <div className="blogs-main-container">
        <div className="blogs-sidebar-container">
          <BlogsSideBar array={sideBarElement} />
        </div>

        <div className="blogs-container">
          <div className="blogs-container-header">
            <div className="blogs-container-sort">
              <p>
                <a href="#">Latest</a>
              </p>
              <p>
                <a href="#">Top</a>
              </p>
              <p>
                <a href="#">Saved</a>
              </p>
            </div>
            <div className="blogs-container-header-createBlog">
              <p>
                <a href="/write">Wirte a Blog</a>
              </p>
              <img src={WRITE} alt="write" />
            </div>
          </div>
          <div className="blogs-container-bloglist">
            {Blogs?.map((blog, i) => (
              <Fragment key={i}>
                <Blog blog={blog} />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="blogs-recently-queried">
          <p className="blogs-recently-queried-heading">Recently queried</p>
          <ul className="blogs-recently-queried-list">
            {/* {RecentlySeen.map((item, index) => (
							<a href={item.Element.address} key={index}>
								<li className='blogs-recently-queried-list-element'>
									{item.Element.name}
								</li>
							</a>
						))} */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Blogs;
