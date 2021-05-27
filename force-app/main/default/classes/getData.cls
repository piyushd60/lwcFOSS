public with sharing class getData {
    public getData() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account>  getRecords(String objectName){
        
        List<Account> accountList = [SELECT Id,Name,Phone,AccountNumber FROM Account];
        if (accountList != null && accountList.size() >0){
            return accountList;
        }
        return null;
    }
}
