import components from "./Components";

export default class ComponentsFilter {
    constructor() {
        this.components = components;
    }

    all() {
        return this.components;
    }

    whereCategory(category) {
        if (this.isEmpty(category)) return this.components;

        let pattern = new RegExp(`^${category}`, "i");

        return this.components.filter((category) =>
            category.name.match(pattern)
        );
    }

    isEmpty(string) {
        return string.length === 0;
    }
}
