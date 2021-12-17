public with sharing class RestClassPostal {
    public RestClassPostal() {

    }

   public static void GetPostOffice(String PCode)
   {
       string endpoint='https://api.postalpincode.in/pincode/'+Pcode;
       string errorMsg='';

       Http http=new Http();
       HttpRequest request=new HttpRequest();
       request.setMethod('GET');
       request.setEndpoint(endpoint);
       request.setHeader('Content-Type','application/json');
       HttpResponse response=new HttpResponse();

       try 
       {
           response=http.send(request);
           if(response.getStatusCode()== 200)
           {
               string Body=response.getBody();
               PostalCodeClass pclass=(PostalCodeClass)System.JSON.deserialize(body,PostalCodeClass.class);
               List<PostalCodeClass.results> results=pclass.results;
               PostalCodeClass.results result=results.get(0);
               System.debug(LoggingLevel.DEBUG,result);
           }
      }
        
       catch (Exception e)
        {
            errorMsg='Request failed to send!';
       }
    }
   }


