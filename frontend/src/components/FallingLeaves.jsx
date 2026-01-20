import { useEffect } from "react";
import "./fallingLeaves.css";

export default function FallingLeaves() {
  useEffect(() => {
    const container = document.querySelector(".background-container");
    const leafCount = 30;

    function createLeaf() {
      const leaf = document.createElement("div");
      leaf.className = "leaf";
      leaf.style.left = `${Math.random() * 100}vw`;
      leaf.style.animationDuration = `${Math.random() * 3 + 3}s`;
      leaf.style.opacity = Math.random() * 0.5 + 0.3;
      leaf.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;

      container.appendChild(leaf);

      leaf.addEventListener("animationend", () => {
        leaf.remove();
        createLeaf();
      });
    }

    for (let i = 0; i < leafCount; i++) {
      setTimeout(createLeaf, i * 150);
    }
  }, []);

  return <div className="background-container"></div>;
}
