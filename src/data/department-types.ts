export interface GeneratedJob {
  id: string;
  name: string;
}

export interface GeneratedDepartment {
  id: string;
  name: string;
  description: string;
  color: string;
  jobs: GeneratedJob[];
}
