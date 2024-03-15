
// Function to add new Product row
function addProductRow(Name, Category, Price, Stock_Quantity) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${Name}</td>
        <td>${Category}</td>
        <td>${Price}</td>
        <td>${Stock_Quantity}</td>
        <td>
            <button class="button edit-button">Edit</button>
            <button class="button delete-button">Delete</button>
        </td>
    `;
    document.getElementById("ProductTableBody").appendChild(newRow);
    attachEventListeners(newRow);

    updateProductCount();

}
// Delete Product function
function deleteProduct(event) {
    const row = event.target.closest("tr");
    row.remove();


    updateProductCount();
}


function updateProductCount() {
    const table = document.getElementById('ProductTable');
    const rowCount = table.querySelectorAll('tbody tr').length;
    console.log("Row count:", rowCount);
    // Store order count in localStorage
    localStorage.setItem('productCount', rowCount);
}

