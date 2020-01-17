export class Invoice  {
  constructor(
    public id: number,
    public creationDate: string,
    public invoiceNumber: number,
    public net: number,
    public tax: number
  ){}
}