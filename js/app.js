// Data produk (bisa diganti dengan fetch dari database)
const products = [
    {
        id: 1,
        name: "Azure Blob Storage 100GB",
        price: 19.99,
        image: "https://namadomainstorage.blob.core.windows.net/produk-images/storage.jpg",
        category: "Cloud Storage"
    },
    {
        id: 2,
        name: "Virtual Machine B1s",
        price: 29.99,
        image: "https://namadomainstorage.blob.core.windows.net/produk-images/vm.jpg",
        category: "Virtual Machine"
    },
    {
        id: 3,
        name: "Database MySQL Basic",
        price: 39.99,
        image: "https://namadomainstorage.blob.core.windows.net/produk-images/database.jpg",
        category: "Database"
    },
    {
        id: 4,
        name: "Cloud Backup 500GB",
        price: 49.99,
        image: "https://namadomainstorage.blob.core.windows.net/produk-images/backup.jpg",
        category: "Cloud Storage"
    }
];

// Fungsi untuk menampilkan produk
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card card-product h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.category}</p>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <button class="btn btn-add-to-cart text-white" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Fungsi untuk menambahkan ke keranjang
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Produk ${product.name} telah ditambahkan ke keranjang!`);
    // Di sini bisa ditambahkan logika untuk menyimpan ke session/cookie/database
}

// Fungsi untuk memuat data dari database (menggunakan API)
async function loadProductsFromDatabase() {
    try {
        const response = await fetch('http://10.0.2.4:3000/products'); // Ganti dengan endpoint API Anda
        const data = await response.json();
        products = data;
        displayProducts();
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback ke data statis jika API gagal
        displayProducts();
    }
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // loadProductsFromDatabase(); // Uncomment jika sudah ada API
    displayProducts(); // Gunakan data statis untuk sementara
});