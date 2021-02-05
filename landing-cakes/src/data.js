let rerenderEntireTree = () => {
  console.log("State changed");
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export const updateMenu = (index) => {
  // console.log(index);
  let array = data.order.menu.submenu;
  array.forEach((element) => {
    element.active = false;
  });
  array[index].active = true;
  rerenderEntireTree();
};

export let data = {
  home: {
    sliderImages: [
      "/images/01.jpg",
      "/images/02.jpg",
      "/images/03.jpg",
      "/images/04.jpg",
      "/images/05.jpg",
      "/images/06.jpg",
      "/images/07.jpg",
      "/images/08.jpg",
      "/images/09.jpg",
      "/images/10.jpg",
      "/images/11.jpg",
      "/images/12.jpg",
      "/images/13.jpg",
      "/images/14.jpg",
      "/images/15.jpg",
      "/images/16.jpg",
      "/images/17.jpg",
      "/images/18.jpg",
    ],
    socialIcons: {
      fb: "/images/fb_icon.webp",
      inst: "/images/instagram_icon.webp",
      pin: "/images/pinterest_icon.webp",
      tw: "/images/twitter_icon.webp",
    },
  },
  about: [
    {
      p1:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      p2:
        "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
    },
  ],
  contact: [
    {
      phone: "123-456-7890",
      email: "info@mysite.com",
      p1:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. ",
    },
  ],
  order: {
    title: "Order",
    notification:
      "Sorry, online ordering is currently closed. We’re not taking orders right now.",
    menu: {
      userName: "Guest",
      avatar: process.env.PUBLIC_URL + "/images/avatar.svg",
      title: "Cakes Menu",
      description: "Served daily between 12-5pm",
      submenu: [
        {
          subTitle: "Wedding Cakes",
          subDescription: `I'm a description. Click me and "Edit Menu" to open the Restaurant Menu editor and change my text.`,
          active: true,
          items: [
            {
              id: 1,
              title: "Flowers Wedding Cake",
              price: 70,
              image: "/images/catalog/01.jpg",
            },
            {
              id: 2,
              title: "Golden Wedding Cake",
              price: 70,
              image: "/images/catalog/02.jpg",
            },
            {
              id: 3,
              title: "Romantic Wedding Cake",
              price: 70,
              image: "/images/catalog/03.jpg",
            },
            {
              id: 4,
              title: "Classic Wedding Cake",
              price: 70,
              image: "/images/catalog/04.jpg",
            },
            {
              id: 5,
              title: "Pearls Wedding Cake",
              price: 70,
              image: "/images/catalog/05.jpg",
            },
            {
              id: 6,
              title: "Flowers Pink Wedding Cake",
              price: 70,
              image: "/images/catalog/06.jpg",
            },
          ],
        },
        {
          subTitle: "Celebration Cakes",
          subDescription: `I'm a description. Click me and "Edit Menu" to open the Restaurant Menu editor and change my text.`,
          active: false,
          items: [
            {
              id: 1,
              title: "Macaroons Cake",
              price: 70,
              image: "/images/catalog/07.jpg",
            },
            {
              id: 2,
              title: "Macaroons Chocolate Cake",
              price: 70,
              image: "/images/catalog/08.jpg",
            },
            {
              id: 3,
              title: "Ice Cream Cone Cake",
              price: 70,
              image: "/images/catalog/09.jpg",
            },
            {
              id: 4,
              title: "Crazy Donuts and Meringue Cake",
              price: 70,
              image: "/images/catalog/10.jpg",
            },
            {
              id: 5,
              title: "Crazy Golden Chocolate Cake",
              price: 70,
              image: "/images/catalog/11.jpg",
            },
            {
              id: 6,
              title: "Marble & Donuts Cake",
              price: 70,
              image: "/images/catalog/12.jpg",
            },
          ],
        },
      ],
    },
  },
};
