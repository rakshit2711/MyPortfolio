import React from "react";

const HuggingFaceIcon = ({ width = 40, height = 40 }) => {
  return (
    <img
      src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo-pirate.png"
      alt="Hugging Face"
      width={width}
      height={height}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    />
  );
};

export default HuggingFaceIcon;