heroesUrl = 'app/heroes'; // URL to web api
constructor(private, http, Http);
{ }
getHeroes();
{
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(function (response) { return response.json().data; })
        .catch(this.handleError);
}
//# sourceMappingURL=weather_service.js.map