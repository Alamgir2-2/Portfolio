import { motion } from "framer-motion";

const SpiderWebBackground = () => {
  // কেন্দ্রীয় বিন্দুর অবস্থান (পৃষ্ঠার মাঝখানে)
  const centerX = 50; // 50%
  const centerY = 50; // 50%

  // এলোমেলো ডট জেনারেট করুন
  const dots = Array.from({ length: 50 }).map((_, index) => ({
    id: index,
    x: Math.random() * 100, // X পজিশন (0% থেকে 100%)
    y: Math.random() * 100, // Y পজিশন (0% থেকে 100%)
    size: Math.random() * 3 + 1, // ডটের সাইজ (1px থেকে 4px)
    delay: Math.random() * 2, // অ্যানিমেশনের ডিলে
  }));

  // কেন্দ্রীয় বিন্দু থেকে ছড়িয়ে পড়া লাইন জেনারেট করুন
  const lines = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    angle: (360 / 20) * index, // 20টি লাইন, প্রতিটি 18 ডিগ্রি কোণে
    length: Math.random() * 30 + 20, // লাইনের দৈর্ঘ্য (20% থেকে 50%)
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* ডট অ্যানিমেশন */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [dot.x, dot.x + Math.random() * 10 - 5, dot.x],
            y: [dot.y, dot.y + Math.random() * 10 - 5, dot.y],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: dot.delay,
          }}
          style={{
            position: "absolute",
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: "#4F46E5",
            borderRadius: "50%",
          }}
        />
      ))}

      {/* SVG ব্যবহার করে কেন্দ্রীয় বিন্দু থেকে ছড়িয়ে পড়া লাইন অ্যানিমেশন */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {lines.map((line) => {
          // লাইনের শেষ বিন্দু (x2, y2) ক্যালকুলেট করুন
          const angleInRadians = (line.angle * Math.PI) / 180;
          const x2 = centerX + Math.cos(angleInRadians) * line.length;
          const y2 = centerY + Math.sin(angleInRadians) * line.length;

          return (
            <motion.line
              key={line.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x1: `${centerX}%`,
                y1: `${centerY}%`,
                x2: `${x2}%`,
                y2: `${y2}%`,
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: line.delay,
              }}
              stroke="#4F46E5"
              strokeWidth="1"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default SpiderWebBackground;