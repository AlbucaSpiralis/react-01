import React, { useState } from "react";
import axios from "axios";

interface Node {
  displayName: string;
  offline: boolean;
  executors: [];
}

const JenkinsStatus: React.FC = () => {
  const [openNodes, setOpenNodes] = useState<Node[] | null>(null);

  const checkOpenNodes = async () => {
    try {
      // Replace with your Jenkins server URL and job name
      const JENKINS_URL = "http://localhost:3446";
      const JOB_NAME = "remoteuser";
      const JOB_TOKEN = "11a57977fb3f6f03d03eb05f74de048c4e"; // Set up a token for your job

      // Trigger the job remotely
      //   await axios.post(
      //     `${JENKINS_URL}/job/${JOB_NAME}/buildWithParameters?token=${JOB_TOKEN}`
      //   );

      // Fetch information about open nodes
      const response = await axios.get(`${JENKINS_URL}/computer/api/json`, {
        auth: {
          username: JOB_NAME, // Your Jenkins username
          password: JOB_TOKEN,
        },
      });
      const { computer } = response.data;

      // Filter open nodes
      const openNodes: Node[] = computer.filter(
        (node: Node) => !node.offline && node.displayName === "Built-In Node"
      );

      setOpenNodes(openNodes);
    } catch (error) {
      console.error("Error checking open nodes:", error);
    }
  };

  return (
    <div>
      <button onClick={checkOpenNodes}>Click to check Jenkins Status</button>
      <h2>Jenkins Status:{openNodes ? "Online" : "Offline"}</h2>
      {/* Only display this section when openNodes is not empty*/}
      {openNodes && (
        <div>
          <ul>
            {openNodes.map((node) => (
              <li key={node.displayName}>
                {node.displayName} : {node.executors.length}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JenkinsStatus;
