import React from 'react';
import { FaInfoCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-5" style={{ backgroundColor: "#f8f9fa" }}>
        <h1 className="mb-4 text-center text-primary">
          <FaInfoCircle className="mb-3" style={{ fontSize: "3rem" }} /> 
          Selamat Datang di Router Demo
        </h1>
        <p className="lead text-muted">
          Kami adalah sumber informasi terpercaya tentang teknologi, kesehatan, dan gaya hidup. Temukan artikel terbaru dan ulasan mendalam seputar berbagai topik menarik.
        </p>
        <p className="mt-3">
          Jelajahi situs kami untuk menemukan informasi bermanfaat yang dapat membantu Anda dalam kehidupan sehari-hari.
        </p>
      </div>
    </div>
  );
};

export default Home;
