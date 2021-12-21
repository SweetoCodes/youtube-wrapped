import { Link } from "react-router-dom";

export default function Landing(props) {
  return (
    <div className=" h-full w-full ">
      Landingx {props.data.length} <Link to="/page2">to p2</Link>{" "}
    </div>
  );
}

// lastVisitTime: 1639860516543.5469
// title: "Reid Hoffman and Chamath Palihapitiya on Angel Investing and The Future of Venture - YouTube"
// typedCount: 0
// url: "https://www.youtube.com/watch?v=w-VDSQSHND8&ab_channel=VillageGlobal"
// visitCount: 3

// You don't seem to have any browsing history past {date}.
// This extension uses your browsing history to see what your youtube usage has been like for the past 3 months.
// If you delete broswing data, those videos won't show up here and will skew your statistics

// You've visited youtube {number} many times in the past 3 months. That's {number} times.
// Some times you go directly to a video, {number} times to be exact. Sometimes you don't, you've goe down a youtube hole {number} times.
// You've watched around x many minutes of youtube.
// You've visited {channel} the most at a whopping {number} many times, watching {number} many videos from them. Here's how other videos rank.
// Your most visited video is {video name}, you've visited it {number} many times. Here's how other videos rank.
// Of all the pages you have visited in the past 3 months, x% of them have been youtube. It's your #{number} most visited site.
// Conclusion: Built by [me] with love, view the code here and the videos here.
