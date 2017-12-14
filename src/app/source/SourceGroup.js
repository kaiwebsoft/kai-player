/**
 * Created by qhyang on 2017/12/12.
 */

import Set from '../Set';

export default class SourceGroup extends Set {
    add(item) {
        item.active = true;

        return super.add(item);
    }
}