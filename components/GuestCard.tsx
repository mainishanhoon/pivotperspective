import Image from 'next/image';

export default function GuestCard() {
  return (
    <div className="hofrom-blue-500 m-auto mt-14 flex w-[85vw] flex-col items-center gap-[50px] rounded-3xl border-2 border-slate-500 bg-gradient-to-br from-[#6dbbff75] to-[#6dbbff05] p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] hover:to-purple-700 md:w-[450px]">
      <div className="flex-col items-start px-4 pb-0 pt-7">
        <p className="text-4xl font-bold uppercase">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="text-large font-bold">Frontend Radio</h4>
      </div>
      <div className="overflow-visible py-2">
        <Image
          alt="Guest Card"
          className="mt-16 rounded-xl object-cover"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={400}
          height={250}
        />
      </div>
    </div>
  );
}
