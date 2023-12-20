"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeeDocumentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_employee_document_dto_1 = require("./create-employee_document.dto");
class UpdateEmployeeDocumentDto extends (0, swagger_1.PartialType)(create_employee_document_dto_1.CreateEmployeeDocumentDto) {
}
exports.UpdateEmployeeDocumentDto = UpdateEmployeeDocumentDto;
//# sourceMappingURL=update-employee_document.dto.js.map