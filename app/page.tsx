import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const state = true;

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello</p>
      <Button variant="ghost" className={cn(
        "text-3xl font-bold text-indigo-500",
        state ? "text-red-500" : "text-blue-500"
      )}>
        Click me
      </Button>
    </div>
  );
}
