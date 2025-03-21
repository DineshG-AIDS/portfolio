import Link from "next/link";

const ExternalLink = ({ url }: { url: string }) => {
  return (
    <Link href={url} passHref target={"_blank"} rel="noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="delay-50 size-6 text-gray-300 transition duration-200
        ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer 
        hover:text-AAsecondary"
      >
        <title>External Link</title>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </Link>
  );
};

export default ExternalLink;
