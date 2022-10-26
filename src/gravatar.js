import crypto from "crypto";

const gravatar = (string) => {
  const lowerCaseStrting = string.trim().toLowerCase();
  const md5 = crypto.createHash("md5");
  const digest = md5.update(lowerCaseStrting, "binary").digest("hex");
  return `https://www.gravatar.com/avatar/${digest}/?d=retro`;
};

export default gravatar;
