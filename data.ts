
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- HOUSE OF BEEF ---
  // Classic
  {
    id: 'b1',
    name: 'Pocket Smash',
    description: 'Brioche bun, 70g beef patty, single cheddar cheese slice, iceberg, honey mustard sauce.',
    price: 450,
    category: 'House of Beef',
    subcategory: 'Classic Smash Burgers'
  },
  {
    id: 'b2',
    name: 'Vintage Beef',
    description: 'Brioche bun, 125g beef patty, single cheese, iceberg, raw/grilled onion, tomato, honey mustard.',
    price: 650,
    category: 'House of Beef',
    subcategory: 'Classic Smash Burgers',
    isPopular: true
  },
  {
    id: 'b3',
    name: 'American Classic',
    description: 'Brioche bun, 125g beef patty, single cheese, pickles, tomatoes, raw/grilled onion, chef\'s signature sauce.',
    price: 690,
    category: 'House of Beef',
    subcategory: 'Classic Smash Burgers'
  },
  {
    id: 'b4',
    name: 'Barbecue Smash',
    description: 'Brioche bun, 125g beef patty, single cheese, grilled onions, BBQ sauce.',
    price: 650,
    category: 'House of Beef',
    subcategory: 'Classic Smash Burgers'
  },
  {
    id: 'b5',
    name: 'Hot Jalapeño Smash',
    description: 'Brioche bun, 125g beef patty, single cheese, iceberg, jalapeño, hot jalapeño sauce.',
    price: 680,
    category: 'House of Beef',
    subcategory: 'Classic Smash Burgers'
  },
  // Premium
  {
    id: 'bp1',
    name: 'Pepperoni Smash',
    description: 'Brioche bun, 150g beef patty, two cheese slices, beef pepperoni, honey mustard sauce.',
    price: 850,
    category: 'House of Beef',
    subcategory: 'Premium / Calories Loaded'
  },
  {
    id: 'bp2',
    name: 'Mushroom Smash',
    description: 'Brioche bun, 150g beef patty, two cheese slices, grilled onions, caramelized onions, grilled mushrooms, honey mustard sauce.',
    price: 850,
    category: 'House of Beef',
    subcategory: 'Premium / Calories Loaded'
  },
  {
    id: 'bp3',
    name: 'Majestic Double',
    description: 'Brioche bun, two 125g beef patties, two cheese slices, iceberg, grilled onion, chipotle sauce.',
    price: 950,
    category: 'House of Beef',
    subcategory: 'Premium / Calories Loaded',
    isPopular: true
  },
  {
    id: 'bp4',
    name: 'Triple Smash Tower',
    description: 'Brioche bun, three 125g beef patties, three cheese slices, caramelized onions, chef\'s signature sauce.',
    price: 1300,
    category: 'House of Beef',
    subcategory: 'Premium / Calories Loaded'
  },

  // --- HOUSE OF CHICKEN ---
  // Zingsters
  {
    id: 'c1',
    name: 'Mini Zingster',
    description: 'Potato bun, crispy chicken patty, iceberg, chipotle sauce.',
    price: 320,
    category: 'House of Chicken',
    subcategory: 'Zingsters (Crispy)'
  },
  {
    id: 'c2',
    name: 'Zingster',
    description: 'Potato bun, crispy chicken patty, iceberg, chef\'s signature sauce.',
    price: 500,
    category: 'House of Chicken',
    subcategory: 'Zingsters (Crispy)',
    isPopular: true
  },
  {
    id: 'c3',
    name: 'Jalapeño Zingster',
    description: 'Potato bun, crispy chicken patty, single cheese, iceberg, jalapeño, hot jalapeño sauce.',
    price: 650,
    category: 'House of Chicken',
    subcategory: 'Zingsters (Crispy)'
  },
  {
    id: 'c4',
    name: 'Pepperoni Zingster',
    description: 'Potato bun, crispy chicken patty, single cheese, iceberg, chicken pepperoni, honey mustard sauce.',
    price: 650,
    category: 'House of Chicken',
    subcategory: 'Zingsters (Crispy)'
  },
  {
    id: 'c5',
    name: 'Mushroom Zingster',
    description: 'Potato bun, crispy chicken patty, single cheese slice, mushrooms, honey mustard sauce.',
    price: 700,
    category: 'House of Chicken',
    subcategory: 'Zingsters (Crispy)'
  },
  {
    id: 'c6',
    name: 'Double Cruncher',
    description: 'Potato bun, two crispy chicken patties, double cheese slices, iceberg, chef\'s signature sauce.',
    price: 800,
    category: 'House of Chicken',
    subcategory: 'Zingsters (Crispy)'
  },
  // Flame Grilled
  {
    id: 'cg1',
    name: 'Grilled Chicken',
    description: 'Potato bun, grilled chicken fillet, single cheese slice, iceberg, raw onion & tomato, chef\'s signature sauce.',
    price: 600,
    category: 'House of Chicken',
    subcategory: 'Flame-Grilled Burgers'
  },
  {
    id: 'cg2',
    name: 'Hot Grilled Chicken',
    description: 'Potato bun, grilled chicken fillet, single cheese slice, iceberg, grilled onions, jalapeños, hot jalapeño sauce.',
    price: 650,
    category: 'House of Chicken',
    subcategory: 'Flame-Grilled Burgers'
  },

  // --- BROAST ---
  {
    id: 'br1',
    name: 'Qtr. Broast (Chest)',
    description: 'Salted chest broast, fries, toumiya sauce, bun.',
    price: 550,
    category: 'Chicken Broast'
  },
  {
    id: 'br2',
    name: 'Qtr. Broast (Leg)',
    description: 'Salted leg broast, fries, toumiya sauce, bun.',
    price: 530,
    category: 'Chicken Broast'
  },

  // --- SNACKS ---
  {
    id: 's1',
    name: '6 Pieces Nuggets',
    description: 'Served with garlic sauce.',
    price: 400,
    category: 'Snacks'
  },
  {
    id: 's2',
    name: '12 Pieces Nuggets',
    description: 'Served with garlic sauce.',
    price: 750,
    category: 'Snacks'
  },

  // --- FRIES & LOADED ---
  // Split regular/large for easier cart logic
  {
    id: 'f1r',
    name: 'Salted Fries (Regular)',
    description: 'Classic salted fries.',
    price: 150,
    category: 'Fries & Loaded'
  },
  {
    id: 'f1l',
    name: 'Salted Fries (Large)',
    description: 'Classic salted fries.',
    price: 250,
    category: 'Fries & Loaded'
  },
  {
    id: 'f2r',
    name: 'Garlic Fries (Regular)',
    description: 'Crispy fries topped with a creamy garlic sauce.',
    price: 200,
    category: 'Fries & Loaded'
  },
  {
    id: 'f2l',
    name: 'Garlic Fries (Large)',
    description: 'Crispy fries topped with a creamy garlic sauce.',
    price: 300,
    category: 'Fries & Loaded'
  },
  {
    id: 'f3r',
    name: 'Chipotle Fries (Regular)',
    description: 'Crispy fries topped with a smoky chipotle sauce.',
    price: 200,
    category: 'Fries & Loaded'
  },
  {
    id: 'f3l',
    name: 'Chipotle Fries (Large)',
    description: 'Crispy fries topped with a smoky chipotle sauce.',
    price: 300,
    category: 'Fries & Loaded'
  },
  {
    id: 'f4r',
    name: 'Cheese Fries (Regular)',
    description: 'Bed of fries, three cheddar cheese slices.',
    price: 350,
    category: 'Fries & Loaded'
  },
  {
    id: 'f4l',
    name: 'Cheese Fries (Large)',
    description: 'Bed of fries, six cheddar cheese slices.',
    price: 600,
    category: 'Fries & Loaded'
  },
  {
    id: 'f5',
    name: 'Smash Fries (Regular)',
    description: 'Bed of fries, 70g beef smashed patty, single cheddar cheese slice, garlic sauce.',
    price: 450,
    category: 'Fries & Loaded'
  },
  {
    id: 'f6',
    name: 'Smash Fries (Loaded)',
    description: 'Bed of fries, 2x 70g beef patties, double cheese, grilled mushrooms, jalapeño, beef pepperoni, honey mustard sauce.',
    price: 850,
    category: 'Fries & Loaded'
  },
  {
    id: 'f7',
    name: 'Crunch Fries (Regular)',
    description: 'Bed of fries, crispy chicken chunks, single cheddar cheese slice, chef\'s signature sauce.',
    price: 450,
    category: 'Fries & Loaded'
  },
  {
    id: 'f8',
    name: 'Crunch Fries (Loaded)',
    description: 'Bed of fries, 2x crispy chicken chunks, double cheese, grilled mushrooms, jalapeño, chicken pepperoni, hot jalapeño sauce.',
    price: 850,
    category: 'Fries & Loaded'
  },

  // --- DRINKS ---
  {
    id: 'd1',
    name: 'Cold Drink 345ml',
    description: '7up & Pepsi.',
    price: 100,
    category: 'Drinks'
  },
  {
    id: 'd2',
    name: 'Mineral Water (Small)',
    description: 'Hydrate with quality.',
    price: 60,
    category: 'Drinks'
  },

  // --- ADD-ONS ---
  {
    id: 'a6',
    name: 'Beef Patty 70g',
    description: 'Add-on smashed beef patty.',
    price: 200,
    category: 'Add-ons'
  },
  {
    id: 'a1',
    name: 'Beef Patty 125g',
    description: 'Add-on smashed beef patty.',
    price: 300,
    category: 'Add-ons'
  },
  {
    id: 'a9',
    name: 'Beef Patty 150g',
    description: 'Add-on smashed beef patty.',
    price: 370,
    category: 'Add-ons'
  },
  {
    id: 'a10',
    name: 'Crispy chicken patty (s)',
    description: 'Add-on small crispy patty.',
    price: 170,
    category: 'Add-ons'
  },
  {
    id: 'a2',
    name: 'Crispy Chicken Patty',
    description: 'Add-on regular crispy patty.',
    price: 250,
    category: 'Add-ons'
  },
  {
    id: 'a7',
    name: 'Grilled Chicken Fillet',
    description: 'Add-on flame-grilled fillet.',
    price: 250,
    category: 'Add-ons'
  },
  {
    id: 'a3',
    name: 'Beef/Chicken Pepperoni',
    description: 'Add-on pepperoni slices.',
    price: 100,
    category: 'Add-ons'
  },
  {
    id: 'a11',
    name: 'Mushrooms',
    description: 'Add-on grilled mushrooms.',
    price: 100,
    category: 'Add-ons'
  },
  {
    id: 'a4',
    name: 'Cheddar Cheese Slice',
    description: 'Add-on premium cheese.',
    price: 60,
    category: 'Add-ons'
  },
  {
    id: 'a8',
    name: 'Bun',
    description: 'Extra fresh bun.',
    price: 40,
    category: 'Add-ons'
  },
  {
    id: 'a5',
    name: 'Dip Sauce',
    description: 'Garlic, Chipotle, Toumiya, Honey Mustard, Hot Jalapeño, Barbecue, Chef\'s Signature.',
    price: 70,
    category: 'Add-ons'
  }
];
