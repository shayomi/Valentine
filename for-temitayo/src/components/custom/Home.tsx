import React from "react";
import LoveAccordion from "./Accordion";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";

const HomeLayout = () => {
  return (
    <div>
      <div className="px-4 lg:px-0 max-w-4xl mx-auto">
        <Typography variant="h2"> Hey Baby</Typography>
        <Typography variant="p">
          {" "}
          I just wanted to take a moment to tell you how much you mean to me.
          Seriously, you&apos;re like the ultimate package of kindness, humor,
          and support. Your laughter? It&apos;s like sunshine on a cloudy day,
          seriously infectious! I can&apos;t even begin to tell you how much I
          appreciate your generosity and patience.
        </Typography>
        <Typography variant="p">
          You&apos;ve got this incredible way of making me feel like I&apos;m on
          top of the world, even when things get tough. Your love has filled my
          life with so much joy and warmth. I love all the moments we&apos;ve
          shared together, and I&apos;m stoked for the ones we&apos;ve yet to
          create.
        </Typography>{" "}
        <Typography variant="p">
          With Valentine&apos;s Day coming up, I&apos;ve been thinking a lot
          about how lucky I am to have you and to give you a list of how amazing
          you are.
        </Typography>
      </div>
      <LoveAccordion />
      <div className="mt-[-3px]">
        <img
          src="/images/sayo-tt.png"
          alt="Home about image"
          className="max-w-[500px] w-full mx-auto"
        />
      </div>
      <div className="mt-6 px-6">
        {" "}
        <Typography variant="h4" className="flex justify-center">
          Temitayo Mawusi Noamesi Adegoroye, Will you be my val ?
        </Typography>
        <a href="https://wa.link/37lp8a" className="flex justify-center mt-4">
          <Button>Let me know</Button>
        </a>
      </div>
    </div>
  );
};

export default HomeLayout;
