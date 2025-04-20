import { Prisma } from '@prisma/client';
import { categories, ingredients, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

interface ProductItemParams {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 25 | 30 | 35;
  imageUrl?: string;
}

const createProductItem = ({
  productId,
  pizzaType,
  size,
  imageUrl,
}: ProductItemParams): Prisma.ProductItemUncheckedCreateInput => ({
  productId,
  price: randomDecimalNumber(190, 600),
  pizzaType,
  size,
  imageUrl,
});

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@example.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@example.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.jpg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });
  await prisma.productItem.createMany({
    data: [
      createProductItem({
        productId: pizza1.id,
        pizzaType: 1,
        size: 25,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/11ee7d612f98bc0ea828957caff9c8ec.jpg',
      }),
      createProductItem({
        productId: pizza1.id,
        pizzaType: 1,
        size: 30,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.jpg',
      }),
      createProductItem({
        productId: pizza1.id,
        pizzaType: 1,
        size: 35,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/11ee7d6130241e75b0ab33725248c0d0.jpg',
      }),
    ],
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сырная',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      createProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 25,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/11ee7d610cf7e265b7c72be5ae757ca7.jpg',
      }),
      createProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.jpg',
      }),
      createProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 35,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/11ee7d610d91679bb519f38c3f45880f.jpg',
      }),
    ],
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Чоризо фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.jpg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });
  await prisma.productItem.createMany({
    data: [
      createProductItem({
        productId: pizza3.id,
        pizzaType: 1,
        size: 25,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/11ee7d61703f8b47b1e4933820a7d91f.jpg',
      }),
      createProductItem({
        productId: pizza3.id,
        pizzaType: 1,
        size: 30,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.jpg',
      }),
      createProductItem({
        productId: pizza3.id,
        pizzaType: 1,
        size: 35,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/11ee7d6170d5f99c89e91a2b3b91d16e.jpg',
      }),
    ],
  });
  const pizza4 = await prisma.product.create({
    data: {
      name: 'Бефстроганов',
      imageUrl:
        'https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.jpg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });
  await prisma.productItem.createMany({
    data: [
      createProductItem({
        productId: pizza4.id,
        pizzaType: 1,
        size: 25,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/01953cebc82b777c96bfd4dd1a377eb0.jpg',
      }),
      createProductItem({
        productId: pizza4.id,
        pizzaType: 1,
        size: 30,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.jpg',
      }),
      createProductItem({
        productId: pizza4.id,
        pizzaType: 1,
        size: 35,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/01953cece9107770849481f54187a17f.jpg',
      }),
    ],
  });
  const pizza5 = await prisma.product.create({
    data: {
      name: 'Креветки со сладким чили',
      imageUrl:
        'https://media.dodostatic.net/image/r:292x292/0194d4fd39bb7352bfa5de2219e88b9b.jpg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });
  await prisma.productItem.createMany({
    data: [
      createProductItem({
        productId: pizza5.id,
        pizzaType: 1,
        size: 25,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/0194d4fd22cb74c1bff42c8552f6e0a0.jpg',
      }),
      createProductItem({
        productId: pizza5.id,
        pizzaType: 1,
        size: 30,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/0194d4fd39bb7352bfa5de2219e88b9b.jpg',
      }),
      createProductItem({
        productId: pizza5.id,
        pizzaType: 1,
        size: 35,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/0194d4fd4ba4798887defbdb3bc48750.jpg',
      }),
    ],
  });
  const pizza6 = await prisma.product.create({
    data: {
      name: 'Песто',
      imageUrl:
        'https://media.dodostatic.net/image/r:292x292/019589a573477186898528944fd881a2.jpg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });
  await prisma.productItem.createMany({
    data: [
      createProductItem({
        productId: pizza6.id,
        pizzaType: 1,
        size: 25,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019589a55cd97266afcba81a15dfa1ca.jpg',
      }),
      createProductItem({
        productId: pizza6.id,
        pizzaType: 1,
        size: 30,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019589a573477186898528944fd881a2.jpg',
      }),
      createProductItem({
        productId: pizza6.id,
        pizzaType: 1,
        size: 35,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019589a596d274ad9deb4c014555a6fa.jpg',
      }),
    ],
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      createProductItem({ productId: pizza1.id, pizzaType: 1, size: 25 }),
      createProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      createProductItem({ productId: pizza1.id, pizzaType: 2, size: 35 }),

      // Пицца "Сырная"
      createProductItem({ productId: pizza2.id, pizzaType: 1, size: 25 }),
      createProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      createProductItem({ productId: pizza2.id, pizzaType: 1, size: 35 }),
      createProductItem({ productId: pizza2.id, pizzaType: 2, size: 25 }),
      createProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      createProductItem({ productId: pizza2.id, pizzaType: 2, size: 35 }),

      // Пицца "Чоризо фреш"
      createProductItem({ productId: pizza3.id, pizzaType: 1, size: 25 }),
      createProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      createProductItem({ productId: pizza3.id, pizzaType: 2, size: 35 }),

      // Пицца "Бефстроганов"
      createProductItem({ productId: pizza4.id, pizzaType: 1, size: 25 }),
      createProductItem({ productId: pizza4.id, pizzaType: 2, size: 30 }),
      createProductItem({ productId: pizza4.id, pizzaType: 2, size: 35 }),

      // Пицца "Креветки со сладким чили"
      createProductItem({ productId: pizza5.id, pizzaType: 1, size: 25 }),
      createProductItem({ productId: pizza5.id, pizzaType: 2, size: 30 }),
      createProductItem({ productId: pizza5.id, pizzaType: 2, size: 35 }),

      // Пицца "Песто"
      createProductItem({ productId: pizza6.id, pizzaType: 1, size: 25 }),
      createProductItem({ productId: pizza6.id, pizzaType: 2, size: 30 }),
      createProductItem({ productId: pizza6.id, pizzaType: 2, size: 35 }),

      // Остальные продукты
      ...Array.from({ length: 74 }, (_, index) =>
        createProductItem({ productId: index + 1 })
      ),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
