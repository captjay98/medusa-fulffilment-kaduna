import { AbstractFulfillmentService, Cart, Order, Fulfillment, LineItem } from "@medusajs/medusa";
interface StatePrices {
    [option: string]: number;
}
interface DeliveryPrices {
    [state: string]: StatePrices;
}
declare class KadunaFulfillmentService extends AbstractFulfillmentService {
    static identifier: string;
    deliveryPrices: DeliveryPrices;
    getFulfillmentOptions(): Promise<any[]>;
    validateFulfillmentData(optionData: Record<string, unknown>, data: Record<string, unknown>, cart: Cart): Promise<Record<string, unknown>>;
    validateOption(data: Record<string, unknown>): Promise<boolean>;
    canCalculate(data: Record<string, unknown>): Promise<boolean>;
    calculatePrice(optionData: Record<string, unknown>, data: Record<string, unknown>, cart: Cart): Promise<number>;
    createFulfillment(data: Record<string, unknown>, items: LineItem[], order: Order, fulfillment: Fulfillment): Promise<{}>;
    cancelFulfillment(fullfillment: Record<string, unknown>): Promise<any>;
    canReturn(): Promise<Record<string, unknown>>;
    createReturn(): Promise<Record<string, unknown>>;
    getFulfillmentDocuments(data: Record<string, unknown>): Promise<any>;
    getReturnDocuments(data: Record<string, unknown>): Promise<any>;
    getShipmentDocuments(data: Record<string, unknown>): Promise<any>;
    retrieveDocuments(fulfillmentData: Record<string, unknown>, documentType: "invoice" | "label"): Promise<any>;
}
export default KadunaFulfillmentService;
