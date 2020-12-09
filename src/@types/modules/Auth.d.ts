declare module '@modules-auth' {
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

  
  }
  