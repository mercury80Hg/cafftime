
function SearchResult({ searchResult, showList, selectedItem, setSelectedItem, setShowList, setShowDetail }) {

  const handleClick = (e) => {
    setShowList(false);
    setShowDetail(true);
    setSelectedItem(e);
  };


  if (showList) {
    return (
      <div>
          <ul className="results mx-10">
            {searchResult.map((result) => {
              return (
                <li
                  key={result.id}
                  className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 hover:bg-amber-300 active:bg-amber-300"
                  onClick={() => handleClick(result)}
                >
                  <span>{result.name}</span>
                </li>
              );
            })}
          </ul>
      </div>
    );
  }
}

export default SearchResult;
