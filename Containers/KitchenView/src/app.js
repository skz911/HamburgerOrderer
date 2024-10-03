// Function to fetch and display orders
async function fetchOrders() {
    try {
      // Fetch the JSON file and wait for the response
      const response = await fetch('../public/assets/orders.json');
      
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON data and wait for it
      const data = await response.json();
  
      // Log the fetched data
      console.log('Orders data:', data);
  
      return data; // Return the fetched data to use it elsewhere
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the fetchOrders function and wait for the data
  fetchOrders().then(ordersData => {
    // Here you can call the displayOrders function or use ordersData as needed
    displayOrders(ordersData.orders);
  });
  
  // Function to display orders
  function displayOrders(orders) {
    const container = document.getElementById('order-container');
  
    orders.forEach(order => {
      const orderDiv = document.createElement('div');
      orderDiv.className = 'order';
  
      orderDiv.innerHTML = `
        <h2>Order ID: ${order.orderId}</h2>
        <p>Status: ${order.status}</p>
        <h3>Hamburger:</h3>
        <ul>
          ${Object.keys(order.hamburger).map(item => `<li>${item}: ${order.hamburger[item]}</li>`).join('')}
        </ul>
        <h3>Extras:</h3>
        <p>Fries: ${order.extra.fries}</p>
        <h4>Sauces:</h4>
        <ul>
          ${order.extra.sauce.map(s => `<li>${s.flavour}</li>`).join('')}
        </ul>
        <h4>Drinks:</h4>
        <ul>
          ${order.extra.drinks.map(d => `<li>${d.flavour} (${d.size})</li>`).join('')}
        </ul>
      `;
  
      container.appendChild(orderDiv);
    });
  }
  