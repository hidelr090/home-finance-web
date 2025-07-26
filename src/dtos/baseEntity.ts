export type BaseEntity = {
  id: string;
  createdBy: string;
  deletedBy: string;
  updatedBy: string;
  createdAt: string | Date;
  deletedAt: string | Date;
  updatedAt: string | Date;
}