import { NextStepPanel } from "@/components/NextStepPanel";

type NextRecommendedStepLink = {
  href: string;
  label: string;
  description?: string;
};

type NextRecommendedStepsProps = {
  description: string;
  primaryLink: NextRecommendedStepLink;
  secondaryLinks?: NextRecommendedStepLink[];
};

export function NextRecommendedSteps({ description, primaryLink, secondaryLinks = [] }: NextRecommendedStepsProps) {
  return (
    <NextStepPanel
      title="Next recommended steps"
      description={description}
      primaryLink={primaryLink}
      secondaryLinks={secondaryLinks}
    />
  );
}
