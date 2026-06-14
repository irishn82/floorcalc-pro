import type { GuideSlug } from "@/data/types";
import type { HowToStep } from "@/lib/seo/schema";

export const guideHowToSteps: Partial<Record<GuideSlug, HowToStep[]>> = {
  "how-to-test-concrete-moisture": [
    {
      name: "Check the slab cure time",
      text: "Confirm the concrete slab has cured long enough. New slabs typically need at least 60 days before moisture-sensitive flooring can be installed, though requirements vary by product."
    },
    {
      name: "Choose a moisture test method",
      text: "Select a test method approved by the flooring manufacturer. Common methods include the calcium chloride test (ASTM F1869) and the in-situ relative humidity probe test (ASTM F2170)."
    },
    {
      name: "Conduct the moisture test",
      text: "Follow the test kit or probe manufacturer's instructions exactly. Place tests in multiple locations across the slab, especially near exterior walls, drains, and low spots."
    },
    {
      name: "Compare results to the flooring specification",
      text: "Look up the maximum allowed moisture emission rate or relative humidity percentage in the flooring manufacturer's installation guide. Do not use a generic number."
    },
    {
      name: "Address moisture if readings are too high",
      text: "If moisture levels exceed the flooring specification, review options such as additional cure time, moisture mitigation products, or alternative flooring materials before proceeding."
    }
  ],
  "how-long-should-hardwood-acclimate": [
    {
      name: "Bring flooring into the installation space",
      text: "Move the hardwood boxes into the room where they will be installed, not just into the building. The flooring needs to adjust to the specific room's temperature and humidity."
    },
    {
      name: "Set HVAC to installation conditions",
      text: "Set heating, cooling, and ventilation to the conditions the home will normally maintain. The acclimation environment should match future lived-in conditions."
    },
    {
      name: "Test the flooring moisture content",
      text: "Use a pin or pinless moisture meter to measure the wood's moisture content. Compare to the subfloor moisture content and the manufacturer's acceptable moisture content range."
    },
    {
      name: "Wait until moisture content stabilizes",
      text: "Allow the flooring to remain in place until moisture content readings stabilize within the acceptable range — typically 3 to 7 days, but potentially longer in humid or dry climates."
    },
    {
      name: "Confirm the subfloor is ready",
      text: "Verify subfloor moisture content, flatness, and structural integrity before installing. Flooring that acclimated properly can still fail if the subfloor is outside acceptable limits."
    }
  ],
  "why-is-my-lvp-floor-clicking": [
    {
      name: "Locate where the clicking is coming from",
      text: "Walk the floor slowly and mark the exact spots where the sound repeats. A fixed location often points to a subfloor issue or damaged joint. A broad area may point to underlayment or expansion problems."
    },
    {
      name: "Check for tight expansion gaps",
      text: "Look around the perimeter for trim, transitions, or fixed objects that may be pressing against the floating floor. Remove baseboards or quarter-round to check for adequate gap at walls."
    },
    {
      name: "Inspect the subfloor flatness",
      text: "Use a long straightedge to check for low spots or humps under the flooring. Soft areas under a floating floor allow planks to flex and stress the locking joints, causing clicking."
    },
    {
      name: "Check the underlayment",
      text: "Confirm the underlayment type matches the product specification. Underlayment that is too soft, doubled, or not approved for the product can allow excessive movement."
    },
    {
      name: "Inspect locking joints",
      text: "If accessible, check whether locking tabs are damaged or if joints are separating. Repeated clicking at a joint often means the lock is under stress and may be failing."
    }
  ],
  "why-is-my-laminate-floor-separating": [
    {
      name: "Identify which joints are separating",
      text: "Walk the floor and mark where gaps are visible. Note whether the separating is in one area or spread across the floor — this helps distinguish a localized cause from a whole-floor condition."
    },
    {
      name: "Check expansion gaps at walls and fixed objects",
      text: "Measure the gap between the flooring and walls, cabinets, door frames, and thresholds. A missing or filled expansion gap can cause a floating floor to buckle and force joints open."
    },
    {
      name: "Test for moisture",
      text: "Use a moisture meter to check the floor surface and the subfloor. Elevated moisture is one of the most common causes of laminate separation and recurring gaps."
    },
    {
      name: "Check subfloor flatness",
      text: "Use a straightedge to identify high or low spots under the laminate. An uneven subfloor allows planks to flex, stressing locking joints until they release."
    },
    {
      name: "Review whether the floor was acclimated",
      text: "If separation appeared shortly after installation, check whether the laminate was given adequate time to acclimate to the room's temperature and humidity before installation."
    }
  ],
  "how-to-fix-laminate-floor-separation": [
    {
      name: "Map the separated joints",
      text: "Mark every open joint and note whether the gap is at an end joint, long-side joint, doorway, hallway, or across the whole room."
    },
    {
      name: "Check for blocked movement",
      text: "Inspect walls, door frames, transitions, cabinets, islands, and trim to see whether the floating floor is pinned or missing required expansion space."
    },
    {
      name: "Inspect support and moisture",
      text: "Look for bounce, hollow sound, low spots, swollen edges, water history, or high humidity before closing the joint."
    },
    {
      name: "Inspect the locking edges",
      text: "Check the tongue and groove for crushed, chipped, swollen, or worn material. Damaged locking edges may need board replacement."
    },
    {
      name: "Choose the repair path",
      text: "Close the joint only if the cause has been corrected and the locking edges are intact. Otherwise plan for board replacement, substrate correction, or professional inspection."
    }
  ],
  "can-engineered-hardwood-go-over-concrete": [
    {
      name: "Test concrete moisture",
      text: "Conduct a calcium chloride test or in-situ RH probe test per the engineered hardwood manufacturer's instructions. Most products have a maximum acceptable moisture level before installation can proceed."
    },
    {
      name: "Check slab flatness",
      text: "Use a long straightedge to measure high and low spots. Engineered hardwood typically requires the slab to be flat within a specific tolerance — confirm the exact requirement in the product instructions."
    },
    {
      name: "Confirm the installation method",
      text: "Decide between floating, glue-down, or nail-down installation based on the manufacturer's approved methods. Over concrete, glue-down or floating are most common."
    },
    {
      name: "Address moisture issues before installing",
      text: "If moisture readings are too high, use a moisture mitigation product or vapor barrier approved for use with engineered hardwood over concrete before proceeding."
    },
    {
      name: "Acclimate the flooring",
      text: "Follow the acclimation requirements in the product instructions. Store the flooring in the installation room at the expected lived-in conditions until moisture content stabilizes."
    }
  ]
};
