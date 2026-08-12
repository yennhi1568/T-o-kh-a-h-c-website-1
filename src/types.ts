export interface PromptTemplate {
  id: string;
  title: string;
  category: string;
  promptText: string;
  previewImageName: string;
  tags: string[];
}

export interface CurriculumModule {
  id: number;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  points: string[];
  gradient: string;
}

export interface DigitalProductCategory {
  title: string;
  icon: string;
  description: string;
  examples: string[];
  color: string;
}

export interface WebsiteExample {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  timeToBuild: string;
  imageBg: string;
  accentColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface SocialNotification {
  id: string;
  name: string;
  location: string;
  timeAgo: string;
  action: string;
}
