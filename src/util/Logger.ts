import { Webhook } from "./Webhook";

export function log(
  title: string,
  message: string,
  type?: "log" | "warn" | "error",
) {
  const currentTime = new Date().toLocaleString();

  let str = "";
  let color = "";

  switch (type) {
    case "warn":
      str = `[${currentTime}] [PID: ${process.pid}] [WARN] [${title}] ${message}`;
      color = "\x1b[38;5;214m"; // Orange-ish color
      console.warn(`${color}${str}\x1b[0m`); 
      break;

    case "error":
      str = `[${currentTime}] [PID: ${process.pid}] [ERROR] [${title}] ${message}`;
      color = "\x1b[38;5;196m"; // Red color
      console.error(`${color}${str}\x1b[0m`);
      break;

    default:
      str = `[${currentTime}] [PID: ${process.pid}] [LOG] [${title}] ${message}`;
      color = "\x1b[38;5;33m"; // Blue-ish color
      console.log(`${color}${str}\x1b[0m`); 
      break;
  }

  if (str) Webhook(str);
}
