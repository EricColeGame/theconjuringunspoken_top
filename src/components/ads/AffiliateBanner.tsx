import Image from "next/image";

const affiliateUrl = "https://aichattings.com/?via=yang";

export function AffiliateBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full justify-center ${className}`}>
      <a
        href={affiliateUrl}
        target="_blank"
        rel="sponsored nofollow noopener"
        aria-label="18+ sponsored ChatUp AI affiliate"
        className="block w-full max-w-[468px]"
      >
        <span className="relative block aspect-[468/60] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/chatup-horizontal-source.png"
            alt="ChatUp AI 18+ AI companion"
            fill
            sizes="(max-width: 468px) 100vw, 468px"
            className="object-cover object-center"
          />
        </span>
      </a>
    </div>
  );
}
