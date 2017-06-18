export class  mentordetail{ 
    public name:string;
    public category:string;
    public schedule:string;

    connectionstring()
    {
        return "http://localhost:7025/api/values/";
        // //'http://mentormenteewebapi.azurewebsites.net/api/values
    }
}
 