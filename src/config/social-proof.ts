export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type VerifiedReview = {
  quote: string;
  author: string;
  role: string;
  company: string;
  sourceUrl?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: {
    src: string;
    alt: string;
  };
  profileUrl?: string;
};

// Publicar únicamente contenido autorizado y verificable.
export const caseStudies: CaseStudy[] = [];
export const verifiedReviews: VerifiedReview[] = [];
export const teamMembers: TeamMember[] = [];

export const hasPublishedProof =
  caseStudies.length > 0 || verifiedReviews.length > 0;
