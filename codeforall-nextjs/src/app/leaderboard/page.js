"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/home_components/Header";
import LottieAnimation from "@/components/home_components/LottieAnimation";
import Social from "@/components/home_components/Social";
import "./Leaderboard.css";
import LeaderboardPodium from "./components/LeaderboardPodium";
import LeaderboardTable from "./components/LeaderboardTable";
import LeaderboardHistory from "./components/LeaderboardHistory";

export default function Leaderboard({}) {
  const [initialLeaderboard, setLeaderboard] = useState([]);
  const [initialLeaderboardHistory, setLeaderboardHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [historyPage, setHistoryPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [leaderboardResponse, leaderboardHistoryResponse] =
          await Promise.all([
            fetch("https://server.rakibshahid.com/leaderboard", {
              cache: "no-store",
            }),
            fetch(
              "https://server.rakibshahid.com/leaderboard/leaderboard_history",
              {
                next: { revalidate: 10 },
              }
            ),
          ]);

        const leaderboardData = await leaderboardResponse.json();
        const leaderboardHistoryData = await leaderboardHistoryResponse.json();

        setLeaderboard(leaderboardData);
        setLeaderboardHistory(leaderboardHistoryData);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleView = () => {
    setShowHistory(!showHistory);
  };

  const topThree = initialLeaderboard.slice(0, 3);
  const rest = initialLeaderboard.slice(3);

  const handlePageChange = (newPage) => {
    if (showHistory) {
      setHistoryPage(newPage);
    } else {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-white">
      <LottieAnimation />
      <div className="leaderboard-container h-[120vh]">
        <div className="content-container">
          <Header />
          <div style={{ margin: "0 auto" }}>
            <h1
              className="text-center my-4 title-container"
              style={{
                paddingBottom: showHistory ? "0px" : "120px",
              }}
            >
              {showHistory ? "All-Time Leaderboard" : "Leetcode Leaderboard"}
            </h1>
            {!showHistory && <LeaderboardPodium topThree={topThree} />}

            <div
              className="d-flex justify-content-center mb-4 mt-4 "
              style={{ display: "flex" }}
            >
              <button
                className="btn btn-primary text-white"
                style={{
                  backgroundColor: "#c938ff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                  margin: "auto",
                  zIndex: 1000,
                }}
                onClick={toggleView}
              >
                {showHistory ? "Show Current Rankings" : "Show All-Time Stats"}
              </button>
            </div>

            {showHistory ? (
              <LeaderboardHistory
                data={initialLeaderboardHistory}
                currentPage={historyPage}
                onPageChange={handlePageChange}
              />
            ) : (
              <LeaderboardTable
                data={rest}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
        <div className="social-container">
          <Social />
        </div>
      </div>
    </div>
  );
}
