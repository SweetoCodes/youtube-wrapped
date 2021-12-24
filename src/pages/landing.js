import NavButton from "../components/buttons/nav-button";
import Title from "../components/widgets/yt-wrapped-title";
import { findEarliestDate } from "../functions/functions";
// You don't seem to have any browsing history past {date}.
// This extension uses your browsing history to see what your youtube usage has been like for the past 3 months.
// If you delete broswing data, those videos won't show up here and will skew your statistics

export default function Landing(props) {
  return (
    <div className="w-full space-y-6 m-auto">
      <Title />
      <div className="text-white text-center text-xl">
        View your Youtube stats since {findEarliestDate(props.data)}
      </div>
      <div className="flex justify-center ">
        <NavButton
          link="/videoviews"
          text="View Your Youtube Wrapped"
          reverse={false}
        />
      </div>
    </div>
  );
}
