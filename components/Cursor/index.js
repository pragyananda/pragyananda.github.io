import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "next-themes";

const Cursor = () => {
  const { theme } = useTheme();
  const [mount, setMount] = useState(false);

  const getCusomColor = () => {
    return theme === "dark" ? "255, 255, 255" : "0, 0, 0";
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      {mount && (
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color={getCusomColor()} // Use the custom color here
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      )}
    </>
  );
};

export default Cursor;
