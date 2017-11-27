function showAllProjectAreas(){
    
    //Send ajax request to RTC Server to fetch the available project areas
    $.ajax({
        async:false,
        url:'https://localhost:9443/ccm/service/com.ibm.team.process.internal.service.web.IProcessWebUIService/allProjectAreas',
        headers : {
            'Accept' : 'text/json'
        },
        success:function(data){

            //Success message is captured and the response is displayed to the user
            console.log(data['soapenv:Body'].response.returnValue.values);
            var projectAreaName='';
            data['soapenv:Body'].response.returnValue.values.forEach(function(element) {
                projectAreaName=projectAreaName+"<li>"+element.name+"</li>";
            }, this);

            $("#projectAreas").html(projectAreaName);
        },
        error:function(error){
            console.error(error);
            alert('error');
        }
    });

}