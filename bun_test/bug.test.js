

test("test 1", () => {
  let s="hola"
  expect(JSON.stringify(s)).toMatchSnapshot();
});

test("test2 ", () => {
  let s="código"
  expect(JSON.stringify(s)).toMatchSnapshot();
});


