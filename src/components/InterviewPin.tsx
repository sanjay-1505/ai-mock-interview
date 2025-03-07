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
import { Eye, Newspaper, Sparkles, Trash2 } from "lucide-react";
import TooltipButton from "./TooltipButton";
import { useState } from "react";

import { toast } from "sonner";
import { collection, doc, getDocs, query, where,writeBatch } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { useAuth } from "@clerk/clerk-react";

interface InterviewPinProps {
  interview: Interview;
  onMockPage?: boolean;
}

const InterviewPin = ({ interview, onMockPage = false }: InterviewPinProps) => {
  const navigate = useNavigate();

  const [loading, setLoading]= useState(false);
  const {userId}=useAuth();


  const onDelete=async()=>{
    setLoading(true);

    try{
      

      const interviewRef=doc(db,"interviews",interview.id);
      const userAnswerQuery = query(
                  collection(db, "userAnswers"),
                  where("userId", "==", userId),
                 where("mockIdRef", "==", interview.id)
      );
      const querySnap=await getDocs(userAnswerQuery)

      const batch=writeBatch(db);
      batch.delete(interviewRef)
      querySnap.forEach(docRef => batch.delete(docRef.ref))
      await batch.commit()
      toast("Success",{description:"Interview has been removed"})

    }catch(error){
      console.log(error);
      toast("Error",{description:"Something went Wrong"})
      
    }finally{
      setLoading(false);
    }

  }

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
              content="Delete"
              buttonVariant={"ghost"}
              onClick={onDelete}
              disabled={false}
              buttonClassName="hover:text-red-500 "
              icon={<Trash2/>}
              loading={loading}
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
