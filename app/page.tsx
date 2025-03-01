import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8">
      <Card className="w-[600px] flex flex-row overflow-hidden">
        <div className="w-1/2 pl-6 pt-6 pb-6 pr-3">
          <div className="relative h-[300px] w-full">
            <Image
              src="/pfp.jpeg"
              alt="Photo of David"
              fill
              priority
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <CardContent className="w-1/2 pl-3 pt-6 pb-6 pr-6">
          <h2 className="text-2xl font-bold mb-4">Hi! I&apos;m David</h2>
          <p className="text-muted-foreground">
            I&apos;m a software developer, and currently a Math + CS student @ Rutgers University, New Brunswick.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
