import { Link } from "@inertiajs/react";
import { Services } from "@/components/welcome/Services";

export default function Card({
  title,
  description,
  imageUrl,
  href,
  premium,
}: Services) {
  return  <Link href={href} className="relative flex flex-col gap-2 rounded-lg border-2 border-transparent hover:border-red focus:border-red bg-background p-4
   text-center shadow outline-none transition-all hover:scale-105 focus:scale-105 dark:bg-secondary dark:shadow-black/25 lg:max-w-xs">
    <div className="mx-auto">
        <img src={imageUrl} alt={title} />
    </div>
    <h5 className="text-xl font-semibold">{title}</h5>
    <p className="text-sm text-foreground/60">{description}</p>

    {premium && (
        <span className="absolute right-2 top-4 rounded-lg border border-red px-2 py-1 text-xs font-semibold leading-3 text-red">Premium</span>
    )}
   </Link>
}
