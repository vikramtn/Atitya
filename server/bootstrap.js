/**
 * Created by VikramTN on 10/14/15.
 */
Meteor.startup(function () {

//update the service configurations for oauth
    updateServiceConfigurations();
    
    //insert static data
    
    insertReligionData();


});


function updateServiceConfigurations(){

    console.log("Deleting service configurations");

    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });
    /*ServiceConfiguration.configurations.remove({
        service: "google"
    });*/

    console.log("Creating service configurations");


    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId: '514904751999374',
        secret: '90d3caa75996d43494b06cf8b8666667'
    });

   /* ServiceConfiguration.configurations.insert({
        service: 'google',
        clientId: '623384746995-rafgs4q5fp95i1dn4v2vokgu7r5mrct4.apps.googleusercontent.com',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://accounts.google.com/o/oauth2/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        secret: '-y84ZW-Wpqme6EwI00p7EALb',
        /!*
         redirect_uris: 'http://localhost:3000/_oauth/google?close',
         *!/
        redirect_uris: 'http://localhost:3000/addDevice',
        javascript_origins: 'https://localhost:3000'
    } );
*/

    return;
}