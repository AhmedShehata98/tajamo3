export type ResponseSchemaType<T> = {
  data: T;
  success: boolean;
  message: string;
};

export type ResponseSchemaTypeWithPagination<T> = ResponseSchemaType<T> & {
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
};
