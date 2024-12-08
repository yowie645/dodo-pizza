import { Container, Filters, Title, TopBar } from "@/components/fragments";
import { ProductsGroupList } from "@/components/fragments/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* filters */}
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 1,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Маргарита",
                    price: 1500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
          {/* product list */}
        </div>
      </Container>
    </>
  );
}
