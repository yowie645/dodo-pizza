export const categories = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
];

export const ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Комбо Пеппероби',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195f0841d5674378a67ebf953814e09.jpg',
    categoryId: 2,
  },
  {
    name: 'Неизведанное комбо',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019528003c2470f887fddb2c05ad9b25.jpg',
    categoryId: 2,
  },
  {
    name: 'Додо Бокс',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195d40700b277a8abeb819052d04d35.jpg',
    categoryId: 2,
  },
  {
    name: 'Чикен бокс',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019570d1cf4972f59b57ab333237e745.jpg',
    categoryId: 2,
  },
  {
    name: 'Завтрак на двоих',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.jpg',
    categoryId: 2,
  },
  {
    name: 'Четыре в одном',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195960b3e227387aa74b7eabc1117b2.jpg',
    categoryId: 2,
  },
  {
    name: '3 пиццы 25 см',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195960cdb9079b38dd908001994d5dc.jpg',
    categoryId: 2,
  },
  {
    name: '2 пиццы',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195d407b8a8718dbb9572f2848da623.jpg',
    categoryId: 2,
  },
  {
    name: '3 пиццы 30 см',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195f0ff3ee0726a8389bda7e4d9062a.jpg',
    categoryId: 2,
  },
  {
    name: '3 пиццы 35 см',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.jpg',
    categoryId: 2,
  },
  {
    name: '2 пиццы и напиток',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01959612132f79459d1955657be860b1.jpg',
    categoryId: 2,
  },
  {
    name: '4 Закуски',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01959612e6267546a8aad7b1f618a95b.jpg',
    categoryId: 2,
  },
  {
    name: '5 пицц',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01959613e61877b289707dec15e82d75.jpg',
    categoryId: 2,
  },
  {
    name: '7 пицц',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195961483b97394ad6d2dd19edc969e.jpg',
    categoryId: 2,
  },
  {
    name: '10 пицц',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01958a93c0c071b198588e3500e19dad.jpg',
    categoryId: 2,
  },
  {
    name: '2 фирменные закуски',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01959615865d76fc9ee8d565a1084e9b.jpg',
    categoryId: 2,
  },
  {
    name: '2 десерта',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195a92e6e0c71559a0b2c2621a11ec9.jpg',
    categoryId: 2,
  },
  {
    name: '2 напитка',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01959617dc25776d8cbf65dd4af4ea60.jpg',
    categoryId: 2,
  },
  {
    name: '2 соуса',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01959618077b7889a6837ec69a751b97.jpg',
    categoryId: 2,
  },
  {
    name: 'Чикен ролл',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019595f503e27410ab6e179c05347231.jpg',
    categoryId: 3,
  },
  {
    name: 'Паста Креветка и Песто',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019591e99f2e77e79cd59ac531ef5522.jpg',
    categoryId: 3,
  },
  {
    name: 'Салат Овощной микс',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01959842dc40728595599a0918e5593a.jpg',
    categoryId: 3,
  },
  {
    name: 'Додстер Чилл Грилл',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019591cc0d0971eaa6f4f81bde8983fb.jpg',
    categoryId: 3,
  },
  {
    name: 'Баварский ланчбокс',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019591d977df7320b5d39f77965f05d8.jpg',
    categoryId: 3,
  },
  {
    name: 'Додстер Чилл Грилл',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019591cc0d0971eaa6f4f81bde8983fb.jpg',
    categoryId: 3,
  },
  {
    name: 'Креветки',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019591d4976a77a481c909905a469347.jpg',
    categoryId: 3,
  },
  {
    name: 'Соберите свой омлет',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019595ef24b671f7b5207520beac8429.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет с томатами в пите',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635f48c5276f5ae8b4a228f0777cc.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет с ветчиной и грибами в пите  ',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635f026a47947978aefdd7ccaad8d.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет с беконом в пите',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635ec0bf778c1b8e20d5e41598942.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет с пепперони в пите',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635f2c8c27808a3f77786977bc7b8.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет сырный в пите',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635f658f7775abefa4da03917782a.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет с томатами',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635f40974762080d3b66deb08066b.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет с ветчиной и грибами',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635ed7786784fb9806fcb21a2c6af.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет с беконом',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635ead58a711fadc7d7287eac0267.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет с пепперони',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635f1867372f795ed7ea6816c1607.jpg',
    categoryId: 3,
  },
  {
    name: 'Омлет сырный',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019635f51d0678a8ab7d6ba767d098a3.jpg',
    categoryId: 3,
  },
  {
    name: 'Дэнвич с говядиной',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019591cfed20780b8ce864e05bc5e37b.jpg',
    categoryId: 3,
  },
  {
    name: 'Дэнвич ветчина и сыр',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01960b7c2e3871fabedd3f13bd270d6e.jpg',
    categoryId: 3,
  },
  {
    name: 'Дэнвич чоризо барбекю',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01960b7d73097250b3f173c4c4911bc4.jpg',
    categoryId: 3,
  },
  {
    name: 'Паста с креветками',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0194d50285347992955d7c7f3b9a0621.jpg',
    categoryId: 3,
  },
  {
    name: 'Паста Карбонара',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee797018746ef899d162d16fa99625.jpg',
    categoryId: 3,
  },
  {
    name: 'Паста Песто',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee797019062658a437457f8e1d5887.jpg',
    categoryId: 3,
  },
  {
    name: 'Супермясной Додстер',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0196120ed7fd781690adcc273841b67e.jpg',
    categoryId: 3,
  },
  {
    name: 'Додстер с ветчиной',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee7970259d888e98b6407ee6b994d9.jpg',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee796f96d11392a2f6dd73599921b9.jpg',
    categoryId: 3,
  },
  {
    name: 'Острый Додстер',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee796fd3b594068f7a752df8161d04.jpg',
    categoryId: 3,
  },
  {
    name: 'Грибной Стартер',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11efa1f4ab2244098a783eaab4691e53.jpg',
    categoryId: 3,
  },
  {
    name: 'Сырный Стартер',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0196120ed7fd781690adcc273841b67e.jpg',
    categoryId: 3,
  },
  {
    name: 'Куриные наггетсы',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11eef45eacc4d7eabc10e0a0e0c2c67a.jpg',
    categoryId: 3,
  },
  {
    name: 'Картофель из печи с соусом',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01956ba60c507417b6caa5cc0048b274.jpg',
    categoryId: 3,
  },
  {
    name: 'Картофель из печи',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11eed646b7ac9c38ba256320dd31c4d5.jpg',
    categoryId: 3,
  },
  {
    name: 'Куриные кусочки',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0194a8424463713bb2cbdd6fd9be362b.jpg',
    categoryId: 3,
  },
  {
    name: 'Ланчбокс с куриными кусочками',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01956ba42b9b780daa05108a89527f31.jpg',
    categoryId: 3,
  },
  {
    name: 'Салат Цезарь',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ef8d3bc9e84fb7b5cfb7f47c6fb334.jpg',
    categoryId: 3,
  },
  {
    name: 'Персиковый молочный коктейль',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019592025b2376d5af7b6ace8be8b9aa.jpg',
    categoryId: 4,
  },
  {
    name: 'Молочный коктейль Фисташка',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019595f0eec0752da61aed5ee21ebf0b.jpg',
    categoryId: 4,
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ef5bc24dc566b0918b1ede2949a71a.jpg',
    categoryId: 4,
  },
  {
    name: 'Классический молочный коктейль',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ef5bc13531cc94bb01bef8fa0cc92f.jpg',
    categoryId: 4,
  },
  {
    name: 'Клубничный молочный коктейль',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ef5bc1b51d1329b6378418b134c873.jpg',
    categoryId: 4,
  },
  {
    name: 'Шоколадный молочный коктейль',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ef5bc2b2516586896007fcd6a14c23.jpg',
    categoryId: 4,
  },
  {
    name: 'Капучино Яблочный пирог',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195a3dd5c3173e2a83bba8bee8be7e8.jpg',
    categoryId: 5,
  },
  {
    name: 'Кофе Карамельный капучино',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee7d61aed6b6d4bfdad4e58d76cf56.jpg',
    categoryId: 5,
  },
  {
    name: 'Кофе Кокосовый латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee7d61b19fa07090ee88b0ed347f42.jpg',
    categoryId: 5,
  },
  {
    name: 'Кофе Ореховый латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee7d61b12220ab911ff4fa42ef585d.jpg',
    categoryId: 5,
  },
  {
    name: 'Айс капучино',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11eefb6985e52b9fa2c985ebc42c7e64.jpg',
    categoryId: 5,
  },
  {
    name: 'Кофе Капучино',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee7d61ae1813b4ab42d8927d061035.jpg',
    categoryId: 5,
  },
  {
    name: 'Кофе Латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee7d61b0c26a3f85d97a78feee00ad.jpg',
    categoryId: 5,
  },
  {
    name: 'Кофе Американо',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee7d61b02b810b8767d5ff70d15897.jpg',
    categoryId: 5,
  },
  {
    name: 'Дрип-пакет',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195922d1f0473209f532cb30c3191df.jpg',
    categoryId: 5,
  },
  {
    name: 'Дрип-пакеты, 8 штук',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/0195922d7510734fa1d9934f1c5467b3.jpg',
    categoryId: 5,
  },
  {
    name: 'Додо кофе молотый',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/019592543774767da242987558cd0174.jpg',
    categoryId: 5,
  },
  {
    name: 'Додо кофе в зернах',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/01959253b4027330b2dd7b6d896e4e70.jpg',
    categoryId: 5,
  },
  {
    name: 'Кофе в зернах - фирменная смесь',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11ee7970353d9a598fc83916c8eec0b5.jpg',
    categoryId: 5,
  },
];
