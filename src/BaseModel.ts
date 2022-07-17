export class BaseModel {
  id: number | null = null;
  createdDate: number | string | null = null;
  createdTime: number | string | null = null;
  createdBy: string | null = null;
  updatedDate: number | string | null = null;
  updatedTime: number | string | null = null;
  updatedBy: string | null = null;
}

export class BaseQuery {
  page?: number | string | null = null;
  search?: string | null = null;
  sortBy?: string | null = null;
  sortDirection?: string | null = null;
}
