import React from 'react';
import { FaConciergeBell, FaComments, FaUserMd } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center text-primary">
        <FaConciergeBell className="mb-3" style={{ fontSize: "3rem" }} /> Layanan Kami
      </h1>

      {/* List of services inside card layout */}
      <div className="card shadow-lg p-4 mb-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="list-group">
          {/* Buletin Mingguan */}
          <div className="list-group-item mb-3">
            <h5><SlEnvolopeLetter style={{ fontSize: "1.8rem" }} /> Buletin Mingguan</h5>
            <p>Dapatkan ringkasan berita dan informasi terbaru setiap minggu langsung ke email Anda.</p>
          </div>

          {/* Konsultasi Ahli */}
          <div className="list-group-item mb-3">
            <h5><FaUserMd style={{ fontSize: "1.8rem" }} /> Konsultasi Ahli</h5>
            <p>Kami menyediakan sesi konsultasi dengan pakar di bidang teknologi dan kesehatan.</p>
          </div>

          {/* Forum Diskusi */}
          <div className="list-group-item">
            <h5><FaComments style={{ fontSize: "1.8rem" }} /> Forum Diskusi</h5>
            <p>Bergabunglah dengan komunitas kami dan diskusikan topik-topik menarik dengan sesama pembaca.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
