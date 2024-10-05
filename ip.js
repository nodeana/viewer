export async function getClientIP() {
  const response = await fetch("https://ip.viewer.sh");
  const data = await response.text();

  return data;
}
