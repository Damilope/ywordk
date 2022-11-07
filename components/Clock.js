import React from "react";

export default function Clock() {
  const [, setTime] = React.useState(Date.now);
  React.useEffect(() => {
    const handle = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(handle);
  }, []);

  const date = new Date();
  return (
    <span>
      {pad(date.getHours())}:{pad(date.getMinutes())}
      {/* .{date.getSeconds().toString().padStart(2, "0")} */}
    </span>
  );
}

function pad(text) {
  return text.toString().padStart(2, "0");
}
