
// Function to add new Order row
function addOrderRow(Order_Id, Customer_Name, Order_Date, status) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${Order_Id}</td>
      <td>${Customer_Name}</td>
      <td>${Order_Date}</td>
      <td>${status}</td>
      <td>
        <button class="button edit-button">Edit</button>
        <button class="button delete-button">Delete</button>
      </td>
    `;
    document.getElementById("OrderTableBody").appendChild(newRow);
    attachEventListeners(newRow);
  
    // Update order count
    updateOrderCount();
  }
 
  // Delete Order function
  function deleteOrder(event) {
    const row = event.target.closest("tr");
    row.remove();
  
    // Update order count
    updateOrderCount();
  }
  
  // Function to update order count in localStorage
  function updateOrderCount() {
    const table = document.getElementById('orderstable');
    const rowCount = table.querySelectorAll('tbody tr').length;
  
    // Store order count in localStorage
    localStorage.setItem('orderCount', rowCount);
  }
  // Rest of the code...
  