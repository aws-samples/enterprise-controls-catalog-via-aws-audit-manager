"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeElement = void 0;
/**
 * Escapes characters that can not be in an XML element.
 */
function escapeElement(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\r/g, "&#x0D;")
        .replace(/\n/g, "&#x0A;")
        .replace(/\u0085/g, "&#x85;")
        .replace(/\u2028/, "&#x2028;");
}
exports.escapeElement = escapeElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXNjYXBlLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0dBRUc7QUFDSCxTQUFnQixhQUFhLENBQUMsS0FBYTtJQUN6QyxPQUFPLEtBQUs7U0FDVCxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztTQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztTQUN2QixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztTQUN2QixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztTQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztTQUNyQixPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztTQUN4QixPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztTQUN4QixPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztTQUM1QixPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFYRCxzQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXNjYXBlcyBjaGFyYWN0ZXJzIHRoYXQgY2FuIG5vdCBiZSBpbiBhbiBYTUwgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUVsZW1lbnQodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcbiAgICAucmVwbGFjZSgvJy9nLCBcIiZhcG9zO1wiKVxuICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxuICAgIC5yZXBsYWNlKC9cXHIvZywgXCImI3gwRDtcIilcbiAgICAucmVwbGFjZSgvXFxuL2csIFwiJiN4MEE7XCIpXG4gICAgLnJlcGxhY2UoL1xcdTAwODUvZywgXCImI3g4NTtcIilcbiAgICAucmVwbGFjZSgvXFx1MjAyOC8sIFwiJiN4MjAyODtcIik7XG59XG4iXX0=