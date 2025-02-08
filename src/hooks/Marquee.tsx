import { cn } from "@/lib/utils";
import { Marquee } from "../components/magicui/marquee";
import logo2 from "../lib/logo2.png"
import logo from "../lib/Logo-1.png"
import mlogo from "../lib/image.png"
import logo3 from "../lib/inkoti.png"
import logo4 from "../lib/mari-inkoti.png"
const reviews = [
  {
    name: "Monarch",
    username: "@M",
    body: "Global workspace, Crafted in India.",
    link: "https://monarchergo.com",
    img: mlogo,
  },
  {
    name: "QuettaNex",
    username: "@QN", 
    body: "QuettaNex IT solutions.",
    link: "https://quettanex.com",
    img: logo,
  },
  {
    name: "KPR developers",
    username: "@KPR",
    body: "Devs Established in 2006.",
    link: "https://kprdevelopers.in",
    img: logo2,
  },
  
  {
    name: "RV Toures and Travels PVT.LTD.",
    username: "@RV",
    body: "Hyd | Benguluru | Varanasi ",
    link: "https://rvtoursandtravels.com",
    img: logo4,
  },
  
  {
    name: "Vajra",
    username: "@V",
    body: "Building Values. 6 years+",
    link: "https://thevajra.in/",
    img: logo2,
  },
  
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  link,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  link: string;
}) => {
  return (
    <figure
      onClick={() => window.open(link, '_blank')}
      className={cn(
        "relative w-64 overflow-hidden rounded-xl border p-4 cursor-pointer transition-colors",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">
        {body}
        <br />
        <span className="text-primary">
          {link.replace('https://', '')}
        </span>
      </blockquote>
    </figure>
  );
};

export default function MarqueeSection() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <h2 className="pb-10 text-2xl font-bold glowing-text mr-5">Sponsers</h2><Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
