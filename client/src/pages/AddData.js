import { Link } from "react-router-dom";
import Search from '../components/Search';
import mockData from '../mock';

function AddData() {
  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white relative">
      <Link to="/">
        <button className="bg-gray-300 hover:bg-gray-700 font-bold py-1 px-3 rounded border-gray-600 absolute top-4 right-4">
          X
        </button>
      </Link>
      <Search database={ mockData }/>
    </div>
  );
}

export default AddData;
