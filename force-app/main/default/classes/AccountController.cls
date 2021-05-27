public with sharing class AccountController {
 
    @AuraEnabled( cacheable = true )
    public static List< Account > fetchAccounts() {
     
        return [ SELECT Id, Name, Industry, Rating, Type, AccountNumber, Phone FROM Account where Phone != null LIMIT 15];
         
    }
     
}