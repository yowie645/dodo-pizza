import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn("group", className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image
            width={215}
            height={215}
            className="object-cover transition duration-500 ease-in-out group-hover:translate-y-1"
            src={imageUrl}
            alt={name}
            unoptimized={true}
          />
        </div>
        <Title text={name} className="mb-1 mt-3 font-medium" size="sm" />
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, odit
          officia consequatur harum expedita suscipit nam aliquam earum, quas
          repellendus odio ad cupiditate. Nobis consequuntur aut tenetur optio
          provident quia?
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl">от {price}</span>
          <Button variant="secondary" className="text-base font-medium">
            <Plus size={20} className="mr-1" /> Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
