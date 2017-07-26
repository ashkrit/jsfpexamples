
var elements = [10, 2, 20, 1];
function makeTree(parent, value) {
    if (parent === null) {
        return {
            "value": value,
            "left": null,
            "right": null
        }
    }

    if (value < parent.value) {
        parent.left = makeTree(parent.left, value);
    }
    else {
        parent.right = makeTree(parent.right, value);
    }
    return parent;
}

elements.reduce(makeTree, null)