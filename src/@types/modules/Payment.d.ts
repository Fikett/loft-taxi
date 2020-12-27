declare module "@modules-payment" {
  export type IPaymentData = {
    cardNumber: string;
    date: Date;
    cardName: string;
    cvc: string;
  };

  export type ISavePaymentData = {
    cardNumber: string;
    expiryDate: string;
    cardName: string;
    cvc: string;
    token: string;
  };

  export type IFetchGetPaymentRequest = {
    token: string;
  };

  export type IFetchGetPaymentResponse = {
    cardName?: string;
    cardNumber?: string;
    cvc?: string;
    expiryDate?: string;
    id?: string;
  };

  export type IFetchGetPayment = (
    request: IFetchGetPaymentRequest
  ) => Promise<IFetchGetPaymentResponse>;


  export type IFetchUpdatePaymentResponse = {
    error?: string;
    success: boolean
  };

  export type IFetchUpdatePayment = (
    request: ISavePaymentData
  ) => Promise<IFetchUpdatePaymentResponse>;
}
