//export default function getHealth({ name, health }) {
//const name = "Маг";
//  if (((name = "Маг"), health > 50)) return "healthy";
//  if (((name = "Маг"), health >= 15)) return "wounded";
//  return "critical";
//}

export default function getHealth(player) {
  const status = { name: "Маг", healthy: 51, wounded: 15, critical: 0 };
  const name = "Маг";
  return Object.keys(status).find((name) => status[name] <= player.health);
}
