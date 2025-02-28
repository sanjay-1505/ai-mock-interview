import { cn } from "@/lib/utils";

interface HeadingsProps {
  title: string;
  description?: string;
  isSubHeading?: boolean;
}

const Headings = ({
  title,
  description,
  isSubHeading = false,
}: HeadingsProps) => {
  return (
    <div>
      <h2
        className={cn(
          "text-2xl md:text-3xl text-purple-800 font-semibold font-sans",
          isSubHeading && "text-lg md:text-xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-sm text-muted-foreground text-black">{description}</p>
      )}
    </div>
  );
};

export default Headings;