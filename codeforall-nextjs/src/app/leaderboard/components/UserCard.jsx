import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { FaDiscord, FaPython, FaJs, FaJava, FaRust } from "react-icons/fa";
import {
  SiC,
  SiTypescript,
  SiLeetcode,
  SiCplusplus,
  SiKotlin,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export default function UserCard({ isOpen, onOpenChange, searchResult }) {
  const error = searchResult === null;

  const getLangIcon = (lang) => {
    switch (lang.toLowerCase()) {
      case "python":
      case "python3":
        return <FaPython className="inline text-blue-500 mr-2" />;
      case "javascript":
        return <FaJs className="inline text-yellow-500 mr-2" />;
      case "java":
        return <FaJava className="inline text-red-500 mr-2" />;
      case "c":
        return <SiC className="inline text-teal-500 mr-2" />;
      case "c++":
      case "cpp":
      case "cplusplus":
        return <SiCplusplus className="inline text-blue-800 mr-2" />;
      case "typescript":
        return <SiTypescript className="inline text-blue-400 mr-2" />;
      case "golang":
        return <FaGolang className="inline text-teal-500 mr-2" />;
      case "rust":
        return <FaRust className="inline text-orange-500 mr-2" />;
      case "kotlin":
        return <SiKotlin className="inline text-purple-500 mr-2" />;
      default:
        return null;
    }
  };

  const formatTimestamp = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="lg"
      className="p-4"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Search Result
            </ModalHeader>
            <ModalBody className="text-xl">
              {error == false ? (
                <>
                  <img
                    src={searchResult.avatar}
                    alt="User Avatar"
                    className="rounded-xl w-80 h-80 mx-auto my-4 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://leetcode.com/u/" +
                          searchResult.leetcode_username,
                        "_blank"
                      )
                    }
                  />
                  <h1>
                    <span className="font-bold">
                      <FaDiscord className="inline mr-2" />
                      {searchResult.discord_username}
                    </span>
                  </h1>
                  <h1>
                    <span className="font-bold text-purple-500 underline">
                      <SiLeetcode className="inline mr-2" />
                      <a
                        href={
                          "https://leetcode.com/u/" +
                          searchResult.leetcode_username
                        }
                        target="_blank"
                      >
                        {searchResult.leetcode_username}
                      </a>
                    </span>
                  </h1>
                  <h1>
                    <span className="font-bold">📈 Local Ranking:</span>{" "}
                    {searchResult.local_ranking}
                  </h1>
                  <h1>
                    <span className="font-bold">🌍 Global Ranking:</span>{" "}
                    {searchResult.ranking}
                  </h1>
                  <h1>
                    <span className="font-bold">🏆 Wins:</span>{" "}
                    {searchResult.wins}
                  </h1>
                  <h1>
                    <span className="font-bold">
                      Recent Accepted Submissions:
                    </span>{" "}
                  </h1>

                  <ul className="list-disc ml-6">
                    {searchResult.problems.submission.map((problem, index) => (
                      <li key={index} className="mb-2">
                        {getLangIcon(problem.lang)}
                        <a
                          href={`https://leetcode.com/problems/${problem.titleSlug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline text-md"
                        >
                          {problem.title}
                        </a>{" "}
                        -{" "}
                        <span className="text-gray-500 text-sm">
                          {formatTimestamp(problem.timestamp)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <h1 className="text-center text-red-500 font-bold text-3xl">
                    User not found!
                  </h1>
                  <img
                    src="https://media1.tenor.com/m/lxJgp-a8MrgAAAAd/laeppa-vika-half-life-alyx.gif"
                    alt="Not Found gif"
                    className="rounded-xl w-90 mx-auto m-4"
                  />
                </>
              )}
            </ModalBody>
            {/* <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter> */}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
