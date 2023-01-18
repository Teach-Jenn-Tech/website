// adapted from https://github.com/withastro/astro.build/blob/112bdc723b3ba305997c95d7ce02304624d0d3ce/src/data/showcase/index.ts

import type { CodeSite } from "~/types";
import sitesData from "./sites.json";

const allImages = import.meta.glob<ImageMetadata>("./images/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

let _loadShowcase: Promise<Array<CodeSite>>;

async function loadShowcase(): Promise<Array<CodeSite>> {
  const sites = await Promise.all(
    sitesData.map(async (site) => {
      if (!(site.image in allImages)) {
        console.error(
          `Image for "${site.title}" not found (provided: "${site.image}")`
        );
      }

      const image = await allImages[site.image];

      return {
        ...site,
        image,
      };
    })
  );

  return sites;
}

export async function getCode() {
  _loadShowcase = _loadShowcase || loadShowcase();
  return _loadShowcase;
}
