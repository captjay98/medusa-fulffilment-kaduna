import {
  AbstractFulfillmentService,
  Cart,
  Order,
  Fulfillment,
  LineItem,
} from "@medusajs/medusa";
// import { FulfillmentService } from "@medusajs/medusa/dist/services";
interface StatePrices {
  [option: string]: number;
}

interface DeliveryPrices {
  [state: string]: StatePrices;
}

class KadunaFulfillmentService extends AbstractFulfillmentService {
  static identifier = "kaduna-fulfillment";

  deliveryPrices: DeliveryPrices = {
    Abia: {
      "kaduna-fulfillment-public": 1200,
      "kaduna-fulfillment-gig": 1800,
    },

    Adamawa: {
      "kaduna-fulfillment-public": 1300,
      "kaduna-fulfillment-gig": 1900,
    },

    "Akwa Ibom": {
      "kaduna-fulfillment-public": 1400,
      "kaduna-fulfillment-gig": 2000,
    },

    Anambra: {
      "kaduna-fulfillment-public": 1500,
      "kaduna-fulfillment-gig": 2100,
    },

    Bauchi: {
      "kaduna-fulfillment-public": 1600,
      "kaduna-fulfillment-gig": 2200,
    },

    Bayelsa: {
      "kaduna-fulfillment-public": 1700,
      "kaduna-fulfillment-gig": 2300,
    },
    Benue: {
      "kaduna-fulfillment-public": 1800,
      "kaduna-fulfillment-gig": 2400,
    },

    Borno: {
      "kaduna-fulfillment-public": 1900,
      "kaduna-fulfillment-gig": 2500,
    },
    "Cross River": {
      "kaduna-fulfillment-public": 2000,
      "kaduna-fulfillment-gig": 2600,
    },
    Delta: {
      "kaduna-fulfillment-public": 2100,
      "kaduna-fulfillment-gig": 2700,
    },
    Ebonyi: {
      "kaduna-fulfillment-public": 2200,
      "kaduna-fulfillment-gig": 2800,
    },
    Edo: {
      "kaduna-fulfillment-public": 2300,
      "kaduna-fulfillment-gig": 2900,
    },
    Ekiti: {
      "kaduna-fulfillment-public": 2400,
      "kaduna-fulfillment-gig": 3000,
    },

    Enugu: {
      "kaduna-fulfillment-public": 2500,
      "kaduna-fulfillment-gig": 3100,
    },

    Gombe: {
      "kaduna-fulfillment-public": 2600,
      "kaduna-fulfillment-gig": 3200,
    },
    Imo: { "kaduna-fulfillment-public": 2700, "kaduna-fulfillment-gig": 3300 },

    Jigawa: {
      "kaduna-fulfillment-public": 2800,
      "kaduna-fulfillment-gig": 3400,
    },
    Kaduna: {
      "kaduna-fulfillment-public": 2000,
      "kaduna-fulfillment-gig": 4000,
    },

    Kano: {
      "kaduna-fulfillment-public": 2100,
      "kaduna-fulfillment-gig": 4100,
    },
    Katsina: {
      "kaduna-fulfillment-public": 2200,
      "kaduna-fulfillment-gig": 4200,
    },
    Kebbi: {
      "kaduna-fulfillment-public": 2300,
      "kaduna-fulfillment-gig": 4300,
    },
    Kogi: {
      "kaduna-fulfillment-public": 2400,
      "kaduna-fulfillment-gig": 4400,
    },
    Kwara: {
      "kaduna-fulfillment-public": 2500,
      "kaduna-fulfillment-gig": 4500,
    },
    Lagos: {
      "kaduna-fulfillment-public": 800,
      "kaduna-fulfillment-gig": 1500,
    },
    Nasarawa: {
      "kaduna-fulfillment-public": 2600,
      "kaduna-fulfillment-gig": 4600,
    },
    Niger: {
      "kaduna-fulfillment-public": 2700,
      "kaduna-fulfillment-gig": 4700,
    },
    Ogun: {
      "kaduna-fulfillment-public": 2800,
      "kaduna-fulfillment-gig": 4800,
    },
    Ondo: {
      "kaduna-fulfillment-public": 2900,
      "kaduna-fulfillment-gig": 4900,
    },
    Osun: {
      "kaduna-fulfillment-public": 3000,
      "kaduna-fulfillment-gig": 5000,
    },
    Oyo: {
      "kaduna-fulfillment-public": 3100,
      "kaduna-fulfillment-gig": 5100,
    },
    Plateau: {
      "kaduna-fulfillment-public": 3200,
      "kaduna-fulfillment-gig": 5200,
    },
    Rivers: {
      "kaduna-fulfillment-public": 3300,
      "kaduna-fulfillment-gig": 5300,
    },
    Sokoto: {
      "kaduna-fulfillment-public": 3400,
      "kaduna-fulfillment-gig": 5400,
    },

    Taraba: {
      "kaduna-fulfillment-public": 3500,
      "kaduna-fulfillment-gig": 5500,
    },

    Yobe: {
      "kaduna-fulfillment-public": 3600,
      "kaduna-fulfillment-gig": 5600,
    },

    Zamfara: {
      "kaduna-fulfillment-public": 3700,
      "kaduna-fulfillment-gig": 5700,
    },

    "Federal Capital Territory (Abuja)": {
      "kaduna-fulfillment-public": 3800,
      "kaduna-fulfillment-gig": 5800,
    },
  };

  async getFulfillmentOptions(): Promise<any[]> {
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

  async validateFulfillmentData(
    optionData: Record<string, unknown>,
    data: Record<string, unknown>,
    cart: Cart,
  ): Promise<Record<string, unknown>> {
    console.log("DATA!!", data);
    if (
      data.id !== "kaduna-fulfillment-public" &&
      data.id !== "kaduna-fulfillment-gig"
    ) {
      throw new Error("Invalid fulfillment option ID");
    }

    if (data.id === "kaduna-fulfillment-public") {
      // Perform additional validation specific to this option, e.g., weight limits
    } else if (data.id === "kaduna-fulfillment-gig") {
      // Validate required data for Gig Logistics integration
    }

    return { ...data };
  }

  async validateOption(data: Record<string, unknown>): Promise<boolean> {
    if (data.id == "kaduna-fulfillment-public" || "kaduna-fulfillment-gig") {
      return true;
    }
    return false;
  }

  async canCalculate(data: Record<string, unknown>): Promise<boolean> {
    if (
      data.id === "kaduna-fulfillment-public" ||
      data.id === "kaduna-fulfillment-gig"
    ) {
      return true;
    }
    return false;
  }

  async calculatePrice(
    optionData: Record<string, unknown>,
    data: Record<string, unknown>,
    cart: Cart,
  ): Promise<number> {
    const address = cart.shipping_address;

    if (!address?.city) {
      throw new Error("Delivery address does not have a city property");
    }

    const state = address.city as string;
    const selectedOption = data.id as string;

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

  async createFulfillment(
    data: Record<string, unknown>,
    items: LineItem[],
    order: Order,
    fulfillment: Fulfillment,
  ) {
    return {};
  }

  async cancelFulfillment(fullfillment: Record<string, unknown>): Promise<any> {
    return {};
  }

  async canReturn() // returnOrder: CreateReturnType,
    : Promise<Record<string, unknown>> {
    return {};
  }

  async createReturn() // returnOrder: CreateReturnType
    : Promise<Record<string, unknown>> {
    return {};
  }

  async getFulfillmentDocuments(data: Record<string, unknown>): Promise<any> {
    // assuming you contact a client to
    // retrieve the document
    // return this.client.getFulfillmentDocuments()
    return {};
  }

  async getReturnDocuments(data: Record<string, unknown>): Promise<any> {
    // assuming you contact a client to
    // retrieve the document
    // return this.client.getReturnDocuments()
    return {};
  }

  async getShipmentDocuments(data: Record<string, unknown>): Promise<any> {
    // assuming you contact a client to
    // retrieve the document
    // return this.client.getShipmentDocuments()
    return {};
  }

  async retrieveDocuments(
    fulfillmentData: Record<string, unknown>,
    documentType: "invoice" | "label",
  ): Promise<any> {
    // assuming you contact a client to
    // retrieve the document
    // return this.client.getDocuments()
    return {};
  }
}

export default KadunaFulfillmentService;
