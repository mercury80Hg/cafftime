import CaffSimulator from '../components/CaffSimulator';
import LineGraph from '../components/LineGraph';
import PieChart from '../components/PieChart';


function Daily({ todaySum, logs }) {
  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white">
      <h1 className="text-2xl font-bold mt-8"> TODAY </h1>
      <div className="block p-6 bg-gray-50 border border-gray-200 rounded-lg shadow m-2 flex justify-between items-center">
        <div className="w-1/2">
          <PieChart todaySum={todaySum}></PieChart>
        </div>
        <div className="w-1/2">
          <p className="text-2xl font-bold mt-8">{todaySum} mg</p>
          <hr />
          <p className="text-2xl font-bold mt-8">400 mg</p>
        </div>
      </div>
      <div className="block p-6 bg-gray-50 border border-gray-200 rounded-lg shadow m-2">
        <CaffSimulator logs={logs}></CaffSimulator>
        <LineGraph></LineGraph>
      </div>
      <div className="block p-6 bg-gray-50 border border-gray-200 rounded-lg shadow m-2">
        <p className="text-xs text-gray-500 text-left my-2">
          ☕ For healthy adults, the FDA has cited 400 milligrams a day as an
          amount not generally associated with negative effects.
        </p>
        <p className="text-xs text-gray-500 text-left my-2">
          😴 The FDA suggests that one cup of coffee can keep you awake at bedtime, equivalent to 50mg present at bedtime. It depends on individual
          factors like caffeine tolerance.
        </p>
      </div>
    </div>
  );
}

export default Daily;
