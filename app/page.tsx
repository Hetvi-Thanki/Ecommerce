import Image from "next/image";
import ProductsPage from "./products/page";
export const dynamic='force-dynamic';
export default function Home() {
  return (
  <ProductsPage></ProductsPage>
  );
}
