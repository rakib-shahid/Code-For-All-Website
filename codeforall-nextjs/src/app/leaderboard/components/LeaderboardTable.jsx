"use client";
import React from "react";
import { motion } from "framer-motion";
import "./LeaderboardTable.css";

const LeaderboardTable = ({ data, currentPage, onPageChange }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
  //   const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <table className="leaderboard-table-container">
          <thead>
            <tr className="table-header ">
              <th>Rank</th>
              <th>Discord Username</th>
              <th>Leetcode Username</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((user, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{startIndex + index + 4}</td>
                <td className="table-cell">{user.discord_username}</td>
                <td className="table-cell">{user.username}</td>
                <td className="table-cell">{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className="d-flex justify-content-center gap-3 mt-4"
          style={{ display: "flex" }}
        >
          <button
            className="btn btn-primary"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 0}
            style={{
              backgroundColor: currentPage === 0 ? "#a9a9a9" : "#8F249D",
              color: currentPage === 0 ? "#6b6b6b" : "#FFFFFF",
              border: "none",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "bold",
              marginLeft: "auto",
              opacity: currentPage === 0 ? 0.6 : 1,
              cursor: currentPage === 0 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={startIndex + itemsPerPage >= data.length}
            style={{
              backgroundColor:
                startIndex + itemsPerPage >= data.length
                  ? "#a9a9a9"
                  : "#8F249D",
              color:
                startIndex + itemsPerPage >= data.length
                  ? "#6b6b6b"
                  : "#FFFFFF",
              border: "none",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "bold",
              marginRight: "auto",
              opacity: startIndex + itemsPerPage >= data.length ? 0.6 : 1,
              cursor:
                startIndex + itemsPerPage >= data.length
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            Next
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default LeaderboardTable;
