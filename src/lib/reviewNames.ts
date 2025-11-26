// Utility function to replace anonymous review names with random realistic names

const realisticNames = [
  "Sarah M", "James T", "Emma L", "Michael R", "Olivia C", "David K",
  "Sophie B", "Thomas W", "Charlotte H", "Robert P", "Amelia F", "William G",
  "Isabella S", "Daniel J", "Mia D", "Christopher N", "Grace A", "Matthew V",
  "Lily E", "Andrew Y", "Emily Z", "Joseph X", "Chloe Q", "Benjamin U",
  "Lucy I", "Samuel O", "Zoe M", "Joshua L", "Hannah K", "Ryan P",
  "Ella R", "Nathan S", "Ava T", "Jack W", "Ruby H", "Luke F",
  "Maya G", "Connor D", "Isla J", "Owen N", "Freya B", "Noah C",
  "Poppy E", "Ethan V", "Harper A", "Adam Y", "Scarlett Z", "Lucas X",
  "Layla Q", "Henry U", "Willow I", "Sebastian O", "Ivy M", "Leo L",
  "Nora K", "Max P", "Violet R", "Alex S", "Penelope T", "Oliver W",
  "Rose H", "Theo F", "Aria G", "Finn D", "Elsie J", "Archie N",
  "Florence B", "Harrison C", "Phoebe E", "Mason V", "Daisy A", "Logan Y"
];

// Names that indicate anonymity
const anonymousPatterns = [
  /^anonymous$/i,
  /^anon$/i,
  /^customer$/i,
  /^a\.?\s*customer$/i,
  /^client$/i,
  /^user$/i,
  /^test$/i,
  /^n\/a$/i,
  /^na$/i,
  /^none$/i,
  /^hidden$/i,
  /^private$/i,
  /^confidential$/i,
  /^\s*$/  // Empty or whitespace only
];

// Create a deterministic mapping based on review ID to ensure same anonymous name always gets same replacement
const nameMap = new Map<string, string>();

export function replaceAnonymousName(originalName: string, reviewId: string): string {
  // Check if name appears to be anonymous
  const isAnonymous = anonymousPatterns.some(pattern => pattern.test(originalName.trim()));
  
  if (!isAnonymous) {
    return originalName; // Return original if not anonymous
  }
  
  // Use review ID to get consistent replacement for same review
  if (!nameMap.has(reviewId)) {
    // Generate a deterministic index based on review ID
    const hash = reviewId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % realisticNames.length;
    nameMap.set(reviewId, realisticNames[index]);
  }
  
  return nameMap.get(reviewId) || realisticNames[0];
}

