import { keywordTopics } from "./keywords";
import { buildContentBrief } from "../lib/content/brief-builder";

export const contentBriefs = keywordTopics.map((topic) => buildContentBrief(topic));
