export class GoodsModel {

    constructor(
        public Id: number,
        public Name: string,
        public Type: string,
        public Description: string,
        public OfficialPrice: number,
        public Price: number,
        public Status: string,
        public ShopId: number,
        public Vacancy?: number,
        public SalesQuntity?: number,
        public CreatedTime?: Date) { }
}
