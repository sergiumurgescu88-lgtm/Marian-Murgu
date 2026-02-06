export interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  iconName: string;
}

export interface ProjectType {
  id: number;
  title: string;
  category: 'Cercetare' | 'Comercial' | 'Public';
  power: string;
  beneficiary: string;
  description: string;
}

export enum CalculationStatus {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}