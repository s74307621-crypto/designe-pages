let cartCount = 0; 
 
  document.addEventListener("click", function (e) { 
    if (e.target.classList.contains("add-to-cart")) { 
      cartCount++; 
      const badge = document.getElementById("cartBadge"); 
      if (badge) { 
        badge.textContent = cartCount; 
      } 
    } 
  }); 