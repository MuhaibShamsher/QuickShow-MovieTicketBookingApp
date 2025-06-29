import React from 'react';

function DisplayCast({ casts }) {
  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll 20s linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-60%);
          }
        }
      `}</style>

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
        <div className="marquee-inner flex will-change-transform min-w-[200%]">
          {[...casts, ...casts].map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center mx-4">
              <img
                src={cast.profile_path}
                alt=""
                className="rounded-full h-20 md:h-20 aspect-square object-cover"
              />
              <p className="font-medium text-xs mt-2">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayCast;