"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var http_1 = require("@angular/http");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var search_service_1 = require("./search.service");
describe('Service: Search', function () {
    var service;
    var backend;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.JsonpModule],
            providers: [
                search_service_1.SearchService,
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Jsonp,
                    useFactory: function (backend, options) { return new http_1.Jsonp(backend, options); },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                }
            ]
        });
        // Get the MockBackend
        backend = testing_1.TestBed.get(testing_2.MockBackend);
        // Returns a service with the MockBackend so we can test with dummy responses
        service = testing_1.TestBed.get(search_service_1.SearchService);
    });
    it('search should return SearchItems', testing_1.fakeAsync(function () {
        var response = {
            "resultCount": 1,
            "results": [
                {
                    "artistId": 78500,
                    "artistName": "U2",
                    "trackName": "Beautiful Day",
                    "artworkUrl60": "image.jpg",
                }
            ]
        };
        // When the request subscribes for results on a connection, return a fake response
        backend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response({
                body: JSON.stringify(response)
            }));
        });
        // Perform a request and make sure we get the response we expect
        service.search("U2");
        testing_1.tick();
        expect(service.results.length).toBe(1);
        expect(service.results[0].artist).toBe("U2");
        expect(service.results[0].name).toBe("Beautiful Day");
        expect(service.results[0].thumbnail).toBe("image.jpg");
        expect(service.results[0].artistId).toBe(78500);
    }));
});
//# sourceMappingURL=search.service.spec.js.map