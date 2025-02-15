self.__uv$config = {
    prefix: `/server/`,
    bare: `/https://web.201812.xyz/`,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/server/server.handler.js',
    client: '/server/server.client.js',
    bundle: '/server/server.bundle.js',
    config: '/server/server.config.js',
    sw: '/server/server.sw.js',
};
