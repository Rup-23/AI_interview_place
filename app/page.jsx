import { GoldTitle, GrayTitle, SectionLabel } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <div>
      <section className="pt-28 sm:pt-32 flex flex-col">
       <GrayTitle>Welcome to AI Interview Place</GrayTitle>
       <GoldTitle>Welcome to AI Interview Place</GoldTitle>
       <SectionLabel>Welcome to AI Interview Place</SectionLabel>
      </section>
    </div>
  );
}
