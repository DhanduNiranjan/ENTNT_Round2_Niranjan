
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve product count from localStorage
    const productCount = localStorage.getItem('productCount');
    // Update the product count in dashboard.html
    document.getElementById('productCountPlaceholder').innerText = productCount;

    // Retrieve order count from localStorage
    const orderCount = localStorage.getItem('orderCount');
    // Update the order count in dashboard.html
    document.getElementById('orderCount').innerText = orderCount;
});
