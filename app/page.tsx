import { Card, CardContent } from "@/components/ui/card"


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8">
      <Card className="w-[600px] overflow-hidden">
        <CardContent className="p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Hi! I&apos;m David</h2>
          <p className="text-muted-foreground text-center">
            I&apos;m a software developer, and currently a Math + CS student @ Rutgers University, New Brunswick.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
