export class User {
    private _vendorFirstName: string;
    private _vendorLastName: string;
    private _vendorPrimaryEmail: string;
    private _vendorSecondaryEmail: string;
    private _vendorPointOfContactName: string;
    private _vendorPointOfContactAge:number;
    private _vendorPointOfContactPhone: number;
    private _vendorOfficialPhone: number;
    private _vendorOfficialEmail: string;
    private _vendorWebsite: string;
    private _vendorFax : string;
    private _vendorTAN : string;
    private _companyDescription : string;
    private _additionalComments : string;
    //TODO : create address object with location :::: Multiple branch location supported like Bangalore Delhi etc.
    //private _vendorAddress[]: Address[]; 
    private _vendorLineOfBusiness : string;
    private _vendorGstn : string;
    private _vendorBestTimeToCall : string;
    private _isVendorOnboarded:boolean;
    private _vendorActivationStartDate : string;
    private _vendorInactiveDate: string;
    private _vendorType : string[]; // outdoor / digital
    private _vendorSpecializationCategories : string[]; // info to be pulled from category master data created by admin
    //private _User : User; // Info will be based on user role as vendor
    //private _credentials : Credential // User Name Password
  
    get vndfirstName() {
      return this._vendorFirstName;
    }
  
    get vndlastName() {
      return this._vendorLastName;
    }
  
    
  
    constructor(firstName: string, lastName: string, age: number) {
     // do nothing
    }

}
