/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import gsap from "gsap";
const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    gsap
      .timeline()
      .to("#loadCon", {
        scale: 1,
        opacity: 1,
        display: "flex",
        ease: "elastic.out(1, 0.6)",
      })
      .to("#loadCon #inner1", { scale: 1, ease: "elastic.out(1, 0.6)" }, "-=1")
      .to(
        "#loadCon #inner1",
        { borderWidth: "1px", ease: "power4.out" },
        "-=1.5"
      )
      .to(
        "#loadCon #inner2",
        { width: "100%", opacity: "1", ease: "bounce.out" },
        "-=1.5"
      )

      .to(
        "#inner2 #text",
        {
          scale: 1,
          opacity: 1,

          ease: "power4.out",
          borderRadius: "9999px",
        },
        "-=0.8"
      )
      .to(
        "#loadCon",
        {
          scale: 1.1,
          border: "50px solid rgba(255,255,255,0.1)",
          duration: 1,
          repeat: -1,
          ease: "back.out(1)",
          yoyo: true,
          borderRadius: "9999px",
          backgroundColor: "rgba(255, 255 ,255, 0.4)",
        },
        "-=1"
      )
      .to(
        "#load",
        {
          scale: 1.1,
          border: "70px solid rgba(255,255,255,0.1)",
          borderRadius: "9999px",
          backgroundColor: "rgba(255, 255 ,255, 0.5)",
          ease: "back.out(1)",
          yoyo: true,
          duration: 1,
        },
        "-=1"
      );
  });

  return (
    <div id="preloader" style={{ display: loading ? "flex" : "none" }}>
      <div
        id="load"
        className="rounded-full items-center justify-center w-[320px] xsm:w-[350px] h-[320px] xsm:h-[350px] scale-[6] bg-white/40 border-white/0 opacity-0 hidden"
      >
        <div
          id="loadCon"
          className="rounded-full flex items-center justify-center w-[320px] xsm:w-[350px] h-[320px] xsm:h-[350px] scale-[6] bg-white/40 border-white/0 opacity-0 hidden"
        >
          <div
            id="inner1"
            className="rounded-full aspect-square flex items-center justify-center w-4/5 scale-0 bg-white/40 border-0 border-white/50"
          >
            <div
              id="inner2"
              className="rounded-full flex items-center justify-center w-full bg-white/95 opacity-0 text-cyan-800 overflow-hidden"
            >
              <span
                id="text"
                className="relative z-[2] bg-white font-bold text-2xl pb-[10px] -mr-10 -mb-[10px] leading-[1] scale-x-0 origin-right opacity-0"
              >
                <img
                  src="/assets/img/Icone.png"
                  className="samp_logo"
                  alt="logo"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreLoader;
