import { Navbar } from "@/components/navbar";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
    <Navbar />
    <main className="pt-16 sm:pt-0 pb-20 h-full">
        {children}
    </main>
    
</div>  
  );
}
