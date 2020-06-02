import categories from "./components";

export default class Filter {

    constructor() {
        this.categories = categories;
    }

    all() {
        return this.categories;
    }

    whereCategory(category) {

        if(this.isEmpty(category)) return this.categories;

        let pattern = new RegExp(`^${category}`, 'i');

        return this.categories.filter(category => category.name.match(pattern));
    }

    isEmpty(string) {
        return string.length === 0;
    }

}