import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const strings = [
    "Exploring new technologies.",
    "Building scalable applications.",
    "Passionate about innovation.",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0); // Tracks the current string
  const typingSpeed = isDeleting ? 50 : 150; // Typing/Deleting speed

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[loop % strings.length];

      if (isDeleting) {
        // Erase characters
        setText((prev) => prev.slice(0, prev.length - 1));
      } else {
        // Add characters
        setText((prev) => currentString.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentString) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        // Move to the next string
        setIsDeleting(false);
        setLoop((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [text, isDeleting, loop, strings, typingSpeed]);

  return (
    <div className="text-2xl text-gray-800 font-mono">
      <span>{text}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;
