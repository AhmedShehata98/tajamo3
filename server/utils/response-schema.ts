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

export class ResponseSchema<T> implements ResponseSchemaType<T> {
  constructor(
    public data: T,
    public success: boolean,
    public message: string
  ) {}
}

export class ResponseSchemaWithPagination<T>
  implements ResponseSchemaTypeWithPagination<T>
{
  constructor(
    public data: T,
    public success: boolean,
    public message: string,
    public pagination: { total: number; page: number; limit: number }
  ) {}
}
