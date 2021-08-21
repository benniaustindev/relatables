import { getChildren, getParent } from "../utilities/maps";
export { getParent, getChildren };
export declare function getAncestors(descendentObject: object): Array<object> | null;
export declare function getInclusiveAncestors(object: object): Array<object>;
export declare function getFirstChild(parentObject: object): object | null;
export declare function getLastChild(parentObject: object): object | null;
export declare function getInclusiveSiblings(siblingObject: object): Array<object> | null;
export declare function getSiblings(siblingObject: object): Array<object> | null;
export declare function getPreviousSiblings(siblingObject: object): Array<object> | null;
export declare function getNextSiblings(siblingObject: object): Array<object> | null;
export declare function getNextSibling(siblingObject: object): object | null;
export declare function getPreviousSibling(siblingObject: object): object | null;
//# sourceMappingURL=index.d.ts.map