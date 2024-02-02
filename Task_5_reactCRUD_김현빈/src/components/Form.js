import React from "react";

export default function Forms({
  itemName,
  setItemName,
  itemPrice,
  setPrice,
  handleCreate,
}) {
  console.log("Form");
  const handleChange = (e) => {
    setItemName(e.target.itemName);
    setPrice(e.target.price);
  };

  return (
    <form onSubmit={handleCreate}>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
            htmlFor="item-name"
          >
            품명
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-0 leading-tight focus:outline-none  focus:bg-white"
            id="item-name"
            type="text"
            name="itemName"
            itemName={itemName}
            onChange={handleChange}
            placeholder="품명을 입력하세요..."
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
            htmlFor="item-price"
          >
            가격
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="item-price"
            type="number"
            name="price"
            price={itemPrice}
            onChange={handleChange}
            placeholder="0"
          />
        </div>
        <div className="flex justify-start md:justify-start">
          <button onClick = {handleCreate}
            className="bg-green-500 hover:bg-green-700 text-white font-bold mx-3 my-3 py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
                  >
                      생성
          </button>
        </div>
      </div>
    </form>
  );
}
