function Cart({ item }) {
  return (
   <div>
     <div className="card">

         <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Age: {item.age}</p>
      </div>
   </div>
    
  );
}

export default Cart;
