export function parseFirebaseTime(date) {
  try {
    const milliseconds = Math.floor(
      date.seconds * 1000 + date.nanoseconds / 1e6
    );
    const resDate = new Date(milliseconds);
    const hours = resDate.getHours();
    const minutes = resDate.getMinutes();
    const timeString = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;

    return timeString;
  } catch {
    return "";
  }
}
