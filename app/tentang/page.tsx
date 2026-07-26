// app/tentang/page.tsx
import TentangSection from "@/components/tentangSection";

export default function TentangPage() {
  return (
    <div style={{ paddingTop: "1px" }}> 
      {/* Jarak aman biar konten Tentang-nya gak ketutupan sama Navbar Global lu */}
      <TentangSection />
    </div>
  );
}