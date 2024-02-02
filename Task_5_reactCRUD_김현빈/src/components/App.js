import "../App.css";
import React, { useState, useCallback } from "react";
import Forms from "./Form";
import List from "./List";

function App() {
  const [itemData, setItemData] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setPriceData] = useState("");
  // Tododata가 바뀔때만
  const handleClick = useCallback(
    (id) => {
      let newItemData = itemData.filter((data) => data.id !== id);
      setItemData(newItemData);
    },
    [itemData]
  );

  const handleCreate = (e) => {
    // 리로드를 막아줌
    e.preventDefault();
    // 새로운 데이터 만들기
    let newItem = {
      id: Date.now(),
      name: itemName,
      itemPrice: itemPrice,
    };

    setItemData((prev) => [...prev, newItem]);
    localStorage.setItem("itemData", JSON.stringify([...itemData, newItem]));
    setItemName("");
    setPriceData("");
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-5 ">예산 계산기</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        {/* 품명 가격 폼 */}
        <Forms
          itemData={itemData}
          itemName={itemName}
          setItemName={setItemName}
          itemPrice={itemPrice}
          setPrice={setPriceData}
          handleCreate={handleCreate}
        />
        <List
          itemData={itemData}
          setItemData={setItemData}
          setPriceData={setPriceData}
          handleClick={handleClick}
        />
        <div className="flex justify-start md:justify-start">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold mt-3 mb-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            목록 지우기
          </button>
        </div>
        <div>
          <span className="tracking-wide text-gray-700 text-s font-bold">
            총 합 : &nbsp;
          </span>
          <span className="tracking-wide text-gray-700 text-s font-bold">
            9000
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
