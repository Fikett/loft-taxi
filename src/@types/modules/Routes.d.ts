declare module "@modules-routes" {
  export type IFetchCalculateRouteRequest = {
    address1: string;
    address2: string;
  };

  export type IFetchCalculateRouteResponse = [];

  export type IFetchCalculateRoute = (
    request: any
  ) => Promise<Array<Array<number>>>;

  export type IFetchAddressList = () => Promise<IFetchAddressListResponse>;

  export type IFetchAddressListResponse = {
    addresses: string[];
  };
}
