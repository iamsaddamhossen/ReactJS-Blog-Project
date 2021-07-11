import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8080/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }




    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === 'saddam')} title="Saddam's Blogs!"/> */}

        </div>
    );
}

export default Home;