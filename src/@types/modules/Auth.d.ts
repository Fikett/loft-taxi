declare module "@modules-auth" {
  export type IRegisterStatus = {
    success: boolean;
    token: string;
  };

  export type IFetchRegisterRequest = {
    email: string;
    password: string;
    name: string;
    surname: string;
  };

  export type IFetchRegisterResponse = IfetchAuthSuccessPayload &
    IfetchAuthFailurePayload;

  export type IFetchRegister = (
    request: IFetchRegisterRequest
  ) => Promise<IFetchRegisterResponse>;

  export type ILoginData = {
    email?: string;
    password?: string;
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
    error: string;
  };

  export type IfetchAuthResponse = IfetchAuthSuccessPayload &
    IfetchAuthFailurePayload;

  export type IFetchAuth = (
    request: IFetchAuthRequestPayload
  ) => Promise<IfetchAuthResponse>;
}
