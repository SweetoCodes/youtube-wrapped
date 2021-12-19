/*global chrome*/
import "./App.css";

function App() {
  return (
    <div className=" h-[600px] w-[800px]">
      <p className="text-3xl font-bold">Init</p>
      <button
        onClick={() => {
           chrome.history.search({
                  text: '',
                  maxResults: 1000000, //defaults to 100, set arbitrarily high to get all results
                  startTime:1 // defaults to one day, this gets the full 3 onth history
              }, function(results) {
                  console.log(results);
              })
        }}
      >Click for logging</button>
    </div>
  );
}

export default App;