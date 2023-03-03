
function DataDetail({ selectedItem, showDetail }) {
  if (showDetail && selectedItem.id) {
    return (
      <div className="flex flex-col items-center">
        <h1>{selectedItem.name}</h1>
        <img src={selectedItem.imageUrl} className="w-24"></img>
        <p>
          Amount : {selectedItem.baseAmount} {selectedItem.unit}
        </p>
        <p>Caffeine : {selectedItem.caffeine} mg</p>
        <button
          type="button"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          SAVE
        </button>
      </div>
    );
  }
}

export default DataDetail;
