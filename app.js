/**
 * ==============================================================================
 * 🌸 JMS FRESH FLOWERS - APPLICATION CONTROLLER & WHATSAPP GENERATOR
 * ==============================================================================
 */

// Cart State
let cart = [];
let currentCategory = "all";
let searchQuery = "";

// Element Selectors
const productsGrid = document.getElementById("productsGrid");
const categoryTabs = document.getElementById("categoryTabs");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const noProductsFound = document.getElementById("noProductsFound");

// Cart Elements
const cartToggleBtn = document.getElementById("cartToggleBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartModal = document.getElementById("cartModal");
const cartCountBadge = document.getElementById("cartCountBadge");
const drawerBadge = document.getElementById("drawerBadge");
const cartItemsList = document.getElementById("cartItemsList");
const emptyCartView = document.getElementById("emptyCartView");
const checkoutFormSection = document.getElementById("checkoutFormSection");
const cartFooter = document.getElementById("cartFooter");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const sendWhatsappBtn = document.getElementById("sendWhatsappBtn");
const toastContainer = document.getElementById("toastContainer");

// Form Inputs
const custNameInput = document.getElementById("custName");
const custPhoneInput = document.getElementById("custPhone");
const custAddressInput = document.getElementById("custAddress");
const custDateInput = document.getElementById("custDate");
const custTimeInput = document.getElementById("custTime");
const custNotesInput = document.getElementById("custNotes");

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  setDefaultDeliveryDate();
  renderCategoryTabs();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// Set default delivery date to today or tomorrow
function setDefaultDeliveryDate() {
  if (custDateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    custDateInput.value = `${yyyy}-${mm}-${dd}`;
    custDateInput.min = `${yyyy}-${mm}-${dd}`;
  }
}

// Render Filter Tabs
function renderCategoryTabs() {
  if (!categoryTabs || !CATEGORIES) return;

  categoryTabs.innerHTML = CATEGORIES.map(cat => `
    <button class="filter-tab ${cat.id === currentCategory ? 'active' : ''}" 
            onclick="filterByCategory('${cat.id}')">
      ${cat.name}
    </button>
  `).join("");
}

// Filter by Category
window.filterByCategory = function(catId) {
  currentCategory = catId;
  renderCategoryTabs();
  renderProducts();

  // Scroll to catalog smoothly if triggered from top cards
  const catalogSection = document.getElementById("catalog");
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Reset Filters
window.resetFilters = function() {
  currentCategory = "all";
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.classList.remove("visible");
  renderCategoryTabs();
  renderProducts();
};

// Category Icon Helper for Fallback Images
function getCategoryIcon(category) {
  switch (category) {
    case "flowers": return { icon: "fa-flower", label: "Fresh Flowers" };
    case "maalai": return { icon: "fa-dharmachakra", label: "Traditional Maalai" };
    case "bouquets": return { icon: "fa-bouquet", label: "Bouquet / Poche" };
    case "pooja": return { icon: "fa-sun", label: "Pooja Special" };
    default: return { icon: "fa-spa", label: "JMS Fresh" };
  }
}

// Render Products Grid
function renderProducts() {
  if (!productsGrid) return;

  const filtered = PRODUCTS.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = "";
    noProductsFound.classList.remove("hidden");
    return;
  }

  noProductsFound.classList.add("hidden");

  productsGrid.innerHTML = filtered.map(product => {
    const catInfo = getCategoryIcon(product.category);

    return `
      <div class="product-card" id="card-${product.id}">
        <div class="card-img-wrapper">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          <img src="${product.image}" 
               alt="${product.name}" 
               class="card-img" 
               loading="lazy"
               onerror="handleImageFallback(this, '${product.name}', '${catInfo.icon}', '${catInfo.label}')"
          >
        </div>

        <div class="card-body">
          <span class="card-category-tag">${product.category.toUpperCase()}</span>
          <h3 class="card-title">${product.name}</h3>
          <p class="card-desc">${product.description || 'Fresh daily stock, high quality fragrant flowers.'}</p>

          <div class="card-pricing-row">
            <div class="price-box">
              <span class="currency-sym">₹</span>
              <span class="card-price">${Number(product.price).toLocaleString('en-IN')}</span>
            </div>
            <span class="card-unit">${product.unit || 'per unit'}</span>
          </div>

          <div class="card-actions-wrapper">
            <div class="qty-row">
              <div class="qty-control">
                <button type="button" class="qty-btn minus" onclick="adjustCardQty('${product.id}', -1)">-</button>
                <input type="text" id="qty-${product.id}" class="qty-input" value="1" readonly>
                <button type="button" class="qty-btn plus" onclick="adjustCardQty('${product.id}', 1)">+</button>
              </div>
              <button class="btn btn-add-cart" onclick="addToCart('${product.id}')">
                <i class="fa-solid fa-cart-plus"></i> Add
              </button>
            </div>

            <button class="btn btn-quick-wa" onclick="quickOrderWhatsApp('${product.id}')">
              <i class="fa-brands fa-whatsapp"></i> Quick Order
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Fallback when local image is not yet loaded
window.handleImageFallback = function(imgElement, name, iconClass, label) {
  const parent = imgElement.parentElement;
  if (!parent) return;

  // Replace broken img tag with attractive SVG floral art card
  parent.innerHTML = `
    <div class="card-placeholder">
      <i class="fa-solid ${iconClass}"></i>
      <span>${label}</span>
      <small style="color:#64748b; font-size: 0.72rem; margin-top: 4px;">📷 Photo coming soon</small>
    </div>
  `;
};

// Quantity Stepper on Product Card
window.adjustCardQty = function(productId, delta) {
  const qtyInput = document.getElementById(`qty-${productId}`);
  if (!qtyInput) return;
  let currentVal = parseInt(qtyInput.value) || 1;
  currentVal += delta;
  if (currentVal < 1) currentVal = 1;
  if (currentVal > 50) currentVal = 50;
  qtyInput.value = currentVal;
};

// Add Product to Cart
window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const qtyInput = document.getElementById(`qty-${productId}`);
  const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;

  const existingItemIndex = cart.findIndex(item => item.id === productId);
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added ${quantity}x ${product.name} to basket!`);

  // Reset card quantity back to 1
  if (qtyInput) qtyInput.value = 1;
};

// Quick Order directly on WhatsApp without opening cart drawer
window.quickOrderWhatsApp = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const qtyInput = document.getElementById(`qty-${productId}`);
  const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
  const totalPrice = product.price * quantity;

  const msg = 
`🌸 *QUICK ORDER - ${SHOP_NAME}* 🌸
-------------------------------------
🌿 *Product:* ${product.name}
📦 *Unit:* ${product.unit}
🔢 *Quantity:* ${quantity}
💰 *Total Price:* ₹${totalPrice.toLocaleString('en-IN')}

📍 *I would like to order this item. Please confirm availability and delivery details!*
-------------------------------------
_Sent from ${SHOP_NAME} Website_`;

  const waUrl = `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
};

// Update Cart UI & Modal
function updateCartUI() {
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update Badges
  if (cartCountBadge) cartCountBadge.textContent = totalItemCount;
  if (drawerBadge) drawerBadge.textContent = `${totalItemCount} item${totalItemCount === 1 ? '' : 's'}`;

  // Update Subtotals
  if (cartSubtotal) cartSubtotal.textContent = `₹${totalAmount.toLocaleString('en-IN')}`;
  if (cartTotal) cartTotal.textContent = `₹${totalAmount.toLocaleString('en-IN')}`;

  if (cart.length === 0) {
    if (emptyCartView) emptyCartView.classList.remove("hidden");
    if (cartItemsList) cartItemsList.innerHTML = "";
    if (checkoutFormSection) checkoutFormSection.classList.add("hidden");
    if (cartFooter) cartFooter.classList.add("hidden");
  } else {
    if (emptyCartView) emptyCartView.classList.add("hidden");
    if (checkoutFormSection) checkoutFormSection.classList.remove("hidden");
    if (cartFooter) cartFooter.classList.remove("hidden");

    renderCartItems();
  }
}

// Render Cart Items List
function renderCartItems() {
  if (!cartItemsList) return;

  cartItemsList.innerHTML = cart.map((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    return `
      <div class="cart-item-card">
        <img src="${item.image}" 
             alt="${item.name}" 
             class="cart-item-thumb"
             onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=100&q=80';"
        >
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <div class="cart-item-rate">₹${item.price} • ${item.unit}</div>
          <div class="cart-item-stepper">
            <button type="button" onclick="updateCartItemQty(${index}, -1)">-</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button type="button" onclick="updateCartItemQty(${index}, 1)">+</button>
          </div>
        </div>
        <div class="cart-item-price-box">
          <span class="cart-item-subtotal">₹${itemSubtotal.toLocaleString('en-IN')}</span>
          <button class="cart-item-remove" onclick="removeCartItem(${index})">
            <i class="fa-solid fa-trash-can"></i> Remove
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Update Cart Quantity
window.updateCartItemQty = function(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
};

// Remove Cart Item
window.removeCartItem = function(index) {
  if (cart[index]) {
    const removedName = cart[index].name;
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartUI();
    showToast(`Removed ${removedName} from basket.`);
  }
};

// Storage Helpers
function saveCartToStorage() {
  try {
    localStorage.setItem("jms_flower_cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save to localStorage", e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("jms_flower_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
}

// Drawer Open / Close
window.openCart = function() {
  if (cartModal) cartModal.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent body scroll
};

window.closeCart = function() {
  if (cartModal) cartModal.classList.remove("open");
  document.body.style.overflow = "";
};

// Setup Event Listeners
function setupEventListeners() {
  // Cart open / close
  if (cartToggleBtn) cartToggleBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);

  // Close when clicking outside drawer
  if (cartModal) {
    cartModal.addEventListener("click", (e) => {
      if (e.target === cartModal) {
        closeCart();
      }
    });
  }

  // Search input live filtering
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      if (clearSearchBtn) {
        if (searchQuery.length > 0) {
          clearSearchBtn.classList.add("visible");
        } else {
          clearSearchBtn.classList.remove("visible");
        }
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      clearSearchBtn.classList.remove("visible");
      renderProducts();
    });
  }

  // Send Order on WhatsApp
  if (sendWhatsappBtn) {
    sendWhatsappBtn.addEventListener("click", handleWhatsAppCheckout);
  }
}

// Build & Send WhatsApp Order
function handleWhatsAppCheckout() {
  if (cart.length === 0) {
    alert("Your flower basket is empty! Please add some flowers or maalai first.");
    return;
  }

  const name = custNameInput ? custNameInput.value.trim() : "";
  const phone = custPhoneInput ? custPhoneInput.value.trim() : "";
  const address = custAddressInput ? custAddressInput.value.trim() : "";
  const date = custDateInput ? custDateInput.value : "";
  const time = custTimeInput ? custTimeInput.value : "";
  const notes = custNotesInput ? custNotesInput.value.trim() : "";

  // Validation
  if (!name) {
    alert("Please enter your name so we know who the order is for.");
    if (custNameInput) custNameInput.focus();
    return;
  }

  if (!address) {
    alert("Please enter your delivery address or area.");
    if (custAddressInput) custAddressInput.focus();
    return;
  }

  // Calculate Total
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Build Formatted Order Message
  let message = `🌸 *NEW ORDER - ${SHOP_NAME}* 🌸\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Customer Name:* ${name}\n`;
  if (phone) {
    message += `📞 *Phone:* ${phone}\n`;
  }
  message += `📍 *Delivery Address:* ${address}\n`;
  if (date) {
    message += `📅 *Date Required:* ${date}\n`;
  }
  if (time) {
    message += `⏰ *Time Slot:* ${time}\n`;
  }
  if (notes) {
    message += `📝 *Special Notes:* ${notes}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🛒 *ORDERED ITEMS:*\n\n`;

  cart.forEach((item, idx) => {
    const itemSubtotal = item.price * item.quantity;
    message += `${idx + 1}. *${item.name}*\n`;
    message += `   ▸ Qty: ${item.quantity} (${item.unit})\n`;
    message += `   ▸ Price: ₹${item.price} × ${item.quantity} = *₹${itemSubtotal.toLocaleString('en-IN')}*\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL ESTIMATE: ₹${totalAmount.toLocaleString('en-IN')}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🙏 _Please confirm my order and send payment details / delivery timing. Thank you!_\n`;
  message += `_Sent from ${SHOP_NAME} Website_`;

  // Generate WhatsApp Redirect URL
  const waUrl = `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(message)}`;

  // Optional: Clear cart after successful checkout order redirection
  // localStorage.removeItem("jms_flower_cart");
  // cart = [];
  // updateCartUI();
  // closeCart();

  // Redirect to WhatsApp
  window.open(waUrl, "_blank");
}

// Toast Notification
function showToast(message) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
