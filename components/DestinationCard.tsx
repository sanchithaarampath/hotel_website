"use client";

import { useRouter } from "next/navigation";

interface Destination { 
  id: string;
  name: string;
  location: string;
  imageUrl: string;
}

export default function DestinationCard({ destination }: { destination: Destination }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/destinationdetails"); // Navigate to destinationdetails page
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="h-52 w-full object-cover"
      />
      <div className="p-5 bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{destination.name}</h3>
        <p className="text-sm text-gray-600">{destination.location}</p>
      </div>
    </div>
  );
}
