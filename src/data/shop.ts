/**
 * ───────────────────────────────────────────────────────────────
 *  SHOP DATA — this is the only file you need to edit to launch
 *  the same site for a different bubble tea shop.
 *  Photos live in /public/photos (webp recommended, ~1200px).
 * ───────────────────────────────────────────────────────────────
 */

export type Hours = { day: string; open: string | null; close: string | null };

export const shop = {
  name: "Miss B's Tea Time",
  shortName: 'Miss B’s',
  tagline: 'Boba, matcha & milk tea, poured with a smile in Wrigleyville.',
  siteUrl: 'https://bubble.geekysquirrels.com',
  description:
    'Miss B’s Tea Time is a small, owner-run bubble tea shop at 828 W Grace St in Chicago’s Lakeview / Wrigleyville neighborhood. Caramel Thai milk tea, strawberry matcha, ube, hojicha and seasonal specials, made in house.',

  // Contact — taken from the Google Business listing
  address: {
    line1: '828 W Grace St, Retail 1 East',
    city: 'Chicago',
    state: 'IL',
    zip: '60613',
    neighborhood: 'Wrigleyville · Lakeview',
    plusCode: 'X82X+GM Chicago',
    lat: 41.9513063,
    lng: -87.6507944,
  },
  phone: '(659) 305-1647',
  phoneHref: 'tel:+16593051647',
  instagram: 'tulipteamissb',
  instagramUrl: 'https://instagram.com/tulipteamissb',
  orderUrl:
    'https://www.grubhub.com/restaurant/tulips-tea-on-tuesday-828-w-grace-st-chicago/7617952',
  orderLabel: 'Order on Grubhub',
  mapsUrl:
    'https://www.google.com/maps/place/Miss+B%27s+Tea+Time/@41.9513063,-87.6507944,17z/data=!4m6!3m5!1s0x880fd382e66d4e6b:0x49a9ad9e5bc8e4f2!8m2!3d41.9513063!4d-87.6507944!16s%2Fg%2F11t_j_lx8t',
  rating: { value: 5.0, count: 348 },

  // Hours — from Google (index 0 = Sunday, to match JS Date.getDay())
  hours: [
    { day: 'Sunday', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Monday', open: '11:00 AM', close: '8:00 PM' },
    { day: 'Tuesday', open: '11:00 AM', close: '8:00 PM' },
    { day: 'Wednesday', open: '11:00 AM', close: '8:00 PM' },
    { day: 'Thursday', open: '11:00 AM', close: '8:00 PM' },
    { day: 'Friday', open: '11:00 AM', close: '8:00 PM' },
    { day: 'Saturday', open: '10:00 AM', close: '8:00 PM' },
  ] as Hours[],
  timeZone: 'America/Chicago',

  // Photos (from Google reviews). Path is relative to /public.
  photos: {
    hero: { src: '/photos/thai-milk-tea.webp', alt: 'Caramel Thai milk tea with boba on a wooden table' },
    storefront: { src: '/photos/storefront.webp', alt: 'Storefront window on W Grace St' },
    gallery: [
      { src: '/photos/counter-green.webp', alt: 'Pink walls and the forest-green counter inside the shop' },
      { src: '/photos/rose-lemonade.webp', alt: 'Rose lemonade with dried flowers' },
      { src: '/photos/cheers.webp', alt: 'Three friends toasting with matcha drinks outside the shop' },
      { src: '/photos/interior-chair.webp', alt: 'Rattan chair and a little table against the pink wall' },
      { src: '/photos/matcha-outside.webp', alt: 'Iced matcha latte with boba held up outside' },
      { src: '/photos/carrier-bag.webp', alt: 'Milk tea in the shop’s little paper carrier' },
      { src: '/photos/window-seat.webp', alt: 'Window seat with plants and afternoon light' },
      { src: '/photos/counter-wide.webp', alt: 'The counter and merch shelf' },
    ],
  },

  // Menu — prices from the shop’s online ordering menu (in-store may differ)
  menu: [
    {
      category: 'Milk tea',
      note: 'Choose hot or iced, sweetness and ice level. Boba and toppings extra.',
      items: [
        { name: 'Caramel Thai milk tea', desc: 'Thai leaf tea, milk, caramel.', price: '5.80', favorite: true },
        { name: 'Signature milk tea', desc: 'Our signature blended tea, milk.', price: '5.80' },
        { name: 'Ube milk tea', desc: 'Signature blended tea, house-made ube jam, milk.', price: '5.80', favorite: true },
        { name: 'Earl Grey milk tea', desc: 'Premium Earl Grey leaf tea, milk.', price: '5.80' },
        { name: 'Avocado Thai milk tea', desc: 'Fresh avocado and Thai leaf tea, milk.', price: '5.80' },
        { name: 'Chocolate milk tea', desc: 'Milk chocolate, signature blended tea, milk.', price: '5.80' },
        { name: 'Black tea macchiato', desc: 'Indian Assam leaf tea with a cream cap.', price: '5.80' },
      ],
    },
    {
      category: 'Lattes',
      note: 'Premium Japanese matcha and hojicha. Ask about strawberry, ube, rose and black sesame.',
      items: [
        { name: 'Matcha latte', desc: 'Premium Japanese matcha, milk and cream.', price: '5.80' },
        { name: 'Strawberry matcha latte', desc: 'Matcha over house strawberry jam and milk.', price: '5.80', favorite: true },
        { name: 'Hojicha latte', desc: 'Roasted Japanese hojicha, milk and cream.', price: '5.80' },
        { name: 'Black sesame matcha latte', desc: 'Nutty black sesame under a matcha pour.', price: '5.80', favorite: true },
      ],
    },
    {
      category: 'Fruit tea',
      note: 'Clear teas, lightly sweetened with house-made jams.',
      items: [
        { name: 'Lychee rose green tea', desc: 'Green tea, lychee jam and organic rose.', price: '5.80' },
        { name: 'Strawberry green tea', desc: 'Green tea and strawberry jam.', price: '5.80' },
        { name: 'Yuzu green tea', desc: 'Green tea and Japanese yuzu jam.', price: '5.80' },
        { name: 'Yuzu black tea', desc: 'Indian Assam black tea and yuzu jam.', price: '5.80' },
        { name: 'Passion fruit green tea', desc: 'Green tea and passion fruit jam.', price: '5.80' },
      ],
    },
    {
      category: 'Specials',
      note: 'No caffeine unless noted. Seasonal specials rotate — check the board or Instagram.',
      items: [
        { name: 'Mango honey hooray', desc: 'Mango jam, organic honey, ice. No caffeine.', price: '7.20', favorite: true },
        { name: 'Rose lemonade', desc: 'Organic rose leaf, fresh lemonade juice.', price: '7.20' },
        { name: 'Passion of butterfly', desc: 'Passion fruit jam and butterfly pea flower.', price: '7.20' },
        { name: 'Awesome Thai tea', desc: 'Thai tea from leaf tea, milk, heavy cream.', price: '7.20' },
      ],
    },
  ],

  // Short lines from public Google reviews
  reviews: [
    { text: 'Friendliest people, great service and great drinks!', who: 'Google review' },
    { text: 'I absolutely love this place, their options, and their staff!', who: 'Google review' },
    { text: 'The black sesame matcha latte was so delicious and unique.', who: 'Google review' },
  ],

  // About copy
  about: [
    'Miss B’s is a one-room tea shop a short walk from Wrigley Field: pink walls, a green counter, a few rattan chairs and a shelf of little gifts and crafts.',
    'Everything is made to order with loose-leaf tea, real milk and jams cooked in house. Tell us how sweet and how much ice, and we’ll pour it your way.',
    'The shop also hosts small craft classes now and then. Follow along on Instagram for seasonal drinks and dates.',
  ],

  footerNote: 'Also known as Tulip’s Tea on Tuesday.',
};
