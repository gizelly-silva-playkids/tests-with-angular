import { GenerateUniqueIdService } from './generate-unique-id.service';

describe(GenerateUniqueIdService.name, () => {
  let service: GenerateUniqueIdService;

  beforeEach(() => {
    service = new GenerateUniqueIdService();
  });

  it(`#${GenerateUniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${GenerateUniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${GenerateUniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 100; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(100);
  });

  it(`#${GenerateUniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
      const emptyValues = [null, undefined, '', '0', '1'];
      emptyValues.forEach((emptyValue: any) => {
        expect(() => service.generateUniqueIdWithPrefix(emptyValue))
          .withContext(`Empty value: ${emptyValue}`)
          .toThrow();
      });
    });
});
