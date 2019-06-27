/**
 * Created by qhyang on 2017/12/11.
 */

import ISet from "./ISet";

export default abstract class<T> implements ISet<T> {
    public name?: string;
    public active: number|null;
    protected items: T[];

    get length() {
        return this.items.length;
    }

    constructor({ name }: { name?: string } = {}) {
        this.name = name;
        this.items = [];
        this.active = null;
    }

    public load(items: T|T[]) {
        if (items instanceof Array) {
            this.items = items;
        } else {
            this.items = [items];
        }

        return this.length;
    }

    /**
     *
     * Add item to the set, return the new length.
     *
     * @param {*[]} items
     * @returns {number}
     */
    public add(items: T|T[]) {
        if (items instanceof Array) {
            if (items.filter((item) => item === undefined).length) {
                throw new Error("No item passed.");
            }

            this.items.push(...items);
        } else {
            if (items === undefined) {
                throw new Error("No item passed.");
            }

            this.items.push(items);
        }

        if (this.items.length === 1) {
            this.active = 0;
        }

        return this.length - 1;
    }

    public get(index: number): T;
    public get(index: undefined|null): T[];
    public get(index: number|undefined|null) {
        if (typeof index === "number") {
            return this.items[index];
        }

        return this.items;
    }
}
