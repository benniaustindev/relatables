declare class ChildrenMap extends Map<object, Array<object>> {
}
declare class ParentMap extends Map<object, object | null> {
}
export declare const childMap: ChildrenMap;
export declare const parentMap: ParentMap;
export declare function clearAllRelatables(): void;
export declare function setChildren(newParent: object, ...newChildren: Array<object>): Array<object>;
export declare function getChildren(parent: object): Array<object>;
export declare function removeParent(childObject: object): object;
export declare function getParent(child: object): object | null;
export {};
//# sourceMappingURL=maps.d.ts.map