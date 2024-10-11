import { Container, Filters, Title, TopBar } from "@/components/fragments";

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
            <div className="flex flex-col gap-16">список</div>
          </div>
          {/* product list */}
        </div>
      </Container>
    </>
  );
}
