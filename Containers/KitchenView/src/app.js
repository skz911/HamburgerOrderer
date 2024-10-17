async function fetchOrders() {
    try {
      const response = await fetch('http://localhost:8000/api/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      console.log('Orders data:', data);
      return data; 
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  fetchOrders().then(ordersData => {
    displayOrders(ordersData.orders);
    startAutoRefresh();
  });
  
function displayOrders(orders) {
  const container = document.getElementById('order-container');
  
  orders.forEach(order => {
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order';
    
    const burgerList = order.burgers.length > 0
      ? `<ul>${order.burgers.map(b => 
          `<li>Burger ID: ${b.burgerId} (Ingredients: ${b.ingredients.map(i => i.ingredientName).join(', ')})</li>`).join('')}</ul>`
      : '<p>No burgers for this order</p>';

    const extraItemsList = order.extraItems.length > 0
      ? `<ul>${order.extraItems.map(e => 
          `<li>${e.extraName} (Quantity: ${e.quantity})</li>`).join('')}</ul>`
      : '<p>No extras for this order</p>';

    const drinksList = order.drinks.length > 0
      ? `<ul>${order.drinks.map(d => 
          `<li>${d.drinkName}</li>`).join('')}</ul>`
      : '<p>No drinks for this order</p>';

    orderDiv.innerHTML = `
      <h2>Order ID: ${order.orderId}</h2>
      <h3>Burgers:</h3>
      ${burgerList}
      <h3>Extras:</h3>
      ${extraItemsList}
      <h4>Drinks:</h4>
      ${drinksList}
    `;

    container.appendChild(orderDiv);
  });
}


function startAutoRefresh() {
  setInterval(() => {
    fetchOrders().then(ordersData => {
      const container = document.getElementById('order-container');
      container.innerHTML = ''; 

      displayOrders(ordersData.orders);
    });
  }, 5000); 
}

document.getElementById('refresh-button').addEventListener('click', function() {
  fetchOrders().then(ordersData => {
    const container = document.getElementById('order-container');
    container.innerHTML = ''; 

    displayOrders(ordersData.orders);
  });
});


