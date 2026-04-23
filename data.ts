import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- CLASSIC BEEF ---
  {
    id: 'cb1',
    name: 'Vintage Beef',
    description: 'Brioche bun, smashed beef patty,single cheese slice,iceberg, raw onion, tomato, honey mustard sauce.',
    price: 700,
    category: 'Classic Beef',
    isPopular: true
  },
  {
    id: 'cb2',
    name: 'Barbecue smash',
    description: 'Brioche bun, smashed beef patty,single cheese slice,iceberg, grilled onions, BBQ sauce',
    price: 700,
    category: 'Classic Beef'
  },
  {
    id: 'cb3',
    name: 'Hot Jalapeno Smash',
    description: 'Brioche bun, smashed beef patty, single cheese slice, iceberg, jalapeño and hot jalapeño sauce.',
    price: 730,
    category: 'Classic Beef'
  },
  {
    id: 'cb4',
    name: 'American Classic',
    description: 'Brioche bun, smashed beef patty, single cheese slice, iceberg, grilled onion, tomato, pickles, chef\'s signature sauce.',
    price: 740,
    category: 'Classic Beef'
  },
  {
    id: 'cb5',
    name: 'Chessy Classic',
    description: 'Brioche bun, smashed beef patty, 3x cheese slices, iceberg, grilled onion, honey mustard sauce.',
    price: 850,
    category: 'Classic Beef'
  },
  {
    id: 'cb6',
    name: 'Pepperoni Smash',
    description: 'Brioche bun, smashed beef patty, 2x cheese slices, beef pepperoni, iceberg honey, mustard sauce.',
    price: 870,
    category: 'Classic Beef'
  },
  {
    id: 'cb7',
    name: 'Mushroom Smash',
    description: 'Brioche bun, smashed beef patty, 2x cheese slices, caramelized onion, iceberg, grilled onion & mushrooms, honey mustard sauce.',
    price: 870,
    category: 'Classic Beef'
  },
  {
    id: 'cb8',
    name: 'Bacon Smash',
    description: 'Brioche bun, smashed beef patty, beef bacon, 2x cheese slices , iceberg, tomatoes, grilled onions, pickles, garlic sauce.',
    price: 990,
    category: 'Classic Beef'
  },

  // --- PREMIUM BEEF ---
  {
    id: 'pb1',
    name: 'Majestic Double',
    description: 'Brioche bun, 2x beef patties, 2x cheese slices, iceberg, grilled onion, chipotle sauce.',
    price: 1000,
    category: 'Premium Beef',
    isPopular: true
  },
  {
    id: 'pb2',
    name: 'Cheesy Quadra',
    description: 'Brioche bun, 2x beef patties, 4x cheese slices, iceberg, honey mustard sauce.',
    price: 1150,
    category: 'Premium Beef'
  },
  {
    id: 'pb3',
    name: 'Smash Duo',
    description: 'Brioche bun, smashed beef patty, grilled chicken fillet, 2x cheese slices, iceberg, sauteed capsicum and onions, garlic sauce',
    price: 1190,
    category: 'Premium Beef'
  },
  {
    id: 'pb4',
    name: 'Smoky Beast',
    description: 'Brioche bun, 2x beef patties, 2x cheese slices, iceberg, beef pepperoni, chicken pepperoni, grilled mushrooms, grilled onions, chipotle sauce',
    price: 1350,
    category: 'Premium Beef'
  },
  {
    id: 'pb5',
    name: 'Triple Smash Tower',
    description: 'Brioche bun, 3x beef patties, 3x cheese slices, iceberg caramelized onions, chef\'s signature sauce.',
    price: 1490,
    category: 'Premium Beef'
  },

  // --- ZINGSTERS ---
  {
    id: 'z1',
    name: 'Mini Zingster',
    description: 'Potato bun, crispy chicken patty, iceberg, chipotle sauce.',
    price: 340,
    category: 'Zingsters'
  },
  {
    id: 'z2',
    name: 'Zingster',
    description: 'Potato bun, crispy chicken patty, iceberg, chef\'s signature sauce.',
    price: 530,
    category: 'Zingsters',
    isPopular: true
  },
  {
    id: 'z3',
    name: 'Cheese Zingster',
    description: 'Potato bun, crispy chicken patty, single cheese slice, iceberg, chef\'s signature sauce.',
    price: 600,
    category: 'Zingsters'
  },
  {
    id: 'z4',
    name: 'Jalapeño Zingster',
    description: 'Potato bun, crispy chicken patty, single cheese slice, jalapeño, iceberg, hot jalapeño sauce.',
    price: 690,
    category: 'Zingsters'
  },
  {
    id: 'z5',
    name: 'Pepperoni Zingster',
    description: 'Potato bun, crispy chicken patty, single cheese slice, chicken pepperoni, iceberg, garlic sauce.',
    price: 700,
    category: 'Zingsters'
  },
  {
    id: 'z6',
    name: 'Mushroom Zingster',
    description: 'Potato bun, crispy chicken patty, single cheese slice, iceberg, mushrooms, honey mustard sauce.',
    price: 700,
    category: 'Zingsters'
  },
  {
    id: 'z7',
    name: 'Nugget Prime',
    description: 'Brioche bun, crispy chicken patty, nuggets, single cheese slice, iceberg, garlic sauce.',
    price: 870,
    category: 'Zingsters'
  },
  {
    id: 'z8',
    name: 'Double Cruncher',
    description: 'Brioche bun, 2x crispy chicken patties, 2x cheese slices, iceberg, chef\'s signature sauce.',
    price: 890,
    category: 'Zingsters'
  },

  // --- GRILLED CHICKEN ---
  {
    id: 'gc1',
    name: 'Grilled Chicken',
    description: 'Potato bun, grilled chicken fillet, single cheese slice, iceberg, raw onion & tomato, pickles, signature sauce',
    price: 650,
    category: 'Grilled Chicken'
  },
  {
    id: 'gc2',
    name: 'Smoky Barbecue',
    description: 'Potato bun, grilled chicken fillet, single cheese slice, grilled onions, iceberg, barbecue sauce',
    price: 650,
    category: 'Grilled Chicken'
  },
  {
    id: 'gc3',
    name: 'Hot Grilled Chicken',
    description: 'Potato bun, grilled chicken fillet, single cheese slice, iceberg, grilled onions, jalapeños, hot jalapeño sauce.',
    price: 690,
    category: 'Grilled Chicken'
  },
  {
    id: 'gc4',
    name: 'Mushroom Grilled Chicken',
    description: 'Potato bun, grilled chicken fillet, single cheese slice, iceberg, grilled mushrooms, grilled onions, honey mustard sauce',
    price: 780,
    category: 'Grilled Chicken'
  },
  {
    id: 'gc5',
    name: 'Pepperoni Grilled Chicken',
    description: 'Potato bun, grilled chicken fillet, single cheese slice, iceberg, chicken pepperoni, chipotle sauce.',
    price: 780,
    category: 'Grilled Chicken'
  },
  {
    id: 'gc6',
    name: 'Double Flame',
    description: 'Brioche bun, 2x grilled chicken fillets, 2x cheese slices, iceberg, tomatoes, grilled onions, garlic sauce',
    price: 950,
    category: 'Grilled Chicken'
  },

  // --- SNACKS ---
  {
    id: 's1',
    name: '6 Pieces Nuggets',
    description: 'Serve with garlic sauce.',
    price: 450,
    category: 'Snacks'
  },
  {
    id: 's2',
    name: '12 Pieces Nuggets',
    description: 'Serve with garlic sauce.',
    price: 870,
    category: 'Snacks'
  },
  {
    id: 's3',
    name: '4 Pieces chicken Strips',
    description: 'Serve with garlic sauce.',
    price: 500,
    category: 'Snacks'
  },

  // --- FRIES ---
  {
    id: 'f1r',
    name: 'Salted Fries (Regular)',
    description: 'Classic salted fries.',
    price: 200,
    category: 'Fries'
  },
  {
    id: 'f1l',
    name: 'Salted Fries (Large)',
    description: 'Classic salted fries.',
    price: 300,
    category: 'Fries'
  },
  {
    id: 'f2r',
    name: 'Fries with Dip (Regular)',
    description: 'Crispy fries served with your choice sauce',
    price: 280,
    category: 'Fries'
  },
  {
    id: 'f2l',
    name: 'Fries with Dip (Large)',
    description: 'Crispy fries served with your choice sauce',
    price: 380,
    category: 'Fries'
  },
  {
    id: 'f3',
    name: 'Cheese Fries',
    description: 'Fries with three cheese slices.',
    price: 400,
    category: 'Fries'
  },
  {
    id: 'f4',
    name: 'Patty Fries',
    description: 'Crispy fries, smashed beef patty with cheddar cheese slice, grilled onions, topped with garlic sauce',
    price: 690,
    category: 'Fries'
  },
  {
    id: 'f5',
    name: 'Smash Fries L',
    description: 'Bed of fries, chunks of smashed beef, cheddar cheese slices, grilled mushrooms, jalapeño, beef pepperoni, garlic & honey mustard sauce',
    price: 890,
    category: 'Fries'
  },
  {
    id: 'f6',
    name: 'Crunch Fries R',
    description: 'Crispy fries, crispy chicken chunks, cheddar cheese slice, chef’s sig sauce',
    price: 490,
    category: 'Fries'
  },
  {
    id: 'f7',
    name: 'Crunch Fries L',
    description: 'Bed of fries, chunks of crispy chicken, cheddar cheese slices, grilled mushrooms, jalapeño, chicken pepperoni, hot jalapeño & chipotle sauce.',
    price: 890,
    category: 'Fries'
  },

  // --- DRINK ---
  {
    id: 'd1',
    name: 'Cola NeXt 345ml',
    description: '',
    price: 100,
    category: 'Drink'
  },
  {
    id: 'd2',
    name: 'Fizup NeXt 345ml',
    description: '',
    price: 100,
    category: 'Drink'
  },
  {
    id: 'd3',
    name: 'Mineral Water (Small)',
    description: '',
    price: 60,
    category: 'Drink'
  },

  // --- ADD ON ---
  {
    id: 'a1',
    name: 'Beef Patty',
    description: '',
    price: 400,
    category: 'Add On'
  },
  {
    id: 'a2',
    name: 'Crispy Chicken Patty',
    description: '',
    price: 350,
    category: 'Add On'
  },
  {
    id: 'a3',
    name: 'Grilled Chicken Fillet',
    description: '',
    price: 350,
    category: 'Add On'
  },
  {
    id: 'a4b',
    name: 'Beef Pepperoni',
    description: '',
    price: 100,
    category: 'Add On'
  },
  {
    id: 'a4c',
    name: 'Chicken Pepperoni',
    description: '',
    price: 100,
    category: 'Add On'
  },
  {
    id: 'a5j',
    name: 'Jalapeños',
    description: '',
    price: 60,
    category: 'Add On'
  },
  {
    id: 'a5p',
    name: 'Pickles',
    description: '',
    price: 60,
    category: 'Add On'
  },
  {
    id: 'a6',
    name: 'Caramelized Onions',
    description: '',
    price: 50,
    category: 'Add On'
  },
  {
    id: 'a7',
    name: 'Cheddar Cheese Slice',
    description: '',
    price: 80,
    category: 'Add On'
  },
  {
    id: 'a8',
    name: 'Beef Bacon',
    description: '',
    price: 300,
    category: 'Add On'
  },
  {
    id: 'a9',
    name: 'Mushrooms',
    description: '',
    price: 100,
    category: 'Add On'
  },
  {
    id: 'a10',
    name: 'Dip Sauce',
    description: 'Garlic, Chipotle Sauce, Honey Mustard, Hot Jalapeño, Barbecue, Chef\'s Signature',
    price: 90,
    category: 'Add On'
  }
];
