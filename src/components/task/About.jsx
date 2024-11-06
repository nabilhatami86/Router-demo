import React from 'react';
import { FaUser, FaHistory, FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mb-4" style={{ backgroundColor: "#f4f7fa" }}>
        <h1 className="mb-4 text-center text-primary">
          <FaUser className="mb-2" style={{ fontSize: "3rem" }} /> Tentang Kami
        </h1>
        <p className="mt-4 text-muted">
          <FaHistory className="me-2" style={{ fontSize: "1.5rem", color: "#6c757d" }} />
          Didirikan pada tahun 2023, kami bertujuan untuk menyediakan informasi terkini dan akurat seputar teknologi, kesehatan, dan gaya hidup.
        </p>
        <p className="mt-4">
          <FaCheckCircle className="me-2" style={{ fontSize: "1.5rem", color: "#28a745" }} />
          Tim kami terdiri dari penulis berpengalaman yang berdedikasi untuk menyampaikan informasi dengan cara yang mudah dipahami oleh semua kalangan.
        </p>
      </div>

      <div className="card shadow-sm p-4">
        <h4 className="text-primary">Visi & Misi</h4>
        <p>
          Kami berkomitmen untuk menjadi sumber informasi utama yang dapat dipercaya di berbagai bidang penting, dengan tujuan untuk memberikan dampak positif bagi pembaca kami.
        </p>
      </div>
    </div>
  );
};

export default About;
