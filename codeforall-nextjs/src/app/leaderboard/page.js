"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "./Leaderboard.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = dynamic(() => import("@/components/home_components/Header"), {
  ssr: true,
});
const LottieAnimation = dynamic(
  () => import("@/components/home_components/LottieAnimation"),
  { ssr: true }
);
const Social = dynamic(() => import("@/components/home_components/Social"), {
  ssr: true,
});
const LeaderboardPodium = dynamic(
  () => import("./components/LeaderboardPodium"),
  { ssr: true }
);
const LeaderboardTable = dynamic(
  () => import("./components/LeaderboardTable"),
  { ssr: true }
);
const LeaderboardHistory = dynamic(
  () => import("./components/LeaderboardHistory"),
  { ssr: true }
);
const SearchBar = dynamic(() => import("./components/SearchBar"), {
  ssr: true,
});

export default function Leaderboard({}) {
  const [showHistory, setShowHistory] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [historyPage, setHistoryPage] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const { data: leaderboardData, error: leaderboardError } = useSWR(
    "https://server.rakibshahid.com/leaderboard",
    fetcher
  );
  const { data: leaderboardHistoryData, error: historyError } = useSWR(
    "https://server.rakibshahid.com/leaderboard/leaderboard_history",
    fetcher
  );
  if (leaderboardError || historyError) {
    return <div>Failed to load data</div>;
  }
  if (!leaderboardData || !leaderboardHistoryData) {
    return <div className="text-black">Loading...</div>;
  }

  const toggleView = () => {
    setShowHistory(!showHistory);
  };

  const topThree = leaderboardData.slice(0, 3);
  const rest = leaderboardData.slice(3);

  const handlePageChange = (newPage) => {
    if (showHistory) {
      setHistoryPage(newPage);
    } else {
      setCurrentPage(newPage);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search");

    console.log(searchQuery);
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

            {!showHistory && (
              <SearchBar onSubmit={onSubmit} disabled={showCard} />
            )}

            {showHistory ? (
              <LeaderboardHistory
                data={leaderboardHistoryData}
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
