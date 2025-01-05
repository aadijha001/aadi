import React, { useState, useEffect, useRef } from "react";

const TypingEffect = () => {
  const strings = [
    "Exploring new technologies.",
    "Building scalable applications.",
    "Passionate about innovation.",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const typingSpeed = isDeleting ? 50 : 150;

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleTyping = () => {
      const currentString = strings[loop % strings.length];

      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setText((prev) => currentString.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentString) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loop, strings, typingSpeed, isVisible]);

  return (
    <div ref={ref} className="text-2xl text-gray-800 font-mono">
      <span>{text}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;
