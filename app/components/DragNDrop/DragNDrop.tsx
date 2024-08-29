"use client";
import { createSwapy } from "@/app/utils";
import { useEffect } from "react";

type CardType = {
  id: number;
  title: string;
  position: string;
  imgUrl: string;
};

const mockData: CardType[] = [
  {
    id: 0,
    title: "Birman Cat",
    position: "slot-a",
    imgUrl: "/images/cat_01.jpeg",
  },
  {
    id: 1,
    title: "American Shorthair",
    position: "slot-b",
    imgUrl: "/images/cat_02.jpeg",
  },
  {
    id: 2,
    title: "Abyssinian Cat",
    position: "slot-c",
    imgUrl: "/images/cat_03.jpeg",
  },
  {
    id: 3,
    title: "Siamese Cat",
    position: "slot-d",
    imgUrl: "/images/cat_04.jpeg",
  },
  {
    id: 4,
    title: "Sphynx Cat",
    position: "slot-e",
    imgUrl: "/images/cat_05.jpeg",
  },
];

const Card = ({ title, position, imgUrl }: CardType) => {
  return (
    <div className={`h-[400px] p-4 text-center`} data-swapy-item={position}>
      <span>{title}</span>
      <div
        className="h-full bg-cover rounded-md"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
    </div>
  );
};

const DragNDrop = () => {
  useEffect(() => {
    const container = document.querySelector(".container")!;
    const swapy = createSwapy(container, { animation: "spring" });
    swapy.onSwap(({ data }) => {
      localStorage.setItem("slotItem", JSON.stringify(data.object));
    });
    swapy.enable(true);
  }, []);
  return (
    <div className="container bg-slate-200 m-4 p-8 rounded-lg mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
      {mockData.map((catDetail) => (
        <div
          key={catDetail.id}
          data-swapy-slot={catDetail.position}
          className=" text-xl"
        >
          <Card {...catDetail} />
        </div>
      ))}
    </div>
  );
};

export default DragNDrop;
