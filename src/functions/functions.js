export function findEarliestDate(arr) {
  return new Date(
    arr.reduce((acc, loc) =>
      acc.lastVisitTime < loc.lastVisitTime ? acc : loc
    ).lastVisitTime
  ).toDateString();
}

export function parseYoutubeURLs(arr) {
  return arr.map((e) => e.url).filter((ele) => ele.includes("www.youtube.com"))
}

export function videoViews(arr) {
  return new Set(
    arr
      .map((e) => e.url)
      .filter((ele) => ele.includes("www.youtube.com/watch?v="))
  ).size.toLocaleString();
}
