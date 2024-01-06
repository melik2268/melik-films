import React from "react";

import { FeatureMovieLoading } from "@/components/featured-movie/loading";
import CategoriesLoading from "/components/categories/loading.js";
import { MoviesSectionLoading } from "@/components/movies-section/loading";

function Loading() {
  return (
    <div>
      <FeatureMovieLoading></FeatureMovieLoading>
      <CategoriesLoading />
      <MoviesSectionLoading></MoviesSectionLoading>
      <MoviesSectionLoading></MoviesSectionLoading>
      <MoviesSectionLoading></MoviesSectionLoading>
    </div>
  );
}

export default Loading;
