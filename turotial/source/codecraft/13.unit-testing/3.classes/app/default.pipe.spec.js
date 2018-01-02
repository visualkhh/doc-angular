"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var default_pipe_1 = require("./default.pipe");
describe('Pipe: Default', function () {
    var pipe;
    beforeEach(function () {
        pipe = new default_pipe_1.DefaultPipe();
    });
    it('providing no value returns fallback', function () {
        expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
    });
    it('providing a value returns value', function () {
        expect(pipe.transform('http://place-hold.it/300', 'fallback')).toBe('http://place-hold.it/300');
    });
    it('asking for https returns https', function () {
        expect(pipe.transform('', 'http://place-hold.it/300', true)).toBe('https://place-hold.it/300');
    });
});
//# sourceMappingURL=default.pipe.spec.js.map