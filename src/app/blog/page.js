"use client";
import React from "react";

import ColumnView from "@/components/blog/ColumnView";
import ListView from "@/components/blog/ListView";
import { useSearchParams } from "next/navigation";

const Blog = () => {
  const router = useSearchParams();
  const isColumnView = router.get('q');

  return (
    <div className="right-div">
      {isColumnView == "column" ? <ColumnView /> : <ListView />}
    </div>
  );
};

export default Blog;
