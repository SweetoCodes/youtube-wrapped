export function parseYoutubeURLs(arr) {
  return arr.map((e) => e.url).filter((ele) => ele.includes("www.youtube.com"));
}

export function containsString(arr, str) {
  return arr.filter((ele) => ele.includes(str));
}

export function aggregateEntries(arr) {
  const count = {};
  for (const element of arr) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return count;
}

export function sortObject(obj) {
  var sortable = [];
  for (var i in obj) {
    sortable.push([i, obj[i]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  return sortable;
}

export function findEarliestDate(arr) {
  return new Date(
    arr.reduce((acc, loc) =>
      acc.lastVisitTime < loc.lastVisitTime ? acc : loc
    ).lastVisitTime
  ).toDateString();
}

export function videoViews(arr) {
  const youtubeURLS = parseYoutubeURLs(arr);
  const containsWatch = containsString(youtubeURLS, "www.youtube.com/watch?v=");
  const uniqueVideoIDS = new Set(
    containsWatch.map((e) => e.split("watch?v=", 2)[1].split("&", 2)[0])
  );
  return uniqueVideoIDS.size.toLocaleString();
}

export function topVideos(arr) {
  const youtubeURLS = parseYoutubeURLs(arr);
  const containsWatch = containsString(youtubeURLS, "www.youtube.com/watch?v=");
  const ids = containsWatch.map(
    (e) => e.split("watch?v=", 2)[1].split("&", 2)[0]
  );
  const countIds = aggregateEntries(ids);
  const sortable = sortObject(countIds);
  return sortable;
}

export function uniqueChannelViews(arr) {
  const youtubeURLS = parseYoutubeURLs(arr);
  const containsChannel = containsString(
    youtubeURLS,
    "https://www.youtube.com/c/"
  );
  const channels = new Set(
    containsChannel.map((e) => e.split("/c/", 2)[1].split("/", 2)[0])
  );
  return channels.size.toLocaleString();
}

export function topChannels(arr) {
  const youtubeURLS = parseYoutubeURLs(arr);
  const containsChannel = containsString(
    youtubeURLS,
    "https://www.youtube.com/c/"
  );
  const channels = containsChannel.map(
    (e) => e.split("/c/", 2)[1].split("/", 2)[0]
  );
  const countIds = aggregateEntries(channels);
  const sortable = sortObject(countIds);
  return sortable;
}

export function siteViews(arr) {
  const urls = arr.map((e) => new URL(e.url).hostname);
  const countURLs = aggregateEntries(urls);
  const sortable = sortObject(countURLs);
  return sortable;
}

export function viewYoutubePercentage(arr) {
  const siteVisits = siteViews(arr)
  var youtubeViews = 0
  for (var i = 0; i < siteVisits.length; i++) {
    if (siteVisits[i][0] == 'www.youtube.com') youtubeViews=siteVisits[i][1]
  }

  var sum = 0;
  for (let i = 0; i < siteVisits.length; i++) {
      sum += siteVisits[i][1];
  }
  return Math.ceil(100*youtubeViews/sum)
}

export function getYoutubeRank(arr) {
  const siteVisits = siteViews(arr)
  var youtubeRank = 0
  for (var i = 0; i < siteVisits.length; i++) {
    if (siteVisits[i][0] == 'www.youtube.com') youtubeRank=i+1
  }
  return youtubeRank
}