"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
class KadunaFulfillmentService extends medusa_1.AbstractFulfillmentService {
    constructor() {
        super(...arguments);
        this.deliveryPrices = {
            Abia: {
                "kaduna-fulfillment-public": 120000,
                "kaduna-fulfillment-gig": 180000,
            },
            adamawa: {
                "kaduna-fulfillment-public": 130000,
                "kaduna-fulfillment-gig": 190000,
            },
            "akwa ibom": {
                "kaduna-fulfillment-public": 140000,
                "kaduna-fulfillment-gig": 200000,
            },
            anambra: {
                "kaduna-fulfillment-public": 150000,
                "kaduna-fulfillment-gig": 210000,
            },
            bauchi: {
                "kaduna-fulfillment-public": 160000,
                "kaduna-fulfillment-gig": 220000,
            },
            bayelsa: {
                "kaduna-fulfillment-public": 170000,
                "kaduna-fulfillment-gig": 230000,
            },
            benue: {
                "kaduna-fulfillment-public": 180000,
                "kaduna-fulfillment-gig": 240000,
            },
            borno: {
                "kaduna-fulfillment-public": 190000,
                "kaduna-fulfillment-gig": 250000,
            },
            "Cross River": {
                "kaduna-fulfillment-public": 200000,
                "kaduna-fulfillment-gig": 260000,
            },
            delta: {
                "kaduna-fulfillment-public": 210000,
                "kaduna-fulfillment-gig": 270000,
            },
            ebonyi: {
                "kaduna-fulfillment-public": 220000,
                "kaduna-fulfillment-gig": 280000,
            },
            edo: {
                "kaduna-fulfillment-public": 230000,
                "kaduna-fulfillment-gig": 290000,
            },
            Ekiti: {
                "kaduna-fulfillment-public": 240000,
                "kaduna-fulfillment-gig": 300000,
            },
            enugu: {
                "kaduna-fulfillment-public": 250000,
                "kaduna-fulfillment-gig": 310000,
            },
            gombe: {
                "kaduna-fulfillment-public": 260000,
                "kaduna-fulfillment-gig": 320000,
            },
            imo: {
                "kaduna-fulfillment-public": 270000,
                "kaduna-fulfillment-gig": 330000,
            },
            jigawa: {
                "kaduna-fulfillment-public": 280000,
                "kaduna-fulfillment-gig": 340000,
            },
            kaduna: {
                "kaduna-fulfillment-public": 200000,
                "kaduna-fulfillment-gig": 400000,
            },
            kano: {
                "kaduna-fulfillment-public": 210000,
                "kaduna-fulfillment-gig": 410000,
            },
            katsina: {
                "kaduna-fulfillment-public": 220000,
                "kaduna-fulfillment-gig": 420000,
            },
            kebbi: {
                "kaduna-fulfillment-public": 230000,
                "kaduna-fulfillment-gig": 430000,
            },
            Kogi: {
                "kaduna-fulfillment-public": 240000,
                "kaduna-fulfillment-gig": 440000,
            },
            kwara: {
                "kaduna-fulfillment-public": 250000,
                "kaduna-fulfillment-gig": 450000,
            },
            lagos: {
                "kaduna-fulfillment-public": 800000,
                "kaduna-fulfillment-gig": 150000,
            },
            nasarawa: {
                "kaduna-fulfillment-public": 260000,
                "kaduna-fulfillment-gig": 460000,
            },
            niger: {
                "kaduna-fulfillment-public": 270000,
                "kaduna-fulfillment-gig": 470000,
            },
            ogun: {
                "kaduna-fulfillment-public": 280000,
                "kaduna-fulfillment-gig": 480000,
            },
            ondo: {
                "kaduna-fulfillment-public": 290000,
                "kaduna-fulfillment-gig": 490000,
            },
            osun: {
                "kaduna-fulfillment-public": 300000,
                "kaduna-fulfillment-gig": 500000,
            },
            oyo: {
                "kaduna-fulfillment-public": 310000,
                "kaduna-fulfillment-gig": 510000,
            },
            plateau: {
                "kaduna-fulfillment-public": 320000,
                "kaduna-fulfillment-gig": 520000,
            },
            rivers: {
                "kaduna-fulfillment-public": 330000,
                "kaduna-fulfillment-gig": 530000,
            },
            sokoto: {
                "kaduna-fulfillment-public": 340000,
                "kaduna-fulfillment-gig": 540000,
            },
            taraba: {
                "kaduna-fulfillment-public": 350000,
                "kaduna-fulfillment-gig": 550000,
            },
            yobe: {
                "kaduna-fulfillment-public": 360000,
                "kaduna-fulfillment-gig": 560000,
            },
            zamfara: {
                "kaduna-fulfillment-public": 370000,
                "kaduna-fulfillment-gig": 570000,
            },
            abuja: {
                "kaduna-fulfillment-public": 380000,
                "kaduna-fulfillment-gig": 580000,
            },
        };
    }
    async getFulfillmentOptions() {
        return [
            {
                id: "kaduna-fulfillment-public",
                name: "Public Standard Delivery",
                price: "...",
            },
            {
                id: "kaduna-fulfillment-gig",
                name: "Gig Logistics Express Delivery",
                price: "...",
            },
        ];
    }
    async validateFulfillmentData(optionData, data, cart) {
        if (optionData.id !== "kaduna-fulfillment-public" &&
            optionData.id !== "kaduna-fulfillment-gig") {
            throw new Error("Invalid fulfillment option ID");
        }
        if (data.id === "kaduna-fulfillment-public") {
            // Perform additional validation specific to this option, e.g., weight limits
        }
        else if (data.id === "kaduna-fulfillment-gig") {
            // Validate required data for Gig Logistics integration
        }
        return { ...data };
    }
    async validateOption(data) {
        if (data.id == "kaduna-fulfillment-public" || "kaduna-fulfillment-gig") {
            return true;
        }
        return false;
    }
    async canCalculate(data) {
        if (data.id === "kaduna-fulfillment-public" ||
            data.id === "kaduna-fulfillment-gig") {
            return true;
        }
        return false;
    }
    async calculatePrice(optionData, data, cart) {
        const address = cart.shipping_address;
        if (!(address === null || address === void 0 ? void 0 : address.city)) {
            throw new Error("Delivery address does not have a city property");
        }
        const state = address.city.toLowerCase();
        console.log(state);
        const selectedOption = optionData.id;
        const statePrices = this.deliveryPrices[state];
        if (!statePrices) {
            throw new Error("Delivery price not found for this state");
        }
        const price = statePrices[selectedOption];
        if (!price) {
            throw new Error("Delivery price not found for this option");
        }
        return price;
    }
    async createFulfillment(data, items, order, fulfillment) {
        return {};
    }
    async cancelFulfillment(fullfillment) {
        return {};
    }
    async canReturn() {
        return {};
    }
    async createReturn() {
        return {};
    }
    async getFulfillmentDocuments(data) {
        // assuming you contact a client to
        // retrieve the document
        // return this.client.getFulfillmentDocuments()
        return {};
    }
    async getReturnDocuments(data) {
        // assuming you contact a client to
        // retrieve the document
        // return this.client.getReturnDocuments()
        return {};
    }
    async getShipmentDocuments(data) {
        // assuming you contact a client to
        // retrieve the document
        // return this.client.getShipmentDocuments()
        return {};
    }
    async retrieveDocuments(fulfillmentData, documentType) {
        // assuming you contact a client to
        // retrieve the document
        // return this.client.getDocuments()
        return {};
    }
}
KadunaFulfillmentService.identifier = "kaduna-fulfillment";
exports.default = KadunaFulfillmentService;
