import Image from "next/image";

export default function BackgroundGif() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
      <Image
        src="/resources/media/bg.gif"
        alt="Background animation"
        fill
        className="object-cover"
        priority
        unoptimized
      />
    </div>
  );
}
