export interface IUseResponsiveResult {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}

export interface IBlogInfo {
  filename: string;
  createdAt: string;
  lastUpdatedAt: string;
  title: string;
  description?: string;
}
