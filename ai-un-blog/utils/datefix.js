export function formatDate(isoString) {
  if (!isoString) return "Invalid Date"; 

  const date = new Date(isoString);
  if (isNaN(date.getTime())) return "Invalid Date"; // Handle invalid date

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return addOrdinalSuffix(formattedDate);
}

// ✅ Function to add ordinal suffix (st, nd, rd, th)
function addOrdinalSuffix(dateString) {
  const day = parseInt(dateString.match(/\d+/)[0], 10); // Extract the day number
  let suffix = "th";

  if (day % 10 === 1 && day !== 11) suffix = "st";
  else if (day % 10 === 2 && day !== 12) suffix = "nd";
  else if (day % 10 === 3 && day !== 13) suffix = "rd";

  return dateString.replace(/\d+/, `${day}${suffix}`);
}