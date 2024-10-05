export async function getClientIP() {
  const response = await fetch("https://1.0.0.1");
  const data = await response.text();
  const ipMatch = data.match(/ip=([0-9.]+)/);

  return ipMatch[1];
}
