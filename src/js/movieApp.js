"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.displayNoResult = exports.createHtml = exports.handleSubmit = exports.init = void 0;
var movieservice_1 = require("./services/movieservice");
var movies = [];
//anropas i roten av main.ts, hämtar formulär från html och lyssnar efter klick -> anropar handleclick
var init = function () {
    var form = document.getElementById("searchForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        exports.handleSubmit();
    });
};
exports.init = init;
//lägger söktexten i en variabel
function handleSubmit() {
    return __awaiter(this, void 0, void 0, function () {
        var searchText, container, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    searchText = document.getElementById("searchText")
                        .value;
                    container = document.getElementById("movie-container");
                    container.innerHTML = "";
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, movieservice_1.getData)(searchText)];
                case 2:
                    movies = _b.sent();
                    //om filmer hittas anropas createHtml, annars displayNoResults
                    if (movies.length > 0) {
                        exports.createHtml(movies, container);
                    }
                    else {
                        exports.displayNoResult(container);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    _a = _b.sent();
                    exports.displayNoResult(container);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleSubmit = handleSubmit;
//tar emot och skriver ut listan, skapar html för bild,titel och container
var createHtml = function (movies, container) {
    for (var i = 0; i < movies.length; i++) {
        var movie = document.createElement("div");
        var title = document.createElement("h3");
        var img = document.createElement("img");
        //lägger till klassen movie på div, varför?
        movie.classList.add("movie");
        title.innerHTML = movies[i].Title;
        img.src = movies[i].Poster;
        img.alt = movies[i].Title;
        movie.appendChild(title);
        movie.appendChild(img);
        container.appendChild(movie);
    }
};
exports.createHtml = createHtml;
var displayNoResult = function (container) {
    var noMessage = document.createElement("p");
    noMessage.innerHTML = "Inga sökresultat att visa";
    container.appendChild(noMessage);
};
exports.displayNoResult = displayNoResult;
