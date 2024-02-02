import React, { useState } from "react";

const List = ({
  id,
  name,
  price,
  itemData,
  setItemData,
  setPriceData,
  handleClick,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);

  const handleEditChange = (event) => {
    setEditedItem(event.target.value);
    setEditedPrice(event.target.value);
  };

  const handleCreate = () => {
    let newItemData = itemData.map((data) => {
      if (data.id === id) {
        data.name = editedItem;
      }
      return data;
    });
    let newPriceData = itemData.map((data) => {
      if (data.id === id) {
        data.price = editedPrice;
      }
      return data;
    });
    setItemData(newItemData);
    setPriceData(newPriceData);
    localStorage.setItem("itemData", JSON.stringify(newItemData));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex flex-col w-full max-w-3xl">
        {/* 리스트 */}
        <div className="hover:scale-105 flex justify-between items-center bg-gray-100 p-3 rounded shadow">
          <span className="text-gray-700">{name}</span>
          <span className="text-gray-700">{price}</span>
          <div>
            <button
              onClick={handleCreate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mx-1"
            >
              저장
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mx-1"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full max-w-3xl">
        {/* 리스트 */}
        <div className="hover:scale-105 flex justify-between items-center bg-gray-100 p-3 rounded shadow">
          <span className="text-gray-700">{name}</span>
          <span className="text-gray-700">{price}</span>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mx-1"
            >
              수정
            </button>
            <button
              onClick={() => handleClick(id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mx-1"
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default List;
