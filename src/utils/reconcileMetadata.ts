import type { Props as SEOProps } from "astro-seo";
import { deepMerge } from "./deepMerge";
import { metadataGlobal } from "../configGlobal";

export function reconcileMetadata(metadataPage: Partial<SEOProps>): SEOProps {
  const { titleTemplate, ...pageConfig } = metadataPage;
  return deepMerge(JSON.parse(JSON.stringify(metadataGlobal)), pageConfig);
}
