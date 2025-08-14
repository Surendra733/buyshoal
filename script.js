
  /************ Simple localStorage cart ************/
  const CART_KEY = 'buyshoal_cart_v1';

  function getCart(){
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch(e){
      return [];
    }
  }
  function saveCart(cart){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount(){
    const count = getCart().reduce((s,i)=> s + i.qty, 0);
    document.getElementById('cartCount').innerText = count;
  }

  /************ Rendering helpers ************/
  function el(tag, attrs = {}, children = '') {
    const e = document.createElement(tag);
    for (let k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else if (k.startsWith('on') && typeof attrs[k] === 'function') e.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    if (typeof children === 'string') e.innerHTML = children;
    else if (Array.isArray(children)) children.forEach(c => e.appendChild(c));
    return e;
  }

  /************ Views rendering ************/
  function renderTrending(){
    const grid = document.getElementById('trendingGrid');
    grid.innerHTML = '';
    PRODUCTS.slice(0,16).forEach(p => {
      const card = el('div', { class: 'bg-white rounded-lg shadow-sm overflow-hidden p-3' }, [
        el('a', { href: `#/product/${p.id}`, class: 'block' }, [
          el('img', { src: p.image, class: 'w-full card-img bg-gray-50', alt: p.name })
        ]),
        el('h3', { class: 'mt-2 text-sm font-medium' }, p.name),
        el('div', { class: 'mt-2 flex items-center justify-between' }, [
          el('p', { class: 'text-lg font-bold' }, `₹${p.price}`),
          el('a', { href: `#/product/${p.id}`, class: 'bg-amber-400 px-3 py-1 rounded text-sm' }, 'View')
        ])
      ]);
      grid.appendChild(card);
    });
  }

  function renderProducts(sort=''){
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    let list = [...PRODUCTS];
    if (sort === 'price-asc') list.sort((a,b)=> a.price - b.price);
    if (sort === 'price-desc') list.sort((a,b)=> b.price - a.price);

    list.forEach(p => {
      const card = el('div', { class: 'bg-white rounded-lg shadow-sm overflow-hidden' }, [
        el('a', { href: `#/product/${p.id}` }, [
          el('img', { src: p.image, class: 'w-full h-44 object-contain bg-gray-50', alt: p.name })
        ]),
        el('div', { class: 'p-3' }, [
          el('h3', { class: 'text-sm font-medium' }, p.name),
          el('div', { class: 'mt-2 flex items-center justify-between' }, [
            el('p', { class: 'text-lg font-bold' }, `₹${p.price}`),
            el('button', { class: 'bg-amber-400 px-3 py-1 rounded text-sm', onclick: ()=> addToCart(p.id) }, 'Add')
          ])
        ])
      ]);
      grid.appendChild(card);
    });
  }

  function renderProductDetail(id){
    const product = PRODUCTS.find(x=> x.id === id);
    if(!product) return navTo('/');
    document.getElementById('prodImg').src = product.image;
    document.getElementById('prodTitle').innerText = product.name;
    document.getElementById('prodPrice').innerText = `₹${product.price}`;
    document.getElementById('prodDesc').innerText = product.desc;
    document.getElementById('addCartBtn').onclick = ()=> { addToCart(product.id); alert('Added to cart'); }
  }

  function renderCart(){
    const list = document.getElementById('cartList');
    const cart = getCart();
    list.innerHTML = '';
    if(cart.length === 0){
      list.innerHTML = '<div class="p-6 text-center text-gray-600">Your cart is empty</div>';
      document.getElementById('cartSubtotal').innerText = '₹0';
      return;
    }
    cart.forEach(item => {
      const p = PRODUCTS.find(x=> x.id === item.id);
      const row = el('div', { class: 'flex items-center gap-4 p-4' }, [
        el('img', { src: p.image, class: 'w-20 h-20 object-cover' }),
        el('div', { class: 'flex-1' }, [
          el('h3', { class: 'font-medium' }, p.name),
          el('p', { class: 'text-sm text-gray-500' }, `Qty: ${item.qty}`)
        ]),
        el('div', { class: 'text-right' }, [
          el('p', { class: 'font-semibold' }, `₹${p.price * item.qty}`),
          el('div', { class: 'flex gap-2 mt-2 justify-end' }, [
            el('button', { class: 'px-2 py-1 border rounded text-sm', onclick: ()=> changeQty(item.id, item.qty - 1) }, '-'),
            el('button', { class: 'px-2 py-1 border rounded text-sm', onclick: ()=> changeQty(item.id, item.qty + 1) }, '+'),
            el('button', { class: 'px-2 py-1 border rounded text-sm text-red-600', onclick: ()=> removeFromCart(item.id) }, 'Remove')
          ])
        ])
      ]);
      list.appendChild(row);
    });

    const subtotal = cart.reduce((s,i)=> {
      const p = PRODUCTS.find(x=> x.id === i.id);
      return s + (p.price * i.qty);
    }, 0);
    document.getElementById('cartSubtotal').innerText = `₹${subtotal}`;
  }

  /************ Cart operations ************/
  function addToCart(pid){
    const cart = getCart();
    const idx = cart.findIndex(x=> x.id === pid);
    if(idx > -1) cart[idx].qty += 1;
    else cart.push({ id: pid, qty: 1 });
    saveCart(cart);
    renderCart();
  }

  function changeQty(pid, qty){
    let cart = getCart();
    const idx = cart.findIndex(x=> x.id === pid);
    if(idx === -1) return;
    if(qty <= 0){
      // remove
      cart.splice(idx,1);
    } else {
      cart[idx].qty = qty;
    }
    saveCart(cart);
    renderCart();
  }

  function removeFromCart(pid){
    let cart = getCart();
    cart = cart.filter(x=> x.id !== pid);
    saveCart(cart);
    renderCart();
  }

  /************ Simple routing (hash) ************/
  function hideAllViews(){
    document.querySelectorAll('main section').forEach(s => s.classList.add('hide'));
  }

  function navTo(path = '/'){
    location.hash = path;
    router();
  }

  function router(){
    const hash = location.hash || '#/';
    const route = hash.slice(1); // e.g. /product/p1
    const parts = route.split('/').filter(Boolean);

    hideAllViews();

    if(parts.length === 0){
      document.getElementById('homeView').classList.remove('hide');
      renderTrending();
    } else if(parts[0] === 'products'){
      document.getElementById('productsView').classList.remove('hide');
      renderProducts(document.getElementById('sortSel').value);
    } else if(parts[0] === 'product' && parts[1]){
      document.getElementById('productView').classList.remove('hide');
      renderProductDetail(parts[1]);
    } else if(parts[0] === 'cart'){
      document.getElementById('cartView').classList.remove('hide');
      renderCart();
    } else {
      // fallback to home
      document.getElementById('homeView').classList.remove('hide');
      renderTrending();
    }
  }

  /************ Init ************/
  window.addEventListener('load', () => {
    document.getElementById('year').innerText = new Date().getFullYear();
    updateCartCount();
    router();
  });

  window.addEventListener('hashchange', router);

  // search
  document.getElementById('searchBtn').addEventListener('click', ()=> {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    if(!q) return navTo('/products');
    const matched = PRODUCTS.filter(p => p.name.toLowerCase().includes(q));
    // show matched on products view
    document.getElementById('productsView').classList.remove('hide');
    document.getElementById('homeView').classList.add('hide');
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    matched.forEach(p => {
      const card = document.createElement('div');
      card.className = 'bg-white rounded-lg shadow-sm overflow-hidden';
      card.innerHTML = `
        <a href="#/product/${p.id}"><img src="${p.image}" class="w-full h-44 object-contain bg-gray-50" /></a>
        <div class="p-3">
          <h3 class="text-sm font-medium">${p.name}</h3>
          <div class="mt-2 flex items-center justify-between">
            <p class="text-lg font-bold">₹${p.price}</p>
            <button class="bg-amber-400 px-3 py-1 rounded text-sm" onclick="addToCart('${p.id}')">Add</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  });

  // sort
  document.getElementById('sortSel').addEventListener('change', (e)=> {
    renderProducts(e.target.value);
  });

  // checkout (placeholder)
  document.getElementById('checkoutBtn').addEventListener('click', ()=> {
    alert('Checkout flow not implemented in demo. Integrate your backend to create orders & payments.');
  });




// related product dikhne ke liye hai 

  function renderProductDetail(id){
  const product = PRODUCTS.find(x=> x.id === id);
  if(!product) return navTo('/');
  
  document.getElementById('prodImg').src = product.image;
  document.getElementById('prodTitle').innerText = product.name;
  document.getElementById('prodPrice').innerText = `₹${product.price}`;
  document.getElementById('prodDesc').innerText = product.desc;
  document.getElementById('addCartBtn').onclick = ()=> { 
    addToCart(product.id); 
    alert('Added to cart'); 
  };

  // ---- Related products section ----
  const relatedGrid = document.getElementById('relatedProducts');
  if(relatedGrid){
    relatedGrid.innerHTML = '';
    const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
    related.slice(0, 8).forEach(p => {
      const card = el('div', { class: 'bg-white rounded-lg shadow-sm overflow-hidden p-3 w-48' }, [
        el('a', { href: `#/product/${p.id}`, class: 'block' }, [
          el('img', { src: p.image, class: 'w-full h-32 object-contain bg-gray-50', alt: p.name })
        ]),
        el('h3', { class: 'mt-2 text-sm font-medium' }, p.name),
        el('p', { class: 'text-lg font-bold' }, `₹${p.price}`)
      ]);
      relatedGrid.appendChild(card);
    });
  }
}
