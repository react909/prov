import React from "react";

function Korzina({ korzina, setKorzina }) {
  const removeFromKorzina = (id) => {
    setKorzina((prevKorzina) => prevKorzina.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setKorzina((prevKorzina) =>
      prevKorzina
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="korzina">
      <h2>Корзина</h2>
      {korzina.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        korzina.map((item) => (
          <div key={item.id} className="korzina-item">
            <h3>{item.title}</h3>
            <p>Цена: {item.price} ₽</p>
            <p>Количество: {item.quantity}</p>
            <div className="korzina-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => removeFromKorzina(item.id)}>Удалить</button>
            </div>
          </div>
        ))
      )}33
      <h3 className="korzina-total">
        Общая сумма:{" "}
        {korzina.reduce((total, item) => total + item.price * item.quantity, 0)}{" "}
        ₽
      </h3>
    </div>
  );
}

export default Korzina;
