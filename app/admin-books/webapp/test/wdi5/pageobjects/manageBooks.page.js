module.exports = {
  /**
    * define actions for the page object
  */
  iClickOnCreateNewBook:async () => {
  await browser.asControl({
    selector: {
          id: "books::BooksDetailsList--fe::EditableHeaderForm::EditableHeaderTitle::Field-edit",
          interaction: {
                  idSuffix: "inner"
          }
  }}).enterText();
},

theBookListContains: async (sBook) => {
  const text = await browser.asControl({
    selector: {
          controlType: "sap.m.Text",
          viewId: "books::BooksList",
          properties: {
                  text: sBook
          }
  }}).getText();
  expect(text).toEqual(sBook);
}
  /**
   * define assertions for the page object
   */
}