"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "./Leaderboard.css";
import useSWR from "swr";
// import { Spinner, useDisclosure } from "@heroui/react";

const fetcher = (url, options = {}) =>
  fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Fetcher error:", error);
      throw error;
    });

const Spinner = dynamic(() => import("@heroui/spinner"), { ssr: false });
const useDisclosure = dynamic(() => import("@heroui/react"), { ssr: false });
const Header = dynamic(() => import("@/components/home_components/Header"), {
  ssr: true,
});
const UserCard = dynamic(() => import("./components/UserCard"), {
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
const AnimationWrapper = dynamic(
  () => import("@/components/home_components/AnimationWrapper"),
  { ssr: true }
);

export default function Leaderboard({}) {
  const [showHistory, setShowHistory] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [historyPage, setHistoryPage] = useState(0);
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState(null);

  // Modal state management
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

  const toggleView = () => {
    setShowHistory(!showHistory);
  };

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

    if (!searchQuery) {
      setSearchError("Search query cannot be empty.");
      return;
    }

    try {
      // try discord endpoint
      let response = await fetch(
        "https://server.rakibshahid.com/api/discord_lookup",
        {
          method: "GET",
          headers: {
            "discord-username": searchQuery,
          },
        }
      );

      if (!response.ok) {
        // fallback to leetcode endpoint
        response = await fetch(
          "https://server.rakibshahid.com/api/leetcode_lookup",
          {
            method: "GET",
            headers: {
              "leetcode-username": searchQuery,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Both APIs failed to fetch user data.");
        }

        // leetcode success
        const leetcodeData = await response.json();
        console.log("Leetcode User Data:", leetcodeData);
        setSearchResult(leetcodeData);
      } else {
        // discord success
        const discordData = await response.json();
        console.log("Discord User Data:", discordData);
        setSearchResult(discordData);
      }

      setSearchError(null);
      onOpen();
    } catch (error) {
      console.error("Error during search request:", error);
      setSearchResult(null);
      setSearchError(error.message);
      onOpen();
    }
  };

  //   if (!leaderboardData || !leaderboardHistoryData) {
  //     return <div className="text-black">Loading...</div>;
  //   }

  return (
    <div className="bg-white">
      <LottieAnimation />
      <div className="leaderboard-container h-[120vh]">
        <div className="content-container">
          {leaderboardData ? (
            <div style={{ margin: "0 auto" }}>
              <Header />
              <h1
                className="text-center title-container text-[3rem] mb-4 px-4"
                style={{
                  paddingBottom: showHistory ? "0px" : "120px",
                }}
              >
                {showHistory ? "All-Time Leaderboard" : "Leetcode Leaderboard"}
              </h1>
              {!showHistory && (
                <LeaderboardPodium topThree={leaderboardData.slice(0, 3)} />
              )}

              <div
                className="d-flex justify-content-center mb-4 mt-4"
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
                    zIndex: 2,
                  }}
                  onClick={toggleView}
                >
                  {showHistory
                    ? "Show Current Rankings"
                    : "Show All-Time Stats"}
                </button>
              </div>

              {!showHistory && (
                <SearchBar onSubmit={onSubmit} disabled={isOpen} />
              )}

              {showHistory ? (
                <LeaderboardHistory
                  data={leaderboardHistoryData}
                  currentPage={historyPage}
                  onPageChange={handlePageChange}
                />
              ) : (
                <LeaderboardTable
                  data={leaderboardData.slice(3)}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              )}

              {}

              <UserCard
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                searchResult={searchResult}
              />
            </div>
          ) : (
            <AnimationWrapper>
              <div className="flex justify-center items-center h-[80vh]">
                <Spinner />
              </div>
            </AnimationWrapper>
          )}
        </div>
        <div className="social-container">
          <Social />
        </div>
      </div>
    </div>
  );
}
