import React from "react";
import { useRouter } from "next/router";

export default function ProductId() {
  const router = useRouter();
  const productId = router.query.ProductId;
  return <div>productId {productId}</div>;
}
