import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 250, y: 50 },
    data: { label: "Bot Component" },
    type: "input",
  },
];

const Bot: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow nodes={initialNodes} edges={[]}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Bot;
