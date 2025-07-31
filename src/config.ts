import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Artisto Token Exchange",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1z3es3h3866ha8cr5gk5d0g6askv6pf3v9axxxvnmhqt4jlwdt8mqj0uq9t",
            cw20: "andr1c89hhm0uy4nxw67ffku0trawudjy7ts556gepc8nufn8l7yu034sk5xtxw",
            name: "Artisto Token Exchange",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
