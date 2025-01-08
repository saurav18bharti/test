"use client";
import React, { useEffect, useState } from "react";
import { useProduct } from "@/hooks/useProduct";
import { appContent } from "@/utils/variable";
import Image from "next/image";

const Product = () => {
  const { product, loading, error } = useProduct();
  const [productList, setProductList] = useState<any[]>([]);
  useEffect(() => {
    setProductList(product.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      description: item.description,
    })));
  }, [product]);
  return (
    <div className={appContent({place: "train"})}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {productList.map((item: any) => (
          <div key={item.id} className="flex flex-col gap-2 max-w-[300px] rounded-lg border border-border h-full"> 
            <div className="relative w-full aspect-[4/3] p-4 opacity-80 hover:opacity-100 transition-all duration-300">
            <Image src={item.image} alt={item.title} className="absolute object-cover rounded-t-lg" fill />
            </div>
            <div className="flex flex-col justify-between flex-grow gap-1 p-4">
              <h2 className="text-base font-medium line-clamp-1">{item.title}</h2>
              <p className="text-xs text-muted-foreground line-clamp-5">{item.description}</p>
              <p className="text-sm font-semibold">${item.price}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Product;
