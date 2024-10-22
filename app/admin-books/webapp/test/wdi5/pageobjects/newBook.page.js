module.exports = {
        /**
         * define actions for the page object
         */
        iEnterTextInTheControl: async () => {
                await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::EditableHeaderForm::EditableHeaderTitle::Field-edit",
                        interaction: {
                                idSuffix: "inner"
                        }
                }}).enterText("test");
            },

            iSelectGenre: async () => {
                await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::genre_ID::Field-edit-inner",
                        interaction: {
                                idSuffix: "inner"
                        }
                }}).press();
                
                        await browser.asControl({
                                selector: {
                                controlType: "sap.m.Text",
                                viewId: "books::BooksDetailsList",
                                bindingPath: {
                                        path: "/Genres(10)",
                                        propertyPath: "name"
                                },
                                searchOpenDialogs: true
                        }}).press();
                    
            },

            iSelectAuthor: async () => {
                await browser.asControl({
                        selector: {
                        controlType: "sap.m.Text",
                        viewId: "books::BooksDetailsList",
                        bindingPath: {
                                path: "/Authors(101)",
                                propertyPath: "name"
                        },
                        searchOpenDialogs: true
                }}).press();
            },
            iSeeEditButton: async () => {
                const enabled = await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::StandardAction::Edit"
                }}).getEnabled();
                expect(enabled).toBeTruthy();
            },

            iPressCreate: async () => {
                await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::FooterBar::StandardAction::Save",
                        interaction: {
                                idSuffix: "BDI-content"
                        }
                }}).press();
            },
            iNavigateBack: async () => {
                await browser.asControl({
                        selector: {
                        id: "backBtn"
                }}).press();
            }
        /**
         * define assertions for the page object
         */
};