type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/products', label: 'products' },
    { href: '/favourites', label: 'favourites' },
    { href: '/cart', label: 'cart' },
    { href: '/admin/sales', label: 'dashboard' },
    { href: '/orders', label: 'orders' },
    { href: '/reviews', label: 'reviews' },
  ];


  export const adminLinks: NavLink[] = [
    { href: '/admin/sales', label: 'sales' },
    { href: '/admin/products', label: 'my products' },
    { href: '/admin/products/create', label: 'create product' },
  ];