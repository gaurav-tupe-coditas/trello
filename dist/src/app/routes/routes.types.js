export class Route {
    path;
    router;
    static RegisteredPaths = [];
    constructor(path, router){
        this.path = path;
        this.router = router;
        if (!path.startsWith("/")) throw "Path name is invalid";
        if (Route.RegisteredPaths.includes(path)) throw "Path is already registered";
        Route.RegisteredPaths.push(path);
    }
}

//# sourceMappingURL=routes.types.js.map