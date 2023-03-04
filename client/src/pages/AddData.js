import { Link } from "react-router-dom";
import { useState } from "react";
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import DataDetail from '../components/DataDetail';

function AddData({ foodDb }) {
  const [selectedItem, setSelectedItem] = useState({});
  const [searchResult, setSearchResult] = useState([]);
  const [showList, setShowList] = useState(true);
  const [showDetail, setShowDetail] = useState(true);

  const handleSelectedItemChange = (item) => {
    setSelectedItem(item);
  };


  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white relative">
      <Link to="/">
        <button className="bg-gray-300 hover:bg-gray-700 font-bold py-1 px-3 rounded border-gray-600 absolute top-4 right-4">
          X
        </button>
      </Link>
      <Search
        database={foodDb}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        setShowList={setShowList}
        setShowDetail={setShowDetail} />
      <SearchResult
        searchResult={searchResult}
        showList={showList}
        setSelectedItem={handleSelectedItemChange}
        setShowList={setShowList}
        setShowDetail={setShowDetail}
       />
      <DataDetail
        selectedItem={selectedItem}
        showDetail={showDetail} />
    </div>
  );
}

export default AddData;
