import React from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";

import InputNode from "./InputNode";
import ResultNode from "./ResultNode";

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};

const FlowCanvas = ({ prompt, setPrompt, response }) => {
  const nodes = [
    {
      id: "1",
      type: "inputNode",
      position: { x: 220, y: 170 },
      data: { prompt, setPrompt },
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 560, y: 170 },
      data: { response },
    },
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
      style: { stroke: "#2563eb", strokeWidth: 2 },
    },
  ];

  return (
    <div
      style={{
        height: "500px",
        background: "#f1f5f9",
        borderRadius: "10px",
        border: "1px solid #e5e7eb",
        overflow: "hidden",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnDrag={false}
        nodesDraggable={false}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;