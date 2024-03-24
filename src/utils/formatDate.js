export function parseFirebaseTime(date) {
  try {
    const milliseconds = Math.floor(
      date.seconds * 1000 + date.nanoseconds / 1e6
    );
    const resDate = new Date(milliseconds);
    const hours = resDate.getHours();
    const minutes = resDate.getMinutes();
    const timeString = `${hours}:${minutes}`;

    return timeString;
  } catch {
    return "";
  }
}
