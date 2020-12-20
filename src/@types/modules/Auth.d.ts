declare module "@modules-auth" {
  export type IFetchAuth = (
    request: IFetchAuthRequestPayload
  ) => Promise<IfetchAuthSuccessPayload & IfetchAuthFailurePayload>;

  export type IFetchUpdatePayment = (
    request: ISavePaymentData
  ) => Promise<IfetchAuthFailurePayload>;

  export type IFetchRegister = (
    request: IFetchRegisterRequest
  ) => Promise<IfetchAuthSuccessPayload & IfetchAuthFailurePayload>;

  export type IFetchAddressList = () => Promise<IFetchAddressListResponse>;

  export type IFetchAddressListResponse = {
    addresses: string[];
  };

  export type IFetchRegisterRequest = {
    email: string;
    password: string;
    name: string;
    surname: string;
  };

  export type IFetchAuthRequestPayload = {
    email: string;
    password: string;
  };

  export type IfetchAuthSuccessPayload = {
    success: boolean;
    token: string;
  };

  export type IfetchAuthFailurePayload = {
    success: boolean;
    error: string;
  };

  export type ILoginData = {
    login?: string;
    password?: string;
  };

  export type IPaymentData = {
    cardNumber?: string;
    date?: Date;
    cardName?: string;
    cvc?: string;
  };

  export type ISavePaymentData = {
    cardNumber: string;
    expiryDate: string;
    cardName: string;
    cvc: string;
    token: string;
  };

  export type IFetchCalculateRouteRequest = {
    address1: string;
    address2: string;
  };

  export type IFetchCalculateRouteResponse = [];

  export type IFetchCalculateRoute = (
    request: any
  ) => Promise<Array<Array<number>>>;
}
