const encryptors = require("./encryptors");

test("Encrypt word with caesar cipher and shift of 1", () => {
  expect(encryptors.caesarCipher("house", 1)).toBe("ipvtf");
});

test("Encrypt word with caesar cipher and shift of 6", () => {
  expect(encryptors.caesarCipher("comunication", 6)).toBe("iusatoigzout");
});

test("Encrypt word with symbol cipher", () => {
  expect(encryptors.symbolCipher("house")).toBe("h0u$3");
});

test("Encrypt word with reverse cipher", () => {
  expect(encryptors.reverseCipher("house")).toBe("esuoh");
});
