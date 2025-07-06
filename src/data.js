const data = {
  categories: [
    {
      id: 1,
      name: 'Men',
      thumbnail: 'https://example.com/electronics.jpg',
      discount: "",
      subcategories: [
        {
          id: 1,
          name: "Men's Topwear",
          thumbnail: 'https://example.com/smartphones.jpg',
          thirdcategories: [
            { id: 1, name: 'Kurta', thumbnail: 'https://i.pinimg.com/564x/a2/1b/84/a21b847838dea6e40239cb3ceb64ddea.jpg' },
            { id: 2, name: 'Blazers', thumbnail: 'https://i.pinimg.com/564x/74/bf/07/74bf076b24be5ecc72741a4cc378f309.jpg' },
            { id: 3, name: 'Shirts', thumbnail: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702912490_4738791.jpg?format=webp&w=1080&dpr=1.4' },
            { id: 4, name: 'TShirts', thumbnail: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719044558_1343356.jpg?format=webp&w=480&dpr=1.4' },
          ],
        },
        {
          id: 2,
          name: "Men's Bottom Wear",
          thumbnail: 'https://example.com/laptops.jpg',
          discount: "",
          thirdcategories: [
            { id: 5, name: 'Jeans', thumbnail: 'https://example.com/gaming.jpg' },
            { id: 6, name: 'Trowsers', thumbnail: 'https://example.com/business.jpg' },
            { id: 7, name: 'Shorts', thumbnail: 'https://example.com/business.jpg' },
            { id: 8, name: 'TrackPants And Joggers', thumbnail: 'https://example.com/business.jpg' },
          ],
        },
        {
          id: 3,
          name: "Men's Footwear",
          thumbnail: 'https://example.com/laptops.jpg',
          discount: "",
          thirdcategories: [
            { id: 9, name: 'casual shoes', thumbnail: 'https://example.com/gaming.jpg' },
            { id: 10, name: 'sport shoes', thumbnail: 'https://example.com/business.jpg' },
            { id: 11, name: 'Sandals', thumbnail: 'https://example.com/business.jpg' },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Women',
      thumbnail: 'https://example.com/electronics.jpg',
      subcategories: [
        {
          id: 4,
          name: "Women's Topwear",
          thumbnail: 'https://example.com/smartphones.jpg',
          discount: "",
          thirdcategories: [
            { id: 12, name: 'Kurta', thumbnail: 'https://example.com/android.jpg' },
            { id: 13, name: 'Saree', thumbnail: 'https://example.com/ios.jpg' },
            { id: 14, name: 'Tops', thumbnail: 'https://example.com/ios.jpg' },
            { id: 15, name: 'Lehngas', thumbnail: 'https://example.com/ios.jpg' },
          ],
        },
        {
          id: 5,
          name: "Women's Bottom Wear",
          thumbnail: 'https://example.com/laptops.jpg',
          discount: "",
          thirdcategories: [
            { id: 16, name: 'Jeans', thumbnail: 'https://example.com/gaming.jpg' },
            { id: 17, name: 'Trowsers', thumbnail: 'https://example.com/business.jpg' },
            { id: 18, name: 'Shorts', thumbnail: 'https://example.com/business.jpg' },
            { id: 19, name: 'TrackPants And Joggers', thumbnail: 'https://example.com/business.jpg' },
          ],
        },
        {
          id: 6,
          name: 'Womens Footwear',
          thumbnail: 'https://example.com/laptops.jpg',
          thirdcategories: [
            { id: 20, name: 'casual shoes', thumbnail: 'https://example.com/gaming.jpg' },
            { id: 21, name: 'sport shoes', thumbnail: 'https://example.com/business.jpg' },
            { id: 22, name: 'Sandals', thumbnail: 'https://example.com/business.jpg' },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Kids',
      thumbnail: 'https://example.com/electronics.jpg',
      subcategories: [
        {
          id: 7,
          name: 'Boys wear',
          thumbnail: 'https://example.com/smartphones.jpg',
          thirdcategories: [
            { id: 23, name: 'Kurta', thumbnail: 'https://example.com/android.jpg' },
            { id: 24, name: 'jeans', thumbnail: 'https://example.com/ios.jpg' },
            { id: 25, name: 'Shirts', thumbnail: 'https://example.com/ios.jpg' },
            { id: 26, name: 'TShirts', thumbnail: 'https://example.com/ios.jpg' },
          ],
        },
        {
          id: 8,
          name: 'Girls Wear',
          thumbnail: 'https://example.com/laptops.jpg',
          thirdcategories: [
            { id: 27, name: 'Tops', thumbnail: 'https://example.com/gaming.jpg' },
            { id: 28, name: 'Dresses', thumbnail: 'https://example.com/business.jpg' },
            { id: 29, name: 'jeans', thumbnail: 'https://example.com/business.jpg' },
            { id: 30, name: 'Joggers', thumbnail: 'https://example.com/business.jpg' },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Home And Living',
      thumbnail: 'https://example.com/electronics.jpg',
      subcategories: [
        {
          id: 9,
          name: 'Furniture',
          thumbnail: 'https://example.com/smartphones.jpg',
        },
        {
          id: 10,
          name: 'Decoration',
          thumbnail: 'https://example.com/laptops.jpg',
        },
      ],
    },
  ],
  products: [
    { id: 1, name: 'hbhhjb', categoryId: 1, subcategoryId: 1, thirdcategoryId: 1, image: 'https://example.com/laptops.jpg', price: 500 },
    { id: 4, name: '', categoryId: 1, subcategoryId: 1, thirdcategoryId: 2, image: '', price: 600 },
    { id: 2, name: '', categoryId: 1, subcategoryId: 2, thirdcategoryId: 1, image: '', price: 400 },
    { id: 5, name: '', categoryId: 1, subcategoryId: 2, thirdcategoryId: 3, image: '', price: 600 },
    { id: 3, name: '', categoryId: 1, subcategoryId: 3, thirdcategoryId: 1, image: '', price: 100 },
    { id: 6, name: '', categoryId: 2, subcategoryId: 3, thirdcategoryId: 1 },
    { id: 7, name: '', categoryId: 3, subcategoryId: 5, thirdcategoryId: 2 }, 
  ],

  discountCategory: [
    {
      id: 1,
      name: 'discount',
      thumbnail: 'https://example.com/electronics.jpg',
      subcategories: [
        {
          id: 1,
          name: "buy 1 get 1",
          discount: "50-70% OFF",
          buttonText: "Shop Now",
          Brands: "",
          image: "https://via.placeholder.com/400/kids-wear",
        },
        {
          id: 2,
          name: "MIN 70% OFF",
          discount: "50-70% OFF",
          buttonText: "Shop Now",
          Brands: "",
          image: "https://via.placeholder.com/400/footwear1",
        },
        {
          id: 3,
          name: "MIN 65% OFF",
          discount: "40-80% OFF",
          buttonText: "Shop Now",
          Brands: "",
          image: "https://via.placeholder.com/400/footwear2",
        },
        {
          id: 4,
          name: "MIN 60% OFF",
          discount: "40-70% OFF",
          buttonText: "Shop Now",
          Brands: "",
          image: "https://via.placeholder.com/400/bags-belts-wallets",
        },
        {
          id: 5,
          name: "MIN 55% OFF",
          discount: "40-70% OFF",
          buttonText: "Shop Now",
          Brands: "",
          image: "https://via.placeholder.com/400/office-wear",
        },
        {
          id: 6,
          name: "MIN 50% OFF",
          discount: "UP TO 60% OFF",
          buttonText: "Shop Now",
          Brands: "",
          image: "https://via.placeholder.com/400/ethnic-wear",
        },
        {
          id: 7,
          name: "MIN 45% OFF",
          discount: "40-70% OFF",
          buttonText: "Shop Now",
          Brands: "",
          image: "https://via.placeholder.com/400/home-decor",
        },
        {
          id: 8,
          name: "MIN 40% OFF",
          discount: "40-80% OFF",
          buttonText: "Shop Now",
          Brands: "",
          image: "https://via.placeholder.com/400/handbags",
        },
      ]
    },
  ],
};

export default data;
