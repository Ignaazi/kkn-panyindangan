// components/BootstrapJS.tsx
"use client";

import { useEffect } from "react";

export default function BootstrapJS() {
  useEffect(() => {
    // Memanggil JS Bootstrap secara dinamis setelah halaman termuat di browser
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}