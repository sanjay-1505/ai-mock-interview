import { Interview } from "@/types";
import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Eye, Newspaper, Sparkles } from "lucide-react";
import TooltipButton from "./TooltipButton";

interface InterviewPinProps {
  interview: Interview;
  onMockPage?: boolean;
}

const InterviewPin = ({ interview, onMockPage = false }: InterviewPinProps) => {
  const navigate = useNavigate();

  return (
    <Card className="p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white space-y-4 border border-gray-100">
      <CardTitle className="text-xl font-semibold text-gray-900">
        {interview?.position}
      </CardTitle>

      <CardDescription className="text-sm text-gray-800">
        {interview?.description}
      </CardDescription>

      <div className="w-full flex items-center gap-2 flex-wrap">
        {interview?.techStack.split(",").map((word, index) => (
          <Badge
            key={index}
            variant={"outline"}
            className="text-xs text-gray-700 border-gray-300 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200"
          >
            {word}
          </Badge>
        ))}
      </div>

      <CardFooter
        className={cn(
          "w-full flex items-center p-0",
          onMockPage ? "justify-end" : "justify-between"
        )}
      >
        <p className="text-[12px] text-blue-950 truncate whitespace-nowrap">
          {`${new Date(interview?.createdAt.toDate()).toLocaleDateString(
            "en-US",
            { dateStyle: "long" }
          )} - ${new Date(interview?.createdAt.toDate()).toLocaleTimeString(
            "en-US",
            { timeStyle: "short" }
          )}`}
        </p>

        {!onMockPage && (
          <div className="flex items-center justify-center gap-2">
            <TooltipButton
              content="View"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/${interview?.id}`, { replace: true });
              }}
              disabled={false}
              buttonClassName="hover:text-sky-500 transition-colors duration-200"
              icon={<Eye />}
              loading={false}
            />

            <TooltipButton
              content="Feedback"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/feedback/${interview?.id}`, {
                  replace: true,
                });
              }}
              disabled={false}
              buttonClassName="hover:text-yellow-500 transition-colors duration-200"
              icon={<Newspaper />}
              loading={false}
            />

            <TooltipButton
              content="Start"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/interview/${interview?.id}`, {
                  replace: true,
                });
              }}
              disabled={false}
              buttonClassName="hover:text-sky-500 transition-colors duration-200"
              icon={<Sparkles />}
              loading={false}
            />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default InterviewPin;
