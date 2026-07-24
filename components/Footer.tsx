// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">KKN Panyindangan 2026</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
        </div>
      </div>
    </footer>
  );
}