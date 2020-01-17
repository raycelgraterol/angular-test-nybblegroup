export class Invoice  {
  constructor(
    public id: string,
    public creationDate: string,
    public invoiceNumber: number,
    public net: number,
    public tax: any
  ){}
}