// components/MenuList.tsx
import Link from "next/link";

type FooterItem = {
    label: string;
    href: string;
};

type FooterListProps = {
    items: FooterItem[];
};

export default function FooterList({ items }: FooterListProps) {
    return (
        <section className="flex flex-col items-start w-full">
            <img src="/top/footer_flower.PNG" alt="" className="w-full mx-auto" />
            {items.map((item) => (
                <Link key={item.href} href={item.href}>
                    <button
                        className="
              text-[#786449]
              font-kaisei
              text-lg
              underline
              transition-all duration-150
              active:scale-95 active:text-[#a0896b]
              px-5
              py-2
            "
                    >
                        {item.label}
                    </button>
                </Link>
            ))}
        </section>
    );
}
